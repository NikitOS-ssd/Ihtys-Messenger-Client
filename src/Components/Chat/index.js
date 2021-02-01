import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import io from "socket.io-client";

const SERVER = process.env.REACT_APP_SERVER_URL;

const Chat = (props) => {
  const [login, setLogin] = useState("");
  const [status, setStatus] = useState("");
  const [isAuth, setAuth] = useState(false)
  const { user } = props;

  useEffect(() => {
    const socketio = io(SERVER);

    console.log(socketio);
    console.log(user);

    setLogin(user.login);
    setStatus(user.status);
    setAuth(user.isAuth);
  }, []);

  // if (!user.isAuth) {
  //   console.log("Не зареган");
  //   // window.location.href = "/auth";
  // }

  const authorizedChat = (
    <>
      {/* LEFT BOARD CONTAINER */}
      <div className="left-board">
        <div className="user">
          <img src="./images/avatar.png" alt="" />
          <h3>{login}</h3>
          <p>{status}</p>
        </div>
        <div className="links">
          <div className="link">
            <img src="./images/twitch.png" alt="" />
            <h2>Streams</h2>
          </div>
          <div className="link">
            <img src="./images/steam.png" alt="" />
            <h2>Games</h2>
          </div>
          <div className="link">
            <img src="./images/upcoming.png" alt="" />
            <h2>New</h2>
          </div>
          <div className="link">
            <img src="./images/library.png" alt="" />
            <h2>Library</h2>
          </div>
        </div>
        {/* <div className="pro">
          <h2>Join pro for free games.</h2>
          <img src="./images/controller.png" alt="" />
        </div> */}
      </div>
      {/* RIGHT BOARD CONTAINER */}
      <div className="right-board">
        <h1>Messanger</h1>
      </div>
    </>
  );

  return (
    authorizedChat
  );
};

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(Chat);
