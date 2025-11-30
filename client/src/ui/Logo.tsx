import { Link } from "react-router-dom";
import useDarkMode from "../hooks/useDarkmode";

function Logo({ disabled = true }) {
  const { isDarkMode } = useDarkMode();
  const logoPath = isDarkMode ? "logo-header.png" : "logo-header-black.png";
  if (disabled) {
    return (
      <div className="flex h-full items-center">
        <img className="h-[75%] w-auto" src={logoPath} alt="Logo" />
      </div>
    );
  }
  return (
    <Link className="flex h-full items-center" to="/">
      <img className="h-[75%] w-auto" src={logoPath} alt="Logo" />
    </Link>
  );
}

export default Logo;
