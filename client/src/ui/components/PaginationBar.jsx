import { useDispatch } from "react-redux";
import { lastPage, nextPage } from "../../slices/paginationSlice";

function PaginationBar() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(lastPage())}>Last</button>
      <button onClick={() => dispatch(nextPage())}>Next</button>
    </div>
  );
}

export default PaginationBar;
