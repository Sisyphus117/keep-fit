import { PiClockUser, PiTennisBall } from "react-icons/pi";
import StatCard from "../../ui/components/StatCard";

function StatCards() {
  return (
    <div className="flex w-fit gap-10">
      <StatCard
        title={"Title"}
        value={100}
        icon={<PiTennisBall className="h-8 w-8" />}
      ></StatCard>
      <StatCard
        title={"Title"}
        value={100}
        icon={<PiClockUser className="h-8 w-8" />}
      ></StatCard>
    </div>
  );
}

export default StatCards;
