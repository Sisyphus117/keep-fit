function ToggleCollapse({ onToggle, className = "", isOpen }) {
  function handleClick() {
    onToggle();
  }
  return (
    <button
      className={`mr-2 flex h-7 w-7 items-center justify-center rounded-full border border-primary text-2xl text-primary ${className}`}
      onClick={handleClick}
    >
      {isOpen ? "-" : "+"}
    </button>
  );
}

export default ToggleCollapse;
