import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import loginService from './services/loginService'

const LoginPage = props => {
  const navigate = useNavigate()
  const login = async (e) => {
    e.preventDefault(); // pra nao recarregar

    const data = await loginService.login(
            "teste@email.com",
            "123456"
    )
    console.log(data);

    navigate("/home") // para ir pra rota home
  }
  return (
    <div>
        <form>
            <div>
                <label htmlFor='email'>Email</label>
                <input id="email"/>
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input id="password"/>
            </div>
            <button onClick={login}>Login</button>
        </form>
    </div>
  )
}

LoginPage.propTypes = {}

export default LoginPage