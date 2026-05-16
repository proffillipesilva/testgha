import axios from "axios"

const login = async (email, password) => {
    const res = await axios.post
    (
        "http://10.5.36.41:38000/login",
         {email, password}
    )
    return res.data;
}

const cadastro = async (email, password, nome, imagem) => {
    const res = await axios.post
    (
        "http://10.5.36.41:38000/signUp2",
         {email, password, nome, imagem}
    )
    return res.data;
}

const loginService = { login, cadastro }

export default loginService;
