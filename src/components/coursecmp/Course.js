import React from 'react';
import './Course.css';
import LeftMenu from './left-menu/left-menu.js';
import LeftBar from './left-bar/left-bar.js'
import Messages from './messages/messages.js'

const Course = () => {
  return (
    <div className="course">
      <LeftMenu/>
      <LeftBar/>
      <Messages/>
    </div>
  );
}

export default Course;
