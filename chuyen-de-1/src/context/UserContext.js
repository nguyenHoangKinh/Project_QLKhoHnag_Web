import axios from "axios";
import { BASE_URL } from "../config";
import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loadingData, setLoadingData] = useState(false);

const LoginUserToken = (username,password) =>{
  setLoadingData(true);
  axios
  .post(BASE_URL+"/auth/login", {
    username: username,
    password: password,
  })
  .then((response) => {
    if (response.data) {
      // alert("dang nhap thanh cong")
      setLoadingData(false);
      console.log(response.data.others);
      const token = response.data.accessToken;
      localStorage.setItem("jsonwebtoken", token);
      if (response.data.others.isOwner) {
        window.location.href = "/HomeScreen";
      }else{
        window.location.href = "/HomeUserScreen";
      }
      
    }
  })
  .catch((error) => {
    // console.log(error.request.response);
    alert(error.request.response.slice(12).replace('"}', ""));
  });
};
const Logout = (token) => {
  console.log("category: ", token);
  axios
    .get(BASE_URL + "/auth/logout", {
      headers: { Authorization: `Token ${token}` }
    })
    .then((res) => {
      if (res) {
        alert(res.data.message);
        localStorage.removeItem("jsonwebtoken");
        window.location.href = "/login";
      }
    }).catch((error) => {
      alert(error.request.response.slice(12).replace('"}', ""));
      });
};
return (
  <UserContext.Provider
    value={{
      loadingData,
      Logout,
      LoginUserToken,
    }}
  >
    {children}
  </UserContext.Provider>
);
}
