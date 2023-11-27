import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/user_signup_login/Login";
import AdminSignup from "./pages/admin_signup/AdminSignup";
import SignUp from "./pages/user_signup_login/SignUp";
import Home from "./pages/user_signup_login/Home";
function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/admin-signup" element={<AdminSignup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
