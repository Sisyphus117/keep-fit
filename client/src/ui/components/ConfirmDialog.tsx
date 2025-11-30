import Button from "./Button";
import Modal from "./Modal";
import { createPortal } from "react-dom";

function ConfirmDialog({
  onConfirmed,
  onClose,
  confirmText = "Are you sure to do this?",
}) {
  return createPortal(
    <Modal onClose={onClose}>
      <div className="flex flex-col justify-center">
        <h1 className="mb-3 text-xl">! Attention</h1>
        <p className="flex-grow-1 min-w-64">{confirmText}</p>
        <div className="mt-8 flex justify-between">
          <Button onClick={onClose}>No</Button>
          <Button color="confirm" onClick={onConfirmed}>
            Yes
          </Button>
        </div>
      </div>
    </Modal>,
    document.body,
  );
}

export default ConfirmDialog;
