import React, { useState } from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

function RegisterForm({registerFunction}) {
  const [login, setLogin] = useState("");
  const [status, setStatus] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  
  function authorization() {
    if (login) {
      if (password) {
        registerFunction(login, status);
      }
    } else {
      alert("Undefined user login");
    }
  }

  return (
    <div className="authorized-block">
      <div className="form-block">
        <h2>Your login*</h2>
        <input
          placeholder="enter your login"
          type="text"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
      </div>
      <div className="form-block">
        <h2>Your status</h2>
        <input
          placeholder="enter your status"
          type="text"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        />
      </div>
      <div className="form-block">
        <h2>Your password*</h2>
        <div className="password-input">
          <input
            placeholder="enter your password"
            type={passwordVisibility ? "text" : "password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <div
            className="password-shower"
            onClick={() => setPasswordVisibility(!passwordVisibility)}
          >
            {passwordVisibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </div>
        </div>
      </div>

      <button className="auth-button" onClick={authorization}>
        Register
      </button>
    </div>
  );
}

export default RegisterForm;
