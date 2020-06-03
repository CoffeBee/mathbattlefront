import React from 'react';
import './left-menu.css'
import LeftBar from '../left-bar/left-bar.js'
import Messages from '../messages/messages.js'


import axios from 'axios';
const icons = ["8C", "8T", "Доп", "MathBattle"]

class ServerIcon extends React.Component {
  random(seed) {
    var x = Math.sin(seed);
    return x;
  }
  colToHex(c) {
    
    // Hack so colors are bright enough
    let color = (c < 75) ? c + 75 : c
    let hex = color.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  // uses colToHex to concatenate
  // a full 6 digit hex code
  rgbToHex(r,g,b) {
    return "#" + this.colToHex(r) + this.colToHex(g) + this.colToHex(b);
  }
  
  // Returns three random 0-255 integers
  fungetRandomColor(text) {
    
    return this.rgbToHex(
      Math.floor(Math.abs(this.random(this.hash(text))) * 255),
      Math.floor(Math.abs(this.random(this.hash(text + "1303"))) * 255),
      Math.floor(Math.abs(this.random(this.hash(text + "3031"))) * 255));
  }

  hash(s){
    return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
  }

  render() {
    return (
      <div className="server-icon" onClick = {this.props.handler} style={{backgroundColor: this.fungetRandomColor(this.props.text)}}>
        <p className="server-icon-text">{this.props.text}</p>
      </div>
    );
  }
}

class LeftMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: [],
    }
    this.threads = React.createRef();
    this.messages = React.createRef();
  }
  handler(id) {
    this.setState({course_now: id});
    this.threads.current.load_threads(id);
  }


  componentDidMount() {
    axios.get(`http://api.math.silaeder.ru/courses`,{
      headers: {"Access-Control-Allow-Origin": "*",
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Bearer PJwMrP9fG/AvrccYTkgClA=="},
    responseType: 'json',
     }).then(res => {
        console.log(res);
        const courses = res.data;
        this.setState({ courses });
      })
  }

  render() {
    
    return (
      <div>
         <div className="left-menu">
          { this.state.courses.map(course => <ServerIcon text={course.name} handler = {this.handler.bind(this, course.id)}/>)}
        </div>
        <LeftBar thread={this.threads} messages={this.messages} course_id={this.state.course_now}/>
        <Messages ref={this.messages}/>
      </div>
    );
  }
}


export default LeftMenu;
