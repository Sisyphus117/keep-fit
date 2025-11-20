import { useEffect, useRef, useState } from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../slices/recordsSlice";
import { fetchCaloriesBurnedData } from "./caloriesFetch";
import { useDebounce } from "../../hooks/useDebounce";
import { DEBOUNCE_DELAY } from "../../utils/constants";

function AddRecord() {
  const dispatch = useDispatch();
  const { weight } = useSelector((store) => store.user);
  const abortGetCalories = useRef(null);

  const [formData, setFormData] = useState({
    item: "",
    duration: 0,
    calories: 0,
  });

  const getCalories = async function (params) {
    const { item, duration, weight } = params;
    if (!item || duration === 0) {
      return;
    }
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
  };

  const deboncedGetCalories = useDebounce(getCalories, DEBOUNCE_DELAY);

  useEffect(() => {
    deboncedGetCalories({ weight, ...formData });
  }, [formData.duration, formData.item, weight]);

  function handleChange(e) {
    const { id, value } = e.target;
    if (!isNaN(+value) && +value < 0) {
      return;
    }
    setFormData((prev) => ({ ...prev, [id]: value }));
  }

  function clearForm() {
    setFormData({
      item: "",
      duration: 0,
      calories: 0,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isoStr = new Date().toISOString();
    const submittedData = {
      ...formData,
      id: isoStr,
      time: isoStr,
    };
    dispatch(add(submittedData));
    clearForm();
  }
  return (
    <form
      className="grid grid-cols-[auto_200px] items-center gap-5"
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
      </div>
      <div className="contents">
        <label className="w-20">Duration</label>
        <input
          required
          type="number"
          id="duration"
          value={formData.duration}
          onChange={handleChange}
        ></input>
      </div>
      <div className="contents">
        <label className="w-20">Calories</label>
        <input
          className="cursor-not-allowed"
          readOnly
          type="number"
          id="calories"
          value={formData.calories}
          onChange={handleChange}
        ></input>
      </div>
      <div className="col-span-full flex justify-end">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}

export default AddRecord;
