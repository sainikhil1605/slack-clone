import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar";
import SignUp from "./pages/SignUp";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Routes>
          <Route index element={<SideBar />} />
          <Route path="register" element={<SignUp />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
