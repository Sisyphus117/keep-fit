import { useSelector } from "react-redux";
import AddRecord from "../features/fitness/AddRecord";
import RecordsContainer from "../features/fitness/RecordsContainer";
import { inSameDate } from "../utils/DateConvert";

function Fitness() {
  const { records } = useSelector((store) => store.records);

  const checkedToday = records.some((el) =>
    inSameDate(el.date, new Date().toISOString()),
  );

  return (
    <div className="flex flex-col items-center">
      {checkedToday || (
        <div>
          <h2 className="mb-4">Add your workout today!</h2>
          <AddRecord />
        </div>
      )}
      <RecordsContainer />
    </div>
  );
}

export default Fitness;
