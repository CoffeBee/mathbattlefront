import React from "react";
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
          <Route path='/register' component={Register} exact/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
