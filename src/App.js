import React from 'react';
import './App.css';
import LeftMenu from './left-menu/left-menu.js';
import LeftBar from './left-bar/left-bar.js'
import Messages from './messages/messages.js'

function App() {
  return (
    <div className="app">
      <LeftMenu/>
      <LeftBar/>
      <Messages/>
    </div>
  );
}

export default App;
