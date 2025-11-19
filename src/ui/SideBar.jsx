import MainNav from "./MainNav";

function SideBar() {
  return (
    <div className="h-full w-1/4 border-r-2 border-zinc-400 bg-zinc-600 px-3 py-3">
      <MainNav />
    </div>
  );
}

export default SideBar;
