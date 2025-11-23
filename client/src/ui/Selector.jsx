import { useDispatch } from "react-redux";
import { reset, set } from "../slices/recordSortSlice";

function Selector({ options }) {
  const dispatch = useDispatch();
  function handleChange(e) {
    const sort = e.target.value;
    if (sort === "default") {
      dispatch(reset());
    } else {
      dispatch(set(sort));
    }
  }
  return (
    <select className="my-5" onChange={handleChange}>
      <option value={"default"}>Default</option>
      {options.map((option) => (
        <option value={option.key} key={option.key}>
          {option.value}
        </option>
      ))}
    </select>
  );
}

// option{
//   key:key,
//   value:value
// }

export default Selector;
