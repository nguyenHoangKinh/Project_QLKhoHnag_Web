import axios from "axios";

const loginApi = (username, password) =>{
    return axios.post("https://warehouse-management-api.vercel.app/v1/auth/login", {username, password})
}

export {loginApi};