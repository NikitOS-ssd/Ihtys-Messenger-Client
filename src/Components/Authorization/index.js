import React, { useState } from "react";
import { Link } from "react-router-dom";
import LockIcon from "@material-ui/icons/Lock";
import { connect } from "react-redux";

const Auth = (props) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const {authUser} = props;

  function authorization() {
    if(login) {
      if(password) {
        authUser(login);
        // window.location.href = "/chat";
      }
    } else {
      alert('Undefined user login');
    }
  }

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

        <div className="authorized-block">
          <div className="form-block">
            <h2>Your login</h2>
            <input
              placeholder="enter your login"
              type="text"
              value={login}
              onChange={(event) => setLogin(event.target.value)}
            />
          </div>
          <div className="form-block">
            <h2>Your password</h2>
            <input
              placeholder="enter your password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <button className="auth-button" onClick={authorization} >Login</button>
        </div>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    user: state.user
  }
}
function mapDispatchToProps(dispatch) {
  return {
    authUser: (login) => dispatch({type: "LOGIN", login: login}) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
