import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AdminLogin } from "./Componets/Admin_login";
import { OtherLogin } from "./Componets/Other_login";
import { HomePage } from "./Componets/HomePage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<OtherLogin />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
