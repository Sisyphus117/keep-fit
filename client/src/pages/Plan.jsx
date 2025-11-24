import { useSelector } from "react-redux";
import PlanForm from "../features/plan/PlanForm";
import PlanContainer from "../features/plan/PlanContainer";

function Plan() {
  const { isEmpty } = useSelector((store) => store.plan);
  return <div>{isEmpty ? <PlanForm /> : <PlanContainer />}</div>;
}

export default Plan;
