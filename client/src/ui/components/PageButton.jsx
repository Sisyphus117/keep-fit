import { useSelector } from "react-redux";

function PageButton({ onClick, children, id }) {
  const { curPage } = useSelector((store) => store.pagination);
  const style = `${id === curPage ? "underline" : ""}`;
  return (
    <button
      className={`w-3 ${style}`}
      onClick={onClick}
      disabled={id === curPage}
    >
      {children}
    </button>
  );
}

export default PageButton;
