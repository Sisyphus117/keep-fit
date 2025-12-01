import { useEffect } from "react";

interface ModalProps {
  children?: React.ReactNode;
  onClose?: () => void;
}
function Modal({ children, onClose }: ModalProps) {
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
      className="fixed inset-0 z-[1000] bg-black/50 backdrop-blur-sm transition-all duration-500"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="fixed left-1/2 top-1/2 z-[1001] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-primary px-14 py-10 shadow-xl transition-all duration-500"
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
