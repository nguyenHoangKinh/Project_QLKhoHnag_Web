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
  const [ListOrderOwner, setListOrderOwner] = useState([]);
  const [ListBlogs, setListBlogs] = useState([]);
  const [DetailOrder, setDetailOrder] = useState({});
  const [checkDetailOrder, setcheckDetailOrder] = useState(false);
  const [checkValue, setCheckValue] = useState(false);
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const [detailBlog, setDetailBlog] = useState([]);
  const [acount, setAcount] = useState([]);
  // const [IdDetailOrder, setIdDetailOrder] = useState([]);
  // console.log(IdDetailOrder);
  // console.log(DetailOrder);

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
          } else if(response.data.others.isAdmin){
            window.location.href = "/HomeAdminScreen";
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
    // console.log("category: ", token);
    axios
      .get(BASE_URL + "/auth/logout", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res) {
          alert(res.data.message);
          localStorage.removeItem("jsonwebtoken");
          window.location.href = "/";
        }
      })
      .catch((error) => {
        alert(error.request.response.slice(12).replace('"}', ""));
      });
  };
  const orderList = (Token) => {
    let idUser = jwtDecode(Token);
    axios
      .put(BASE_URL + `/order/listOrderByUser?id_user=${idUser.id}`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((res) => {
        if (res && res.data) {
          setListOrder(res.data);
          console.log(res.data);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const OrderDetails = (Id) => {
    // console.log(Token,Id);
    if (Id) {
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
            setcheckDetailOrder(true);
            // console.log(res.data);
          } else {
            console.log("mang rong...");
            setcheckDetailOrder(false);
          }
        })
        .catch((e) => {
          console.log(`update error ${e.response.data.message}`);
          setcheckDetailOrder(false);
        });
    } else {
      setcheckDetailOrder(false);
      alert("loi don hang");
    }
    setCheckValue(false);
  };

  const ListBlog = (token) => {
    if (token) {
      axios
        .get(BASE_URL + `/blog/list-by-blog`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          // alert(res.data.message);
          // console.log(res.data.blog);
          setListBlogs(res.data.blog);
        })
        .catch((e) => {
          // if (e.response.data.success === false) {
          alert(e.response.data.message);
          //   logout()
          // }
        });
    } else {
      alert("load bai viet that bai!");
    }
  };
  const DetailBlog = (token,id) => {
    if (token,id) {
      axios
        .get(BASE_URL + `/blog/get-by-id?id=${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res && res.data.data) {
            setDetailBlog(res.data.data)
          }
        })
        .catch((e) => {
        });
    } else {
      alert("load bai viet that bai!");
    }
  };
  const DeleteOrderUser = (idUser, idOrder, token) => {
    if (idUser && idOrder) {
      axios
        .delete(
          BASE_URL +
            `/order/deleteOrderByUser?id_user=${idUser}&id_order=${idOrder}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          alert(res.data.message);
          window.location.href = "/ShowOrders";
        })
        .catch((e) => {
          alert(e.response.data.message);
        });
    } else {
      alert("xoa that bai!");
    }
  };
  const orderListOwner = (Token) => {
    let idOwner = jwtDecode(Token);
    axios
      .get(BASE_URL + `/order/listOrderByOwner?id_owner=${idOwner.id}`, {


  const deActiveAcount = (Token) => {
    let idAcount = jwtDecode(Token);
    axios
      .put(BASE_URL + `/admin/deactivate-account?id=${idAcount.id}`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((res) => {
        if (res && res.data) {
          setListOrderOwner(res.data);
          console.log(res.data);
        }
          setAcount(res);
          console.log(res);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const wListOwner = (Token) => {
    let idUser = jwtDecode(Token);
    axios
    .get(
      BASE_URL+`/warehouse/list?id_owner=${idUser.id}`,
      {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      }
    )
    .then((res) => {
      // setColumns(Object, res.data);
      setRecords(res.data);
      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",res.data);
    }).catch((e) => {
      // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",e.response.data);
    });
  };
  
  console.log(DetailOrder);
  return (
    <UserContext.Provider
      value={{
        checkValue,
        ListOrder,
        loadingData,
        DetailOrder,
        ListOrderOwner,
        checkDetailOrder,
        ListBlogs,
        records,
        columns,
        detailBlog,
        acount,
        setCheckValue,
        DeleteOrderUser,
        orderListOwner,
        ListBlog,
        DetailBlog,
        wListOwner,
        setDetailOrder,
        deActiveAcount,
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
