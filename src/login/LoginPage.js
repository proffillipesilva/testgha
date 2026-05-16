import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import loginService from './services/loginService'
import store from '../store/store'

const LoginPage = props => {
    // saber se o formulario eh cadastro ou login
    const [ehCadastro, setEhCadastro] = React.useState(false)
    // guardar os dados do formulário
    const [form, setForm] = React.useState({ nome: '', email: '', password: '', imagem: '' })

    const { setUser } = store()
    const navigate = useNavigate()
    const login = async (e) => {
        e.preventDefault(); // pra nao recarregar

        const data = await loginService.login(
            "teste@email.com",
            "123456"
        )
        console.log(data);
        // passo o token para o estado
        setUser(data.token)

        navigate("/") // para ir pra rota home
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }

    return (
        <div>
            <div className="text-3xl font-bold text-blue-600 ">Página de Login</div>
            <form>
                <div className="">
                    <label htmlFor='email'>Email</label>
                    <input id="email" name='email' value={form.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input id="password" name='password' value={form.password} onChange={handleChange} />
                </div>
                {ehCadastro ?
                    <>
                        <div className="">
                            <label htmlFor='nome'>Nome</label>
                            <input id="nome" name='nome' value={form.nome} onChange={handleChange} />
                        </div>
                        <div className="">
                            <label htmlFor='imagem'>Imagem</label>
                            <input id="imagem" name='imagem' value={form.imagem} onChange={handleChange} />
                        </div>
                        <button onClick={login}>Cadastrar</button>
                        <button onClick={() => setEhCadastro(false)}>Login</button>
                    </> : <>
                        <button onClick={login}>Logar</button>
                        <button onClick={() => setEhCadastro(true)}>Cadastro</button>
                    </>
                }
            </form>
        </div>
    )
}

LoginPage.propTypes = {}

export default LoginPage