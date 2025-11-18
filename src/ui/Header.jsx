import Logo from "./Logo";
import User from "./User";

function Header() {
  return (
    <header className="flex h-14 items-center justify-between border-b-2 border-zinc-400 bg-zinc-800 px-4">
      <Logo />
      {/* <h1>Header</h1> */}
      <User />
    </header>
  );
}

export default Header;
