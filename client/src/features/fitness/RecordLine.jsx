import { useDispatch } from "react-redux";
import Button from "../../ui/components/Button";
import { remove } from "../../slices/recordsSlice";
import { deleteWorkoutApi } from "../../apis/workoutsApi";
import { useState } from "react";
import ConfirmDialog from "../../ui/components/ConfirmDialog";
import toast from "react-hot-toast";
import ItemContainer from "../../ui/components/ItemContainer";

function RecordLine({ record }) {
  const dispatch = useDispatch();
  const { id, item, duration, calories } = record;

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
    <>
      <ItemContainer>
        <ul className="flex items-center gap-4">
          <li className="w-24">{item}</li>
          <li className="w-28">{`${duration} min`}</li>
          <li className="w-28">{`${calories} calories`}</li>
        </ul>
        <Button
          className={"h-7"}
          size="sm"
          color="danger"
          onClick={() => setShowConfirm(true)}
        >
          Delete
        </Button>
      </ItemContainer>
      {showConfirm && (
        <ConfirmDialog
          onClose={() => setShowConfirm(false)}
          onConfirmed={handleDelete}
          confirmText="Are you sure to delete this record?"
        />
      )}
    </>
  );
}

export default RecordLine;
