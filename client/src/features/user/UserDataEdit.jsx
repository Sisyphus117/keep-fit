import { useDispatch, useSelector } from "react-redux";
import { update } from "../../slices/userSlice";
import Button from "../../ui/Button";
import useFormData from "../../hooks/useFormData";

function UserDataEdit({ onClose }) {
  const { name, gender, age, height, weight } = useSelector(
    (store) => store.user,
  );
  const dispatch = useDispatch();
  const { formData, setFormData } = useFormData({
    name,
    gender,
    age,
    height,
    weight,
  });
  function handleChange(e) {
    const { id, value } = e.target;
    if (id === "age" && (value < 0 || value > 100)) {
      return;
    }
    if ((id === "height" || id == "weight") && (value < 0 || value > 300)) {
      return;
    }
    setFormData((prev) => ({ ...prev, [id]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(update(formData));
  }
  return (
    <form
      className="grid grid-cols-[auto_100px] items-center justify-center gap-x-20 gap-y-5"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="contents">
        <label className="w-20">Name</label>
        <input
          readOnly
          className="w-[96px]"
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label className="w-20">Gender</label>
        <select
          required
          className="w-[96px]"
          id="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <label className="w-20">Age</label>
        <input
          className="w-[96px]"
          type="number"
          id="age"
          value={formData.age}
          onChange={handleChange}
        />
        <label className="w-20">Height</label>
        <div className="relative">
          <input
            className="w-[96px]"
            type="number"
            id="height"
            value={formData.height}
            onChange={handleChange}
          />
          <span className="absolute right-10 top-1/2 -translate-y-1/2">cm</span>
        </div>
        <label className="w-20">Weight</label>
        <div className="relative">
          <input
            className="w-[96px]"
            type="number"
            id="weight"
            value={formData.weight}
            onChange={handleChange}
          />
          <span className="absolute right-10 top-1/2 -translate-y-1/2">kg</span>
        </div>
      </div>
      <div className="col-span-full flex justify-between">
        <Button type="button" onClick={onClose}>
          Close
        </Button>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}

export default UserDataEdit;
