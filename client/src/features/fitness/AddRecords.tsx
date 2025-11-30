import { useEffect, useRef, useState } from "react";
import Button from "../../ui/components/Button";
import Modal from "../../ui/components/Modal";
import AddRecord from "./AddRecord";
import useAuth from "../../hooks/useAuth";
import { DEBOUNCE_DELAY } from "../../utils/constants";
import { useDebounce } from "../../hooks/useDebounce";
import { fetchCaloriesBurnedData } from "../../apis/caloriesFetchApi";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { getWorkoutsApi, insertWorkoutApi } from "../../apis/workoutsApi";
import { read } from "../../slices/recordsSlice";
import { validValueFilter } from "../../utils/filters";

function AddRecords() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const [isCalculating, setIsCalculating] = useState(false);
  const { id: user_id } = useAuth();
  const { weight } = useSelector((store) => store.user);
  const abortGetCalories = useRef(null);

  const [lastFetchRecord, setLastFetchRecord] = useState([]);

  const [records, setRecords] = useState([
    {
      temp_id: 0,
      item: "",
      duration: 0,
      calories: 0,
    },
  ]);
  const [nextId, setNextId] = useState(1);

  useEffect(() => {
    const resetStates = () => {
      setRecords([
        {
          temp_id: 0,
          item: "",
          duration: 0,
          calories: 0,
        },
      ]);
      setNextId(1);
    };
    if (isOpen === false) {
      resetStates();
    }
  }, [isOpen]);

  function isValidRecord(record) {
    return record.item !== "" && record.duration !== 0 && record.calories !== 0;
  }

  const canSubmit =
    records.every((record) => isValidRecord(record)) && !isCalculating;

  const getCalories = async function (params) {
    const { weight, updateNeeded } = params;
    setIsCalculating(true);
    if (abortGetCalories?.current) {
      abortGetCalories.current.abort();
    }
    abortGetCalories.current = new AbortController();
    const results = await Promise.all(
      updateNeeded.map((record) =>
        fetchCaloriesBurnedData(
          validValueFilter({
            id: record.temp_id,
            activity: record.item,
            weight,
            duration: record.duration,
          }),
        ),
      ),
    );

    setRecords(
      records.map((record) => {
        const result = results.find((res) => res.id === record.temp_id);
        return result ? { ...record, calories: result.calories } : record;
      }),
    );

    setRecords((records) => {
      setLastFetchRecord(records);
      return records;
    });

    setIsCalculating(false);
  };

  const deboncedGetCalories = useDebounce(getCalories, DEBOUNCE_DELAY);

  useEffect(() => {
    const updateNeeded = records.filter(
      (record) =>
        !lastFetchRecord.some(
          (old) => old.item === record.item && old.duration === record.duration,
        ) &&
        record.item &&
        record.duration > 0,
    );
    deboncedGetCalories({ weight, updateNeeded });
  }, [records, lastFetchRecord]);

  const allItems = ["swimming", "skiing", "cycling", "running", "hiking"];

  const availableItems = allItems.filter(
    (item) => !records.some((record) => record.item === item),
  );

  function handleAddRecordItem() {
    setRecords((records) => [
      ...records,
      {
        temp_id: nextId,
        item: "",
        duration: 0,
        calories: 0,
      },
    ]);
    setNextId((nextId) => nextId + 1);
  }

  function handleRemoveRecordItem(id) {
    setRecords(records.filter((record) => record.temp_id !== id));
  }

  function handleFormDataChange(id, { key, value }) {
    setRecords([
      ...records.map((record) => {
        return record.temp_id === id ? { ...record, [key]: value } : record;
      }),
    ]);
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      if (!canSubmit) return;

      const isoStr = new Date().toISOString();
      const submittedRecords = records.map((record) => {
        const { item, calories, duration } = record;
        return { calories, item, duration, date: isoStr, user_id };
      });

      await Promise.all(
        submittedRecords.map((submittedRecord) =>
          insertWorkoutApi(submittedRecord),
        ),
      );
      const newWorkouts = await getWorkoutsApi(user_id);
      dispatch(read(newWorkouts));
      setIsOpen(false);
      if (!weight) {
        throw new Error(
          "Warnning: please fill your personal info to get accurate result",
        );
      }
      toast.success("Successfully added your workout today");
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  }

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Add Records</Button>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <div className="max-h-72 overflow-y-auto px-7">
            {records.map((record) => (
              <AddRecord
                availableItems={availableItems}
                onRemove={handleRemoveRecordItem}
                onFormDataChanged={handleFormDataChange}
                record={record}
                key={record.temp_id}
              />
            ))}
          </div>
          <div className="flex justify-between">
            <Button onClick={handleAddRecordItem}>Add</Button>
            <Button
              color={"confirm"}
              disabled={!canSubmit}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default AddRecords;
