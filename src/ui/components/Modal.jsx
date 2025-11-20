import { useEffect } from "react";
import Button from "../Button";

function Modal({ children, onClose }) {
  useEffect(() => {
    const onEscPressed = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", onEscPressed);
    return () => document.removeEventListener("keydown", onEscPressed);
  }, [onClose]);
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[1000] bg-zinc-900/50 backdrop-blur-sm transition-all duration-500"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="fixed left-1/2 top-1/2 z-[1001] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-zinc-700 p-8 shadow-xl transition-all duration-500 dark:bg-gray-900"
      >
        {children}
        <Button onClick={onClose}>Close</Button>
      </div>
    </div>
  );
}

export default Modal;
