import React from 'react';
import './messages.css'
import line from './images/line.svg'
import upload from './images/icons/upload.svg'
import emodgi from './images/icons/emodgi.png'
import microphone from './images/icons/microphone.svg'
import axios from 'axios';
import qs from 'qs'
import { w3cwebsocket as W3CWebSocket } from "websocket";

class Message extends React.Component {
    render() {
      return (
        <div className="messages__message">
            <div className="messages__message__info">
                <p className="messages__message__name">{this.props.name}</p>
                <p className="messages__message__time">{this.props.time}</p>
            </div>
            <p className="messages__message__text">{this.props.text}</p>

        </div>
      );
    }
}


class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      now: "",
      messages: [],
    }
  }
  logID(id) {
    axios.post(`http://api.math.silaeder.ru/chat/select`,qs.stringify({
      id: id,
    }),{
      headers: {"Access-Control-Allow-Origin": "*",
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Bearer zw7J3dyvwoaiKVSUy83vWg=="},
    responseType: 'json',
     }).then(res => {
      const messages = res.data;
      this.setState({ messages: messages });
      })
  }
    componentWillMount() {
        var client = new W3CWebSocket('ws://api.math.silaeder.ru/chat')
        client.onopen = () => {
          client.send("zw7J3dyvwoaiKVSUy83vWg==")
        };
        client.onmessage = (message) => {
          if (!message.data.startsWith('AUTH')) {
            var msg = JSON.parse(message.data);
            console.log(msg.data);
            this.setState ({ messages: this.state.messages.concat(msg.data) })
          }
        };
      }
    sendMessage(e) {
      axios.post(`http://api.math.silaeder.ru/chat/send`,qs.stringify({
        text: this.state.now,
      }),{
        headers: {"Access-Control-Allow-Origin": "*",
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Bearer zw7J3dyvwoaiKVSUy83vWg=="},
      responseType: 'json',
      }).then(res => {
      })
      this.setState({now: ""})
      e.preventDefault();

    }
    printText(e) {
      this.setState({now: e.target.value})
    }
    render() {
      return (
        <div>
            <div className="messages">
                <div className="messages__container">
                    <div className="messages__header">
                        <h2 className="messages__title"># Хитрый кот</h2>
                        <div className="messages__header__right">
                            <p className="messages__header__right__text">Активен 20 минут</p>
                        </div>
                    </div>
                    <hr className="messages__line" alt=""/>

                </div>

            </div>
            <div className="messages__block">
                <div className="messages__content">
                    <div className="messages__content__bottom">
                        <div className="messages__container">
                            <hr className="messages__line" alt=""/>
                            { this.state.messages.map(message => <Message name={message.user.username} time={message.sendAt} text={message.text}/>)}
                        </div>

                    </div>
                </div>
            </div>
            <form className="new_message__form" onSubmit={this.sendMessage.bind(this)}>
              <hr className="new_message__line" alt=""/>
              <img src={upload} className="new_message__icons_upload"/>
              <img src={emodgi} className="new_message__icons_emodgi"/>
              <img src={microphone} className="new_message__icons_microphone"/>
              <div className="new_message__input_div">
                  <input type="text" value={this.state.now} onChange={this.printText.bind(this)} className="new_message__input" placeholder="Написать в # Хитрый лис"/>
              </div>
            </form>
        </div>
      );
    }
}


export default Messages;
