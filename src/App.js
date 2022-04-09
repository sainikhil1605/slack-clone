import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<SideBar />} />
        <Route path="register" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
