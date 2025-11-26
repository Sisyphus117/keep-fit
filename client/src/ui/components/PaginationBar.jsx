import { useDispatch, useSelector } from "react-redux";
import { lastPage, nextPage, setPage } from "../../slices/paginationSlice";
import PageButton from "./PageButton";

function PaginationBar() {
  const dispatch = useDispatch();
  const { totalPages, curPage } = useSelector((store) => store.pagination);
  if (totalPages <= 1) {
    return;
  }

  let content;
  if (totalPages <= 7) {
    content = (
      <div className="flex justify-center gap-3">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((i) => (
          <PageButton
            id={i - 1}
            key={i}
            onClick={() => dispatch(setPage(i - 1))}
          >
            {i}
          </PageButton>
        ))}
      </div>
    );
  } else {
    if (curPage < 5) {
      content = (
        <div className="flex justify-center gap-3">
          {Array.from({ length: 5 }, (_, i) => i + 1).map((i) => (
            <PageButton
              id={i - 1}
              key={i}
              onClick={() => dispatch(setPage(i - 1))}
            >
              {i}
            </PageButton>
          ))}
          <p>...</p>
          <PageButton
            id={totalPages - 1}
            onClick={() => dispatch(setPage(totalPages - 1))}
          >
            {totalPages}
          </PageButton>
        </div>
      );
    } else if (totalPages - curPage <= 5) {
      content = (
        <div className="flex justify-center gap-3">
          <PageButton id={0} onClick={() => dispatch(setPage(0))}>
            {1}
          </PageButton>
          <p>...</p>
          {Array.from({ length: 5 }, (_, i) => i + 1).map((i) => (
            <PageButton
              id={i + totalPages - 6}
              key={i}
              onClick={() => dispatch(setPage(i + totalPages - 6))}
            >
              {i + totalPages - 5}
            </PageButton>
          ))}
        </div>
      );
    } else {
      content = (
        <div className="flex justify-center gap-3">
          <PageButton id={0} onClick={() => dispatch(setPage(0))}>
            {1}
          </PageButton>
          <p>...</p>
          {Array.from({ length: 4 }, (_, i) => i + 1).map((i) => (
            <PageButton
              id={i + curPage - 1}
              key={i}
              onClick={() => dispatch(setPage(i + curPage - 1))}
            >
              {i + curPage}
            </PageButton>
          ))}
          <p>...</p>
          <PageButton
            id={totalPages - 1}
            onClick={() => dispatch(setPage(totalPages - 1))}
          >
            {totalPages}
          </PageButton>
        </div>
      );
    }
  }
  return (
    <div className="flex justify-between">
      <div className="grid w-[300px] grid-cols-[auto_1fr_auto] items-center gap-4">
        <button disabled={curPage === 0} onClick={() => dispatch(lastPage())}>
          Last
        </button>
        {content}
        <button
          disabled={curPage === totalPages - 1}
          onClick={() => dispatch(nextPage())}
        >
          Next
        </button>
      </div>
      <span>
        Page {curPage + 1} of {totalPages}
      </span>
    </div>
  );
}

export default PaginationBar;
