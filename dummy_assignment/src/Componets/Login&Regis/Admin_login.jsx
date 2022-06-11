import { useState } from "react";
import axios from "axios";

export const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const run = () => {
    let details = {
      username: username,
      password: password,
    };
    // console.log(details);
    axios.post("http://localhost:4000/adminlog", details).then((res) => {
      if (res.status === 200) {
        window.location.href = "/home";
      }
    });
  };
  return (
    <>
      <h6>Admin login</h6>
      <div>
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          placeholder="Uername"
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="text"
          placeholder="Password"
        />
        <button
          onClick={() => {
            run();
          }}
        >
          Login
        </button>
      </div>
    </>
  );
};
