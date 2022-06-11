import { useState } from "react";
import axios from "axios";
export const UserRegister = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    mobile: "",
    age: "",
    sex: "",
  });
  const eventhandler = (event) => {
    //   const checkbox=e.target.checked
    const { id, value, checked, type } = event.target;
    setFormdata((pra) => ({
      ...pra,
      [id]: type === "checkbox" ? checked : value,
    }));
  };
  const evnethandlersubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((er) => console.log(er));
    // axios
    //   .post("http://localhost:4000/register", formdata)
    //   .then(() => alert(" done"));
  };
  return (
    <>
      <div>
        <form action="" onSubmit={evnethandlersubmit}>
          <input
            type="text"
            onChange={eventhandler}
            placeholder="Enter name"
            name=""
            id="name"
          />
          <br />
          <input
            type="text"
            onChange={eventhandler}
            placeholder="Enter Username"
            name=""
            id="username"
          />{" "}
          <br />
          <input
            type="text"
            onChange={eventhandler}
            placeholder="Enter Email"
            name=""
            id="email"
          />{" "}
          <br />
          <input
            type="text"
            onChange={eventhandler}
            placeholder="Enter Password"
            name=""
            id="password"
          />{" "}
          <br />
          <input
            type="text"
            onChange={eventhandler}
            placeholder="Enter mobile"
            name=""
            id="mobile"
          />{" "}
          <br />
          <label htmlFor="">Male</label>
          <input
            onChange={eventhandler}
            type="radio"
            value={"male"}
            name="sex"
            id="sex"
          />
          <br />
          <label htmlFor="">FeMale</label>
          <input
            onChange={eventhandler}
            type="radio"
            value={"female"}
            name="sex"
            id="sex"
          />
          {/* <br />
          <label htmlFor="">Married</label>
          <input
            onChange={eventhandler}
            // value={"married"}
            type="checkbox"
            name=""
            checked={formdata.married}
            id="married"
          />
          <br />
          <label htmlFor="">Bachelor</label>
          <input
            onChange={eventhandler}
            // value={"notmarried"}
            type="checkbox"
            name=""
            checked={formdata.bachelor}
            id="bachelor"
          /> */}
          <br />
          <select onChange={eventhandler} id={"age"}>
            <option>slecet Age</option>
            <option value={"15-20"}>15-20</option>
            <option value={"21-30"}>21-30</option>
            <option value={"31-20"}>31-40</option>
          </select>
          <input type="submit" value={"sumbit"} name="" id="" />
        </form>
      </div>
    </>
  );
};
