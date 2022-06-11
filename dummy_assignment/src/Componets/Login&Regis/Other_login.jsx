import { Link } from "react-router-dom";
import { useState } from "react";
import "./loginReg.css";
export const OtherLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const run = () => {
    let details = {
      username: username,
      password: password,
    };
    // console.log(details);
    // axios.post("http://localhost:4000/adminlog", details).then((res) => {
    //   if (res.status === 200) {
    //     window.location.href = "/home";
    //   }
    // });
    fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token) {
          window.location.href = "/home";
        } else {
          alert(res.message);
          setPassword("");
          setUsername("");
        }
      })
      .catch((er) => console.log(er));
  };

  return (
    <>
      <h2>Std/faculty login</h2>
      <div className="login_div">
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Username"
          value={username}
        />
        <br />
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          value={password}
        />
        <br />

        <button
          disabled={!username || !password}
          onClick={() => {
            run();
          }}
        >
          Login
        </button>
        <div>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/register"
          >
            Don't have Account ?
          </Link>
          <Link
            style={{ float: "right", color: "black", textDecoration: "none" }}
            to="/adminlogin"
          >
            Admin login
          </Link>
        </div>
      </div>
    </>
  );
};
