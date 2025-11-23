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

function App() {
  const { authenticated, id } = useAuth();

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
          <Route path="/" element={<DashBoard />}></Route>
          <Route element={<PreservedRoute />}>
            <Route path="/diet" element={<Diet />}></Route>
            <Route path="/fitness" element={<Fitness />}></Route>
            <Route path="/plan" element={<Plan />}></Route>
            <Route path="/user" element={<User />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </AppLayout>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
