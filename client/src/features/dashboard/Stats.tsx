import { useSelector } from "react-redux";
import StatCards from "./StatCards";
import WorkoutStatsChart from "./WorkoutStatsChart";
import { isAfter } from "../../utils/dateConvert";
import Selector from "../../ui/components/Selector";
import { useState } from "react";
import { simpleIntegrateRecords } from "../../utils/recordsDealing";
import { RootState } from "@/store";

function Stats() {
  const [dateRange, setDateRange] = useState("ever");
  const { records } = useSelector((store: RootState) => store.records);

  function handleChange(e) {
    const range = e.target.value;
    setDateRange(range);
  }

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

  const integrated = simpleIntegrateRecords(filtered);

  return (
    <div>
      <Selector
        onChange={handleChange}
        options={[
          { key: "ever", value: "Ever" },
          { key: "monthly", value: "Monthly" },
          { key: "weekly", value: "Weekly" },
        ]}
      />
      <div className="flex flex-col justify-center gap-7">
        <StatCards filteredStats={integrated} />

        <WorkoutStatsChart filteredStats={integrated} />
      </div>
    </div>
  );
}

export default Stats;
