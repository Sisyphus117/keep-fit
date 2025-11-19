import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import { isoToLocale } from "../utils/DateConvert";
import { remove } from "./recordsSlice";

function RecordLine({ record }) {
  const dispatch = useDispatch();
  const { id, item, duration, calories, time } = record;
  return (
    <div>
      <ul className="flex items-center gap-5">
        <li className="w-32">{item}</li>
        <li className="w-32">{`${duration} min`}</li>
        <li className="w-32">{`${calories} calories`}</li>
        <li className="w-32">{isoToLocale(time)}</li>
        <Button onClick={() => dispatch(remove(id))}>Delete</Button>
      </ul>
    </div>
  );
}

export default RecordLine;
