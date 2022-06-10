import { Link } from "react-router-dom";
export const OtherLogin = () => {
  return (
    <>
      <h6>Std/faculty login</h6>
      <div>
        <input type="text" placeholder="Uername" />
        <input type="text" placeholder="Pass" />
        <button onClick={() => {}}>Login</button>
      </div>
      <Link to="/adminlogin">Admin login</Link>
    </>
  );
};
