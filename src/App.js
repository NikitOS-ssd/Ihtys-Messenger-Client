import React from 'react';
import logo from './logo.svg';
import './App.css';

import io from 'socket.io-client';

let socket;

function App({location}) {
  const SERVER = 'localhost:4000';


  React.useEffect(() => {
    console.log('Start application');

    socket = io(SERVER);

    console.log(socket);
  }, [SERVER])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
