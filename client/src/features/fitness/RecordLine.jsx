import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { isoToLocale } from "../../utils/DateConvert";
import { remove } from "../../slices/recordsSlice";
import { deleteWorkoutApi } from "../../apis/getWorkoutsApi";

function RecordLine({ record }) {
  const dispatch = useDispatch();
  const { id, item, duration, calories, date } = record;

  async function handleDelete() {
    await deleteWorkoutApi(id);
    dispatch(remove(id));
  }
  return (
    <div>
      <ul className="flex items-center gap-5">
        <li className="w-32">{item}</li>
        <li className="w-32">{`${duration} min`}</li>
        <li className="w-32">{`${calories} calories`}</li>
        <li className="w-32">{isoToLocale(date)}</li>
        <Button onClick={handleDelete}>Delete</Button>
      </ul>
    </div>
  );
}

export default RecordLine;
