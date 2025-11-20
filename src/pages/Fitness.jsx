import { useSelector } from "react-redux";
import AddRecord from "../fitness/AddRecord";
import RecordsContainer from "../fitness/RecordsContainer";
import { inSameDate } from "../utils/DateConvert";

function Fitness() {
  const { records } = useSelector((store) => store.records);

  const checkedToday = records.some((el) =>
    inSameDate(el.time, new Date().toISOString()),
  );

  return (
    <div className="">
      <h1>Fitness</h1>
      {checkedToday || <AddRecord />}
      <RecordsContainer />
    </div>
  );
}

export default Fitness;
