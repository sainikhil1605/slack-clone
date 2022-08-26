import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import LogIn from "./pages/Login";
import SignUp from "./pages/SignUp";
import { getUserDetails } from "./utils/firebase";
import { setUid } from "./utils/store/auth/auth.reducers";

function App() {
  const dispatch = useDispatch();
  const initApp = async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const uid = localStorage.getItem("userId");
      dispatch(setUid(uid));
      dispatch(getUserDetails(uid));
    }
  };
  useEffect(() => {
    initApp();
  });
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="register" element={<SignUp />} />
        <Route path="login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
