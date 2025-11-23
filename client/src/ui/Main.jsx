import Content from "./Content";
import SideBar from "./SideBar";

function Main({ children }) {
  return (
    <div className="grid grid-cols-[auto_1fr] bg-zinc-600">
      <SideBar />
      <Content>{children}</Content>
    </div>
  );
}

export default Main;
