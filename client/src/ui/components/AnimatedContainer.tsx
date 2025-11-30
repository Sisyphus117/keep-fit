import { TRANSATION_DURATION } from "../../utils/constants";

function AnimatedContainer({
  isOpen,
  children,
  duration = TRANSATION_DURATION,
}) {
  return (
    <div
      className={`transition-all duration-${duration} ease-in-out ${
        isOpen
          ? "max-h-[1000px] translate-y-0 opacity-100"
          : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

export default AnimatedContainer;
