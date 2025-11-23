import Button from "../Button";
import Modal from "./Modal";

function ConfirmDialog({
  onConfirmed,
  onClose,
  confirmText = "Are you sure to do this?",
}) {
  return (
    <Modal onClose={onClose}>
      <h1 className="mb-2 text-xl">! Attention</h1>
      <p className="">{confirmText}</p>
      <div className="mt-4 flex justify-between">
        <Button onClick={onClose}>No</Button>
        <Button onClick={onConfirmed}>Yes</Button>
      </div>
    </Modal>
  );
}

export default ConfirmDialog;
