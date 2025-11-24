import { useSelector } from "react-redux";
import StatCards from "./StatCards";
import WorkoutStatsChart from "./WorkoutStatsChart";
import { isAfter } from "../../utils/DateConvert";

function Stats({ dateRange = "weekly" }) {
  const { records } = useSelector((store) => store.records);

  let startDate = new Date();
  startDate.setHours(0, 0, 0, 0);
  if (dateRange === "weekly") {
    startDate.setDate(new Date().getDate() - 7);
  } else if (dateRange == "monthly") {
    startDate.setDate(new Date().getDate() - 30);
  } else {
    startDate = new Date(0);
  }

  const filtered = records.filter((record) => isAfter(record.date, startDate));
  filtered.sort((a, b) => a.date.localeCompare(b.date));

  return (
    <div className="flex flex-col justify-center gap-7">
      <StatCards filteredStats={filtered} />
      <WorkoutStatsChart filteredStats={filtered} />
    </div>
  );
}

export default Stats;
