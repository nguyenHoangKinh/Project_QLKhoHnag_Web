import axios from "axios";

const loginApi = (username, password) =>{
    return axios.post("https://warehouse-management-api.vercel.app/v1/auth/login", {username, password}).then((respone) => {
        console.log(respone);
        alert("Đăng nhập thành công");
        window.location.href = "/";
      }).catch((err) => {
        console.log(err.request.response);
        alert("Nhap sai ten tai khoan hoac mat khau");
      });
}

export {loginApi};