import React from 'react';
import './left-menu.css'
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
      <div className="server-icon" style={{backgroundColor: this.fungetRandomColor(this.props.text)}}>
        <p className="server-icon-text">{this.props.text}</p>
      </div>
    );
  }
}

class LeftMenu extends React.Component {
  state = {
    courses: []
  }

  componentDidMount() {
    axios.get(`http://api.math.silaeder.ru/courses`,{
      headers: {"Access-Control-Allow-Origin": "*",
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Bearer ibzy7UIYZ7NsXEH5+cpGvg=="},
    responseType: 'json',
     }).then(res => {
        console.log(res);
        const courses = res.data;
        this.setState({ courses });
      })
  }

  render() {
    
    return (
    <div className="left-menu">
      { this.state.courses.map(course => <ServerIcon text={course.name}/>)}
    </div>
    );
  }
}


export default LeftMenu;
