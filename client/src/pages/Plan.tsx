import { useSelector } from "react-redux";
import PlanForm from "../features/plan/PlanForm";
import PlanContainer from "../features/plan/PlanContainer";
import { RootState } from "@/store";

function Plan() {
  const { isEmpty } = useSelector((store: RootState) => store.plan);
  return <div>{isEmpty ? <PlanForm /> : <PlanContainer />}</div>;
}

export default Plan;
