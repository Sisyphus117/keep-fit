import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { set } from "../../slices/planSlice";
import useFormData from "../../hooks/useFormData";
import { insertPlanApi } from "../../apis/planApi";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

function PlanForm() {
  const { id } = useAuth();
  const dispatch = useDispatch();
  const { formData, handleChange, clearForm } = useFormData({
    item: "",
    startDate: "",
    duration: "",
  });

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      dispatch(set(formData));
      await insertPlanApi(id, formData);
      clearForm();
      toast.success("Goals set successfully");
    } catch (err) {
      console.error(err);
      toast.error(err);
    }
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
          id="item"
          value={formData.item}
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
