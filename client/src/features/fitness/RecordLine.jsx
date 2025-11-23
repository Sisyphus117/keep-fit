import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { isoToLocale } from "../../utils/DateConvert";
import { remove } from "../../slices/recordsSlice";
import { deleteWorkoutApi } from "../../apis/workoutsApi";
import { useState } from "react";
import ConfirmDialog from "../../ui/components/ConfirmDialog";
import toast from "react-hot-toast";

function RecordLine({ record }) {
  const dispatch = useDispatch();
  const { id, item, duration, calories, date } = record;

  const [showConfirm, setShowConfirm] = useState(false);
  async function handleDelete() {
    try {
      await deleteWorkoutApi(id);
      dispatch(remove(id));
      toast.success("Delete successfully");
      setShowConfirm(false);
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  }
  return (
    <div>
      <ul className="flex items-center gap-5">
        <li className="w-32">{item}</li>
        <li className="w-32">{`${duration} min`}</li>
        <li className="w-32">{`${calories} calories`}</li>
        <li className="w-32">{isoToLocale(date)}</li>
        <Button onClick={() => setShowConfirm(true)}>Delete</Button>
        {showConfirm && (
          <ConfirmDialog
            onClose={() => setShowConfirm(false)}
            onConfirmed={handleDelete}
            // confirmText="Are you sure to delete this record?"
          />
        )}
      </ul>
    </div>
  );
}

export default RecordLine;
