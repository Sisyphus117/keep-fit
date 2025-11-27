import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./pages/Dashboard";
import Diet from "./pages/Diet";
import Fitness from "./pages/Fitness";
import Plan from "./pages/Plan";
import AppLayout from "./ui/AppLayout";
import User from "./pages/User";
import { useEffect } from "react";
import { useInitData } from "./hooks/useInitData";
import Login from "./pages/Login";
import PreservedRoute from "./ui/components/PreservedRoute";
import PageNotFound from "./ui/PageNotFound";
import useAuth from "./hooks/useAuth";
import { Toaster } from "react-hot-toast";
import useDarkMode from "./hooks/useDarkmode";
import UserDataEdit from "./features/user/UserDataEdit";

function App() {
  const { authenticated, id } = useAuth();

  const { isDarkMode } = useDarkMode();
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const { initData } = useInitData();
  useEffect(() => {
    async function init() {
      if (authenticated) {
        await initData(id);
      }
    }
    init();
  }, [authenticated, initData, id]);
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route element={<PreservedRoute />}>
            <Route path="/diet" element={<Diet />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/user" element={<User />}></Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AppLayout>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
