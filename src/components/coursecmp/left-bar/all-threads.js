import React from 'react';
import './left-bar.css'
import axios from 'axios';
import qs from 'qs'


class AllThreads extends React.Component {
  state = {
    chats: []
  }

  componentDidMount() {
    console.log("MOUND")
    axios.post(`http://api.math.silaeder.ru/courses/chats`,qs.stringify({
      id: 'd60e853a-7de9-4091-ba0a-b87e79939364',
    }),{
      headers: {"Access-Control-Allow-Origin": "*",
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Bearer ibzy7UIYZ7NsXEH5+cpGvg=="},
    responseType: 'json',
     }).then(res => {
        console.log(res);
        const chats = res.data;
        this.setState({ chats });
      })
  }
  render() {
    return (
        <div>
            <div className="list-header">
              <p className="list-header__text">потоки</p>
              <p className="list-header__right">0</p>
          </div>
          
          { this.state.chats.map(chat => <div className="list-item"><p className="list-item__text">{chat.name}</p></div>)}
        </div>
    );
  }
}


export default AllThreads;
