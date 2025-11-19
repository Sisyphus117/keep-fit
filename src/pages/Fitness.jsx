import { useDispatch, useSelector } from "react-redux";
import AddRecord from "../fitness/AddRecord";
import RecordsContainer from "../fitness/RecordsContainer";
import { useEffect } from "react";
import { read } from "../fitness/recordsSlice";
import { inSameDate } from "../utils/DateConvert";

const data = [
  {
    id: "2025-12-23T07:42:02.383Z",
    item: "jogging",
    duration: 25,
    calories: 120,
    time: "2025-12-23T07:42:02.383Z",
  },
  {
    id: "2025-11-15T21:31:17.178Z",
    item: "swim",
    duration: 30,
    calories: 200,
    time: "2025-11-15T21:31:17.178Z",
  },

  {
    id: "2027-05-27T17:01:17.194Z",
    item: "cycling",
    duration: 47,
    calories: 345,
    time: "2027-05-27T17:01:17.194Z",
  },
];

function Fitness() {
  const dispatch = useDispatch();

  const init = function () {
    dispatch(read(data));
  };

  useEffect(() => {
    init();
  }, []);

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
