import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link className="flex h-full items-center" to="/">
      <img className="h-[75%] w-auto" src="logo-header.png" alt="Logo" />
    </Link>
  );
}

export default Logo;
