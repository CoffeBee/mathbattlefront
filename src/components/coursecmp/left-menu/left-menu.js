import React from 'react';
import './left-menu.css'
import icon1 from './images/1.png';
import icon2 from './images/2.png';
import icon3 from './images/3.png';
import icon4 from './images/4.png';
import icon5 from './images/5.png';
import icon6 from './images/6.png';
import icon7 from './images/7.png';
const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7]

class ServerIcon extends React.Component {
  render() {
    return (
      <img className="server-icon" src={this.props.image}/>
    );
  }
}

class LeftMenu extends React.Component {

    render() {
      const items = []
      for (const [index, value] of icons.entries()) {
        items.push(<ServerIcon image={value}/>)
      }
      return (
      <div className="left-menu">{items}</div>
      );
    }
}


export default LeftMenu;
