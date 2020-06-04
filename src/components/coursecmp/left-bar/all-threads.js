import React from 'react';
import './left-bar.css'
import axios from 'axios';
import qs from 'qs'


class AllThreads extends React.Component {
  state = {
    chats: []
  }
  
  load_threads(id) {
    console.log("MOUND")
    axios.post(`http://api.math.silaeder.ru/courses/chats`,qs.stringify({
      id: id,
    }),{
      headers: {"Access-Control-Allow-Origin": "*",
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Bearer zw7J3dyvwoaiKVSUy83vWg=="},
    responseType: 'json',
     }).then(res => {
        console.log(res);
        const chats = res.data;
        this.setState({ chats });
      })
  }

  select(id) {
    this.props.messages.current.logID(id)
  }

  render() {
    
    return (
        <div>
            <div className="list-header">
              <p className="list-header__text">потоки</p>
              <p className="list-header__right">0</p>
          </div>
          
          { this.state.chats.map(chat => <div className="list-item" onClick={this.select.bind(this, chat.id)}><p className="list-item__text">{chat.name}</p></div>)}
        </div>
    );
  }
}


export default AllThreads;
