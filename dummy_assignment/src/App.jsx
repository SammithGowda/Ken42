import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AdminLogin } from "./Componets/Login&Regis/Admin_login";
import { OtherLogin } from "./Componets/Login&Regis/Other_login";
import { HomePage } from "./Componets/HomePage";
import { UserRegister } from "./Componets/Login&Regis/Other_regis";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<OtherLogin />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<UserRegister />} />
      </Routes>
    </div>
  );
}

export default App;
