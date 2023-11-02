import axios from "axios";
// import { useEffect } from "react";
import { BASE_URL } from "../config";
import { Alert } from "bootstrap";

const LoginUserToken = (username,password) =>{
  axios
  .post(BASE_URL+"/auth/login", {
    username: username,
    password: password,
  })
  .then((response) => {
    if (response.data) {
      alert("dang nhap thanh cong")
      const token = response.data.accessToken;
      localStorage.setItem("jsonwebtoken", token);
      // set default headers
      // console.log("token:",token);    
      window.location.href = "/Home";
    }
  })
  .catch((error) => {
    console.log(error.data.message);
    Alert.alert(error.data.message);
  });
};
const Logout = (token) => {
  console.log("category: ", token);
  axios
    .get(BASE_URL + "/auth/logout", {
      headers: {
        token: token,
      },
    })
    .then((res) => {
      if (res) {
        localStorage.removeItem("jsonwebtoken");
        window.location.href = "/login";
      }
    }).catch((error) => {
        console.log(error.res.message);
      });
};
export { Logout,LoginUserToken };
