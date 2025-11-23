import { useEffect, useRef, useState } from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { read } from "../../slices/recordsSlice";
import { fetchCaloriesBurnedData } from "./caloriesFetch";
import { useDebounce } from "../../hooks/useDebounce";
import { DEBOUNCE_DELAY } from "../../utils/constants";
import useFormData from "../../hooks/useFormData";
import useAuth from "../../hooks/useAuth";
import { getWorkoutsApi, insertWorkoutApi } from "../../apis/workoutsApi";
import toast from "react-hot-toast";

function AddRecord() {
  const dispatch = useDispatch();
  const [isCalculating, setIsCalculating] = useState(false);
  const { id: user_id } = useAuth();
  const { weight } = useSelector((store) => store.user);
  const abortGetCalories = useRef(null);
  const { formData, setFormData, clearForm, handleChange } = useFormData({
    item: "",
    duration: 0,
    calories: 0,
  });

  const canSubmit =
    formData.item &&
    formData.duration > 0 &&
    formData.calories > 0 &&
    !isCalculating;

  const getCalories = async function (params) {
    const { item, duration, weight } = params;
    if (!item || duration === 0) {
      setIsCalculating(false);
      return;
    }
    setIsCalculating(true);
    if (abortGetCalories?.current) {
      abortGetCalories.current.abort();
    }
    abortGetCalories.current = new AbortController();
    fetchCaloriesBurnedData({
      activity: item,
      weight,
      duration,
    }).then((calories) =>
      setFormData((prev) => ({ ...prev, calories: calories })),
    );
    setIsCalculating(false);
  };

  const deboncedGetCalories = useDebounce(getCalories, DEBOUNCE_DELAY);

  useEffect(() => {
    deboncedGetCalories({ weight, ...formData });
  }, [formData.duration, formData.item, weight]);

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      if (!canSubmit) return;

      const isoStr = new Date().toISOString();
      const submittedData = {
        ...formData,
        date: isoStr,
        user_id,
      };
      await insertWorkoutApi(user_id, submittedData);
      const newWorkouts = await getWorkoutsApi(user_id);
      dispatch(read(newWorkouts));
      clearForm();
      toast.success("Successfully added your workout today.");
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  }
  return (
    <form
      className="grid grid-cols-[auto_200px] items-center justify-center gap-5"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="contents">
        <label className="w-20">Item</label>
        <select
          required
          id="item"
          value={formData.item}
          onChange={handleChange}
        >
          <option value="">Please select an item</option>
          <option value="swimming">Swimming</option>
          <option value="skiing">Skiing</option>
          <option value="cycling">Cycling</option>
        </select>
        <label className="w-20">Duration</label>
        <input
          required
          type="number"
          id="duration"
          value={formData.duration}
          onChange={handleChange}
        />
        <label className="w-20">Calories</label>
        <input
          className="cursor-not-allowed"
          readOnly
          type="number"
          id="calories"
          value={formData.calories}
          onChange={handleChange}
        />
      </div>
      <div className="col-span-full flex justify-end">
        <Button type="submit" disabled={!canSubmit}>
          {isCalculating ? "Calcing..." : "Submit"}
        </Button>
      </div>
    </form>
  );
}

export default AddRecord;
