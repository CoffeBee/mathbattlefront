import React from 'react';
import './messages.css'
import line from './images/line.svg'
import upload from './images/icons/upload.svg'
import emodgi from './images/icons/emodgi.png'
import microphone from './images/icons/microphone.svg'

import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('ws://127.0.0.1:3000/ws');

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
    componentWillMount() {
        client.onopen = () => {
          client.send("Hi");
          console.log('WebSocket Client Connected');
        };
        client.onmessage = (message) => {

          console.log(message);
        };
      }
    render() {
      var messages = [{name : "Иван Подворный", time : "12:41 AM", text: "Мы сортируем все дома - идём от максимального по заражённости - если мы заняли весь округ то соединмяем и прибавляем разницу"}]
      messages = messages.concat([{name : "Алексей Маренков", time: "17:09 PM", text : "Ваня, а можешьд дать идею как такое решить? Прост я подумал, что давайте мы для каждого округа и дома подсчитаем насколько мы хотим к ним поставить наблюдателя - но в итоге получился тест 5 2 3"}])
      messages = messages.concat(messages)
      messages = messages.concat(messages)
      messages = messages.concat(messages)
      messages = messages.concat(messages)
      messages = messages.concat(messages)
      var items = [];
      for (const [index, value] of messages.entries()) {
        items.push(<Message name={value.name} time={value.time} text={value.text}/>)
      }
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
                            {items}
                        </div>

                    </div>
                </div>
            </div>
            <form className="new_message__form">
              <hr className="new_message__line" alt=""/>
              <img src={upload} className="new_message__icons_upload"/>
              <img src={emodgi} className="new_message__icons_emodgi"/>
              <img src={microphone} className="new_message__icons_microphone"/>
              <div className="new_message__input_div">
                  <input type="text" className="new_message__input" value="Написать в # Хитрый лис"/>
              </div>
            </form>
        </div>
      );
    }
}


export default Messages;
