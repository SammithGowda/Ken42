import { Link } from "react-router-dom";
import { useState } from "react";
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
        }
      })
      .catch((er) => console.log(er));
  };
  return (
    <>
      <h6>Std/faculty login</h6>
      <div>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="pass"
        />
        <button
          onClick={() => {
            run();
          }}
        >
          Login
        </button>
      </div>
      <Link to="/adminlogin">Admin login</Link>
    </>
  );
};
