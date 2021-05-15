import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import io from "socket.io-client";

const SERVER = process.env.REACT_APP_SERVER_URL;
var socketio;

const Chat = ({user}) => {
  const [login, setLogin] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if(SERVER) {
      console.log('Web socket server can be start', SERVER);
    } else {
      console.log('Web socket server are crashed', SERVER);
    }
    socketio = io(SERVER);

    const client = JSON.parse(localStorage.getItem('user'));

    console.log('USER', user);

    setLogin(user.login);
    setStatus(user.status);

    socketio.emit('auth client', {user: client.login, status: client.status});

    socketio.on('chat message', function(data) {
      console.log(data);
    })
  }, []);

  function createMessage() {
    const message = prompt('Enter your merssage to server', '');
    socketio.emit('chat message', message);
  }

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
        <h1 onClick={createMessage}>Messanger</h1>
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
