import { useState } from "react";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { set } from "./planSlice";

function PlanForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    items: "",
    startDate: "",
    duration: "",
  });
  function handleChange(e) {
    const { id, value } = e.target;
    //     console.log(id, value);
    setFormData((prev) => ({ ...prev, [id]: value }));
  }
  function clearForm() {
    setFormData({
      items: "",
      startDate: "",
      duration: "",
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(set(formData));
    clearForm();
  }
  return (
    <form
      className="grid grid-cols-[auto_1fr] items-center gap-5"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="contents">
        <label className="w-20">Items</label>
        <input
          required
          type="text"
          id="items"
          value={formData.items}
          onChange={handleChange}
        ></input>
      </div>
      <div className="contents">
        <label className="w-20">Start Date</label>
        <input
          required
          type="date"
          id="startDate"
          value={formData.startDate}
          onChange={handleChange}
        ></input>
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
      <div className="col-span-full flex justify-center">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}

export default PlanForm;
