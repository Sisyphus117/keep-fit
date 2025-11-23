import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function AppLayout({ children }) {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}

export default AppLayout;
