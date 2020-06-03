import React from 'react'
import './Login.css'
import bk from './images/background.svg'

const Login = () => {
    return (
      <div className="login">
        <img src={bk} className="bk_img"/>
        <div className="field">
          <p className="field__label">MathBattle</p>
          <p className="field__enter_p">Вход</p>
          <form>
            <div className="form__nickname">
                <input className="form__nickname_p" placeholder="Никнейм"/>
            </div>
            <div className="form__password">
                <input className="form__password_p" placeholder="Пароль"/>
            </div>
            <a href="/register" classname="register_p">Нет аккаунта? Создайте!</a>
            <button type="submit" className="form_submit form_submit_p">Вход</button>
          </form>
        </div>
      </div>
    );
}

export default Login;
