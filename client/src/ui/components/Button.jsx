import { Link } from "react-router-dom";

function Button({
  className,
  type,
  onClick,
  children,
  isLink = false,
  to = "/",
  disabled,
  size = "md",
  color = "normal",
}) {
  const colorType = {
    normal: "bg-primary hover:bg-primary-darker border border-primary-darkest",
    danger: "bg-red hover:bg-red-dark",
    confirm: "bg-primary-darker hover:bg-primary-darkest",
  };
  const baseClasses = `text-center py-1.5 px-4 rounded focus:outline-none focus:shadow-outline 
    transition-colors duration-200 
    ${
      disabled
        ? "bg-gray-300 text-gray-500  cursor-not-allowed opacity-60"
        : colorType[color] + " cursor-pointer"
    }
    ${size === "sm" && "py-1 px-2 text-sm"}
    `;
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
