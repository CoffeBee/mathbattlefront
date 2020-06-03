import React from 'react'
import axios from 'axios'
import qs from 'qs'
import './Register.css'
import bk from './images/background.svg'

class Register extends React.Component {
    constructor() {
      super();
      this.state = {
        username: '',
        name: '',
        surname: '',
        password: '',
      };
    }
    onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value});
    }
    onSubmit = (e) => {
      e.preventDefault()
      const { username, name, surname, password } = this.state;
      axios.post('http://api.math.silaeder.ru/users/signup', qs.stringify({
        username: this.state.username,
        name: this.state.name,
        surname: this.state.surname,
        password: this.state.password
      }), { headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/x-www-form-urlencoded",}
      })
        .then((res) => {
            console.log(res);
            this.setState({ username, name, surname, password });
        });
    }
    render() {
      const { username, name, surname, password } = this.state;
      return (
        <div className="login">
          <img src={bk} className="bk_img"/>
          <div className="field">
            <p className="field__label">MathBattle</p>
            <p className="field__enter_p">Регистрация</p>
            <form>
              <div className="form__nickname">
                  <input
                    className="form__nickname_p"
                    placeholder="Никнейм"
                    name="username"
                    onChange={this.onChange}
                  />
              </div>
              <div className="form__name">
                  <input
                    className="form__nickname_p"
                    placeholder="Имя"
                    name="name"
                    onChange={this.onChange}
                  />
              </div>
              <div className="form__surname">
                  <input
                    className="form__nickname_p"
                    placeholder="Фамилия"
                    name="surname"
                    onChange={this.onChange}
                  />
              </div>
              <div className="form__password">
                  <input
                    className="form__password_p"
                    placeholder="Пароль"
                    name="password"
                    onChange={this.onChange}
              />
              </div>
              <button onClick={this.onSubmit} className="form_submit form_submit_p">Создать</button>
            </form>
          </div>
        </div>
      );
    }
}

export default Register;
