import {
  PiBowlSteam,
  PiClockClockwise,
  PiLightningA,
  PiMetaLogo,
  PiUserCircle,
} from "react-icons/pi";
import { Link } from "react-router-dom";

function MainNav() {
  return (
    <nav className="flex flex-col gap-1 px-3">
      <Link className="flex items-center gap-3" to="/">
        <PiMetaLogo className="h-7 w-7" />
        <p className="text-xl">Dashboard</p>
      </Link>
      <Link className="flex items-center gap-3" to="/plan">
        <PiClockClockwise className="h-7 w-7" />
        <p className="text-xl">Plan</p>
      </Link>
      <Link className="flex items-center gap-3" to="/fitness">
        <PiLightningA className="h-7 w-7" />
        <p className="text-xl">Fitness</p>
      </Link>
      <Link className="flex items-center gap-3" to="/diet">
        <PiBowlSteam className="h-7 w-7" />
        <p className="text-xl">Diet</p>
      </Link>
      <Link className="flex items-center gap-3" to="/user">
        <PiUserCircle className="h-6 w-6" />
        <p className="text-xl">User</p>
      </Link>
    </nav>
  );
}

export default MainNav;
