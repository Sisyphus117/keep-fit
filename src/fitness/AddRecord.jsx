import { useState } from "react";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { add } from "./recordsSlice";

function AddRecord() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    item: "",
    duration: 0,
    calories: 0,
  });

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
          <option value="swim">Swim</option>
          <option value="jogging">Jogging</option>
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
          required
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
