import { Link } from "react-router-dom";
import Spinner from "../ui/components/Spinner";

function DashBoard() {
  return (
    <div>
      <h1 className="text-yellow-500">Dashboard </h1>
      <p> Here is a content</p>
      <Link to="/diet">Diet</Link>
      <Spinner />
    </div>
  );
}

export default DashBoard;
