import React from 'react';
import './left-bar.css'
import setting from './images/icons/settings2x.png'
import thread from './images/icons/thread2x.png'
import AllThreads from './all-threads.js'
class LeftBar extends React.Component {
    render() {
      return (
        <div className="left-bar">
          <div>
            <h2 className="title">
              Мат-прак 8Т
            </h2>
            <img src={setting} className="right-icon"/>
          </div>
          <div className="all-channels">
            <img src={thread} className="thread-icon"/>
            <p className="all-channels__text">Все потоки</p>
          </div>
          <AllThreads ref={this.props.thread} messages={this.props.messages} course_id={this.props.course_id}/>
        </div>
      );
    }
}


export default LeftBar;
