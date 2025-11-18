import {
  PiBowlSteam,
  PiClockClockwise,
  PiLightningA,
  PiMetaLogo,
} from "react-icons/pi";
import { Link } from "react-router-dom";

function MainNav() {
  return (
    <nav className="px-3">
      <li className="my-1 flex items-center gap-3">
        <PiMetaLogo />
        <Link className="text-lg" to="/">
          Dashboard
        </Link>
      </li>
      <li className="ju my-1 flex items-center gap-3">
        <PiClockClockwise />
        <Link className="text-lg" to="/plan">
          Plan
        </Link>
      </li>
      <li className="my-1 flex items-center gap-3">
        <PiLightningA />
        <Link className="text-lg" to="/fitness">
          Fitness
        </Link>
      </li>
      <li className="my-1 flex items-center gap-3">
        <PiBowlSteam />
        <Link className="text-lg" to="/diet">
          Diet
        </Link>
      </li>
    </nav>
  );
}

export default MainNav;
