import { useDispatch } from "react-redux";
import { set } from "../fitness/recordSortSlice";

function Selector({ options }) {
  const dispatch = useDispatch();
  return (
    <select className="my-5" onChange={(e) => dispatch(set(e.target.value))}>
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
