import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Link } from "react-router-dom";
import LockIcon from "@material-ui/icons/Lock";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Auth = (props) => {
  const { loginUser, registerUser } = props;

  return (
    <>
      {/* LEFT BOARD CONTAINER */}
      <div className="left-board">
        <div className="user">
          <LockIcon style={{ fontSize: "5rem", color: "#426696" }} />
        </div>
        <div className="links">
          <Link to="/login">
            <div className="link">
              <h2>Login</h2>
            </div>
          </Link>
          <Link to="/register">
            <div className="link">
              <h2>Register</h2>
            </div>
          </Link>
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
        <Switch>
          <Route
            exact
            path="/"
            render={() => <LoginForm loginFunction={loginUser} />}
          />
          <Route
            path="/login"
            render={() => <LoginForm loginFunction={loginUser} />}
          />
          <Route
            path="/register"
            render={() => <RegisterForm registerFunction={registerUser} />}
          />
        </Switch>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    loginUser: (login) => dispatch({ type: "LOGIN", login: login }),
    registerUser: (login, status) => dispatch({ type: "REGISTRATION", login: login, status: status }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
