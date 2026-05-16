import React from 'react'
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
            form.email,
            form.password
        )
        console.log(data);
        // passo o token para o estado
        setUser(data.token)

        navigate("/") // para ir pra rota home
    }

    const cadastro = async (e) => {
        e.preventDefault(); // pra nao recarregar

        const data = await loginService.cadastro(
            form.email,
            form.password,
            form.nome,
            form.imagem
        )
        console.log(data);

        navigate("/") // para ir pra rota home
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }

    return (
        <div>
            <div className="text-3xl font-bold text-blue-600 ">Página de Login</div>
            <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-xl border border-gray-100">
                    <div>
                        <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900">
                            {ehCadastro ? 'Criar nova conta' : 'Entrar na sua conta'}
                        </h2>
                    </div>

                    <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-4 rounded-md">
                            {/* Campo Email */}
                            <div className="flex flex-col gap-1">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
                                    placeholder="seu@email.com"
                                />
                            </div>

                            {/* Campo Senha */}
                            <div className="flex flex-col gap-1">
                                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
                                    placeholder="••••••••"
                                />
                            </div>

                            {ehCadastro && (
                                <>
                                    {/* Campo Nome */}
                                    <div className="flex flex-col gap-1 animate-fadeIn">
                                        <label htmlFor="nome" className="text-sm font-medium text-gray-700">
                                            Nome
                                        </label>
                                        <input
                                            id="nome"
                                            name="nome"
                                            value={form.nome}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
                                            placeholder="Seu nome completo"
                                        />
                                    </div>

                                    {/* Campo Imagem */}
                                    <div className="flex flex-col gap-1 animate-fadeIn">
                                        <label htmlFor="imagem" className="text-sm font-medium text-gray-700">
                                            URL da Imagem
                                        </label>
                                        <input
                                            id="imagem"
                                            name="imagem"
                                            value={form.imagem}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
                                            placeholder="https://exemplo.com/foto.jpg"
                                        />
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Seção de Botões */}
                        <div className="flex flex-col gap-3 pt-2">
                            {ehCadastro ? (
                                <>
                                    <button
                                        type="button"
                                        onClick={cadastro}
                                        className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
                                    >
                                        Cadastrar
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setEhCadastro(false)}
                                        className="text-center text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors"
                                    >
                                        Já tem uma conta? Faça Login
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        type="button"
                                        onClick={login}
                                        className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
                                    >
                                        Logar
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setEhCadastro(true)}
                                        className="text-center text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors"
                                    >
                                        Não tem uma conta? Cadastre-se
                                    </button>
                                </>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

LoginPage.propTypes = {}

export default LoginPage