import axios from "axios";

const loginApi = (emai, password) =>{
    return axios.post("/api/login", {emai, password})
}

export {loginApi};