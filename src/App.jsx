import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import Diet from "./pages/Diet";
import Fitness from "./pages/Fitness";
import Plan from "./pages/Plan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />}></Route>
        <Route path="/diet" element={<Diet />}></Route>
        <Route path="/fitness" element={<Fitness />}></Route>
        <Route path="/plan" element={<Plan />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
