import React from 'react'
import './Register.css'
import bk from './images/background.svg'

const Register = () => {
    return (
      <div className="login">
        <img src={bk} className="bk_img"/>
        <div className="field">
          <p className="field__label">MathBattle</p>
          <p className="field__enter_p">Регистрация</p>
          <form>
            <div className="form__nickname">
                <input className="form__nickname_p" value="Никнейм"/>
            </div>
            <div className="form__name">
                <input className="form__nickname_p" value="Имя"/>
            </div>
            <div className="form__surname">
                <input className="form__nickname_p" value="Фамилия"/>
            </div>
            <div className="form__password">
                <input className="form__password_p" value="Пароль"/>
            </div>
            <button type="submit" className="form_submit form_submit_p">Создать</button>
          </form>
        </div>
      </div>
    );
}

export default Register;
