import axios from "axios";
import { BASE_URL } from "../config";
import React, { createContext, useState } from "react";
import {jwtDecode}  from "jwt-decode"
export const UserContext = createContext();

export const AuthProvider = ({ children }) => {
  let Token = localStorage.getItem("jsonwebtoken");
  let idUser= jwtDecode(Token)
  const [loadingData, setLoadingData] = useState(false);
    const [ListOrder, setListOrder] = useState([]);

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
const orderList = (Token) => {
  axios.get(BASE_URL+`/order/listOrderByOwner?id_user=${idUser.id}`, {
    headers: { 
      Authorization: `Bearer ${Token}` 
    }
  }).then((res) => {
  if (res && res.data && res.data) {
    setListOrder(res.data);
   }
  }).catch((error)=>{
  alert(error.message);
  });
}
return (
  <UserContext.Provider
    value={{
      ListOrder,
      loadingData,
      orderList,
      Logout,
      LoginUserToken,
    }}
  >
    {children}
  </UserContext.Provider>
);
}
