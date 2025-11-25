import Content from "./components/Content";
import SideBar from "./SideBar";

function Main({ children }) {
  return (
    <div className="bg-primary grid grid-cols-[auto_1fr]">
      <SideBar />
      <Content>{children}</Content>
    </div>
  );
}

export default Main;
