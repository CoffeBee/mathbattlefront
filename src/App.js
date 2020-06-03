import React from "react";
import axios from 'axios';
import { BrowserRouter, Route } from "react-router-dom";import './App.css';

import Course from './components/coursecmp/Course.js';
import Login from './components/logincmp/Login.js';
import Register from './components/registercmp/Register.js';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' component={Course} exact/>
          <Route path='/login' component={Login} exact/>
          <Route path='/signup' component={Register} exact/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
