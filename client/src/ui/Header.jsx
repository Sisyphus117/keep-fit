import Logo from "./Logo";
import UserBar from "./UserBar";

function Header() {
  return (
    <div className="bg-primary-darker border-primary-darkest flex h-14 items-center justify-between border-b-2 px-4">
      <Logo />
      <UserBar />
    </div>
  );
}

export default Header;
