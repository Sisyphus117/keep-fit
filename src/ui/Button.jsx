function Button({ className, type, onClick, children }) {
  const baseClasses =
    "bg-zinc-500 hover:bg-zinc-700 text-zinc-200  py-1.5 px-3 rounded focus:outline-none focus:shadow-outline transition-colors duration-200";
  return (
    <button
      className={`${baseClasses}${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
