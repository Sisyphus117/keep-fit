import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import Diet from "./pages/Diet";
import Fitness from "./pages/Fitness";
import Plan from "./pages/Plan";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<DashBoard />}></Route>
          <Route path="/diet" element={<Diet />}></Route>
          <Route path="/fitness" element={<Fitness />}></Route>
          <Route path="/plan" element={<Plan />}></Route>
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
