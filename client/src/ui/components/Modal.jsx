import { useEffect } from "react";

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
      style={{
        backgroundColor: "rgba(24, 24, 27, 0.5)",
      }}
      className="fixed inset-0 z-[1000] backdrop-blur-sm transition-all duration-500"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-primary fixed left-1/2 top-1/2 z-[1001] -translate-x-1/2 -translate-y-1/2 rounded-xl px-14 py-10 shadow-xl transition-all duration-500"
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
