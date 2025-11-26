import Selector from "../../ui/components/Selector";
import { useDispatch, useSelector } from "react-redux";
import { reset as resetSort, set } from "../../slices/recordSortSlice";
import RecordSummary from "./RecordSummary";
import { integrateRecords } from "../../utils/recordsDealing";
import { PAGE_SIZE } from "../../utils/constants";
import PaginationBar from "../../ui/components/PaginationBar";
import { useEffect } from "react";
import { init as resetPages } from "../../slices/paginationSlice";

function RecordsContainer() {
  const dispatch = useDispatch();
  function handleChange(e) {
    const sort = e.target.value;
    if (sort === "default") {
      dispatch(resetSort());
    } else {
      dispatch(set(sort));
    }
  }
  const { records } = useSelector((store) => store.records);

  let sorted = records.slice();
  const { sortBy, sortOrder } = useSelector((store) => store.recordSort);
  const modifier = sortOrder === "asc" ? 1 : -1;
  if (sortBy === "name") {
    sorted.sort((a, b) => modifier * a.item.localeCompare(b.item));
  }
  if (sortBy === "date") {
    sorted.sort((a, b) => modifier * a.date.localeCompare(b.date));
  }

  const emptyWorkouts = sorted.length === 0;

  const integrated = integrateRecords(sorted);

  const totalPages = Math.ceil(integrated.length / PAGE_SIZE);

  useEffect(() => {
    dispatch(resetPages(totalPages));
  }, [totalPages, dispatch]);

  const { curPage } = useSelector((store) => store.pagination);

  const recordsOnCurrentPage = integrated.slice(
    curPage * PAGE_SIZE,
    Math.min(integrated.length, (curPage + 1) * PAGE_SIZE),
  );

  return (
    <div className="flex w-fit flex-col">
      {emptyWorkouts ? (
        <p>Your workout list is empty, start with adding your workout today</p>
      ) : (
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <p>Your workouts</p>
            <Selector
              onChange={handleChange}
              options={[
                { key: "default", value: "Default" },
                { key: "name-asc", value: "By Name (A-Z)" },
                { key: "name-desc", value: "By Name (Z-A)" },
                { key: "date-asc", value: "Latest First" },
                { key: "date-desc", value: "Newest First" },
              ]}
            />
          </div>
          <div>
            <PaginationBar />
            {recordsOnCurrentPage.map((summary) => (
              <RecordSummary summary={summary} key={summary.date} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default RecordsContainer;
