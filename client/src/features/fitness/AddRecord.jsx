// import { useEffect, useRef, useState } from "react";
import Button from "../../ui/components/Button";
import Selector from "../../ui/components/Selector";
import { capitalizeFirst } from "../../utils/string";
// import { useDispatch, useSelector } from "react-redux";
// import { read } from "../../slices/recordsSlice";
// import { fetchCaloriesBurnedData } from "../../apis/caloriesFetchApi";
// import { useDebounce } from "../../hooks/useDebounce";
// import { DEBOUNCE_DELAY } from "../../utils/constants";
// import useFormData from "../../hooks/useFormData";
// import useAuth from "../../hooks/useAuth";
// import { getWorkoutsApi, insertWorkoutApi } from "../../apis/workoutsApi";
// import toast from "react-hot-toast";

function AddRecord({ record, onRemove, onFormDataChanged, availableItems }) {
  const { temp_id: id, item, duration, calories } = record;

  function handleChange(e) {
    const { id: key, value } = e.target;
    if (!isNaN(+value) && value <= 0) {
      return;
    }
    onFormDataChanged(id, { key, value });
  }

  const options = availableItems.map((item) => ({
    key: item,
    value: capitalizeFirst(item),
  }));
  options.unshift({ key: "", value: "Please select an item" });
  if (item !== "") {
    options.push({ key: item, value: capitalizeFirst(item) });
  }

  return (
    <div className="mb-4">
      <form className="grid grid-cols-[auto_200px] items-center justify-center gap-5">
        <div className="contents">
          <label className="w-20">Item</label>
          <Selector
            required
            id="item"
            value={item}
            onChange={handleChange}
            options={options}
          />
          <label className="w-20">Duration</label>
          <input
            required
            type="number"
            id="duration"
            value={duration}
            onChange={handleChange}
          />
          <label className="w-20">Calories</label>
          <input
            className="cursor-not-allowed"
            readOnly
            type="number"
            id="calories"
            value={calories}
            onChange={handleChange}
          />
        </div>
      </form>
      <div className="col-span-full flex justify-end">
        <Button color="danger" onClick={() => onRemove(id)}>
          Remove
        </Button>
      </div>
    </div>
  );
}

export default AddRecord;
