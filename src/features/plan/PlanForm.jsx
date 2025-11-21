import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { set } from "../../slices/planSlice";

function PlanForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    items: "",
    startDate: "",
    duration: "",
  });
  function handleChange(e) {
    const { id, value } = e.target;
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
      className="grid grid-cols-[auto_200px] items-center gap-5"
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
        />
        <label className="w-20">Start Date</label>
        <input
          required
          type="date"
          id="startDate"
          value={formData.startDate}
          onChange={handleChange}
        />
        <label className="w-20">Duration</label>
        <input
          required
          type="number"
          id="duration"
          value={formData.duration}
          onChange={handleChange}
        />
      </div>
      <div className="col-span-full flex justify-end">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}

export default PlanForm;
