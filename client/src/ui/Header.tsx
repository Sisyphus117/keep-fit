import Logo from "./Logo";
import UserBar from "./UserBar";

function Header() {
  return (
    <div className="flex h-14 items-center justify-between border-b-2 border-primary-darkest bg-primary-darker px-4">
      <Logo disabled={false} />
      <UserBar />
    </div>
  );
}

export default Header;
