import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../config";
import React, { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";
export const UserContext = createContext();

export const AuthProvider = ({ children }) => {
  let token = localStorage.getItem("jsonwebtoken");
  const [loadingData, setLoadingData] = useState(false);
  const [ListOrder, setListOrder] = useState([]);
  const [DetailOrder, setDetailOrder] = useState({});
  const [checkValue, setCheckValue] = useState(false);
  // const [IdDetailOrder, setIdDetailOrder] = useState([]);
  // console.log(IdDetailOrder);
  console.log(DetailOrder);

  const LoginUserToken = (username, password) => {
    setLoadingData(true);
    axios
      .post(BASE_URL + "/auth/login", {
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
          } else {
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
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res) {
          alert(res.data.message);
          localStorage.removeItem("jsonwebtoken");
          window.location.href = "/login";
        }
      })
      .catch((error) => {
        alert(error.request.response.slice(12).replace('"}', ""));
      });
  };
  const orderList = (Token) => {
    let idUser = jwtDecode(Token);
    axios
      .get(BASE_URL + `/order/listOrderByUser?id_user=${idUser.id}`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((res) => {
        if (res && res.data) {
          setListOrder(res.data);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const OrderDetails = (Id) => {
    // console.log(Token,Id);
    axios
      .get(BASE_URL + `/order/getAOrder?id=${Id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res && res.data) {
          let detail = res.data.Order;
          setDetailOrder(detail);
        }else{
          console.log("mang rong...");
        }
      })
      .catch((e) => {
        console.log(`update error ${e.response.data.message}`);
      });
      setCheckValue(false);
  };
  console.log(DetailOrder);
  return (
    <UserContext.Provider
      value={{
        checkValue,
        ListOrder,
        loadingData,
        DetailOrder,
        setCheckValue,
        // setIdDetailOrder,
        setDetailOrder,
        OrderDetails,
        orderList,
        Logout,
        LoginUserToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
