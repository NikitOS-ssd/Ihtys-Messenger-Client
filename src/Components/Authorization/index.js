import React from "react";
import { Link } from "react-router-dom";
import LockIcon from "@material-ui/icons/Lock";

const Auth = () => {
  return (
    <>
      {/* LEFT BOARD CONTAINER */}
      <div className="left-board">
        <div className="user">
          <LockIcon style={{ fontSize: "5rem", color: "#426696" }} />
        </div>
        <div className="links">
          <div className="link">
            <h2>Login</h2>
          </div>
          <div className="link">
            <h2>Register</h2>
          </div>
        </div>
        <Link to="/chat" className="about-chat-info">
          <div className="pro">
            <h2>Сheck out the idea of ​​our messenger</h2>
          </div>
        </Link>
      </div>

      {/* RIGHT BOARD CONTAINER */}
      <div className="right-board">
        <h1>Authorization</h1>
      </div>
    </>
  );
};

export default Auth;
