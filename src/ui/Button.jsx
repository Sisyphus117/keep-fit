import { Link } from "react-router-dom";

function Button({
  className,
  type,
  onClick,
  children,
  isLink = false,
  to = "/",
}) {
  const baseClasses =
    "bg-zinc-500 hover:bg-zinc-700 text-zinc-200  py-1.5 px-3 rounded focus:outline-none focus:shadow-outline transition-colors duration-200";
  const combinedClasses = baseClasses + " " + className;
  if (isLink) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }
  return (
    <button className={combinedClasses} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
