import Header from "./Header";
import Main from "./Main";

function AppLayout({ children }) {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr]">
      <Header />
      <Main>{children}</Main>
    </div>
  );
}

export default AppLayout;
