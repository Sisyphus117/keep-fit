import Logo from "./Logo";
import UserBar from "./UserBar";

function Header() {
  return (
    <div className="flex h-14 items-center justify-between border-b-2 border-zinc-400 bg-zinc-800 px-4">
      <Logo />
      <UserBar />
    </div>
  );
}

export default Header;
