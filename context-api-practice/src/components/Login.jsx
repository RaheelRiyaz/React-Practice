import { useContext, useState } from "react";
// import { useData } from "../context/usedata";
import { DataContext } from "../context/DataContext";

function Login() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  // const { setData } = useData();
  const {setData} = useContext(DataContext)

  const submitForm = () => {
    setData(username + "   " + password);
  };

  return (
    <div className="row">
      <div className="col">
        <input
          type="text"
          value={username}
          onChange={(e) => setusername(e.target.value)}
          className="form-control"
          placeholder="First name"
          aria-label="First name"
        />
      </div>
      <div className="col">
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          placeholder="Last name"
          aria-label="Last name"
        />
      </div>
      <button className="btn btn-success" onClick={submitForm}>
        Submit
      </button>
    </div>
  );
}

export default Login;
