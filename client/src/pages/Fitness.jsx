import { useSelector } from "react-redux";
import RecordsContainer from "../features/fitness/RecordsContainer";
import { inSameDate } from "../utils/dateConvert";
import AddRecords from "../features/fitness/AddRecords";

function Fitness() {
  const { records } = useSelector((store) => store.records);

  const checkedToday = records.some((el) =>
    inSameDate(el.date, new Date().toISOString()),
  );

  return (
    <div className="flex flex-col items-center">
      {checkedToday || (
        <div className="flex flex-col items-center">
          <h2 className="mb-4">Add your workout today!</h2>
          <AddRecords />
        </div>
      )}
      <RecordsContainer />
    </div>
  );
}

export default Fitness;
