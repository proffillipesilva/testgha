import axios from "axios"

const login = async (email, password) => {
    const res = await axios.post
    (
        "http://10.5.36.41:38000/login",
         {email, password}
    )
    return res.data;
}

export default { login }
