import { Link } from "react-router-dom";

function Button({
  className,
  type,
  onClick,
  children,
  isLink = false,
  to = "/",
  disabled,
}) {
  const baseClasses = `    py-1.5 px-3 rounded focus:outline-none focus:shadow-outline 
    transition-colors duration-200
    ${
      disabled
        ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-60"
        : "bg-zinc-500 text-zinc-200 hover:bg-zinc-700 cursor-pointer"
    }`;
  const combinedClasses = baseClasses + " " + className;
  if (isLink) {
    return (
      <Link to={to} className={combinedClasses} disabled={disabled}>
        {children}
      </Link>
    );
  }
  return (
    <button
      className={combinedClasses}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
