import RecordLine from "./RecordLine";
import Selector from "../../ui/Selector";
import { useSelector } from "react-redux";

function RecordsContainer() {
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

  return (
    <div className="flex w-fit flex-col">
      {emptyWorkouts ? (
        <p>Your workout list is empty, start with adding your workout today</p>
      ) : (
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <p>Your workouts</p>
            <Selector
              options={[
                { key: "name-asc", value: "By Name (A-Z)" },
                { key: "name-desc", value: "By Name (Z-A)" },
                { key: "date-asc", value: "Latest First" },
                { key: "date-desc", value: "Newest First" },
              ]}
            />
          </div>
          <div>
            {sorted.map((record) => (
              <RecordLine record={record} key={record.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default RecordsContainer;
