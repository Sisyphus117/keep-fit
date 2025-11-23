import { useSelector } from "react-redux";
import { isoToLocale } from "../../utils/DateConvert";

function PlanContainer() {
  const { item, startDate, duration } = useSelector((store) => store.plan);

  return (
    <div>
      <ul className="flex items-center gap-5">
        <li className="w-32">{item}</li>
        <li className="w-32">{`${duration} days`}</li>
        <li className="w-32">{isoToLocale(startDate)}</li>
      </ul>
    </div>
  );
}

export default PlanContainer;
