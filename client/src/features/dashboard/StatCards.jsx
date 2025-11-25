import { PiClockUser, PiTennisBall } from "react-icons/pi";
import StatCard from "../../ui/components/StatCard";

function StatCards({ filteredStats }) {
  const calorise = filteredStats.reduce((sum, cur) => sum + cur.calories, 0);
  const duration = filteredStats.reduce((sum, cur) => sum + cur.duration, 0);
  return (
    <div className="ml-12 flex w-fit gap-12">
      <StatCard
        title={"Calorise"}
        color="calories"
        value={calorise}
        icon={<PiTennisBall className="h-8 w-8" />}
      ></StatCard>
      <StatCard
        title={"Duration"}
        color="duration"
        value={duration}
        icon={<PiClockUser className="h-8 w-8" />}
      ></StatCard>
    </div>
  );
}

export default StatCards;
