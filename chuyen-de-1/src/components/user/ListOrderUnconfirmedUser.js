import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import Header from '../HomeHeader';
import Navbar from '../HomeNavbar';
import Footer from '../HomeFooter';
import { BASE_URL } from "../../config";

const ListOrderUnconfirmed = () => {
  const navigation = useNavigate();
  const [ListOrderUser0, setListOrderUser0] = useState([]);

  let Token = localStorage.getItem("jsonwebtoken");
  const orderUnconfirmed = () => {
    navigation("/ListOrderUnconfirmed")
  }
  const ListOrderPendingPaymentUser = () => {
    navigation("/ListOrderPendingPaymentUser")
  }
  const ListOrdePaidUser = () => {
    navigation("/ListOrdePaidUser")
  }
  const orderUser = () => {
    navigation("/ShowListOrderUser")
  }

  const ListOrderUser = () => {
    axios
      .get(
        `${BASE_URL}/order/listOrderByUser?status=0`,
        {
          headers: { Authorization: `Bearer ${Token}` },
        }
      )
      .then((res) => {
        if (res && res.data) {
          let order = res.data.data;
          console.log(order);
          setListOrderUser0(order);
        }

      })
      .catch((e) => {

      });
  }
  useEffect(() => {
    ListOrderUser()
  }, []);
  const DeleteOrderOwner = (idOrder) => {
    if (idOrder) {
      axios
        .delete(
          `${BASE_URL}/order/deleteOrderByUser?id_order=${idOrder}`,
          {
            headers: {
              Authorization: `Bearer ${Token}`,
            },
          }
        )
        .then((res) => {
          ListOrderUser();
        })
        .catch((e) => {
        });
    } else {
      alert("xoa that bai!");
    }
  };

  //console.log(ListOrderOwner);

  return (
    <>
      <Header />
      <Navbar />
      <div class="main_content">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="list-group1">
                <a class="list-group-item list-group-item-action" onClick={orderUnconfirmed}>Chờ xác nhận đơn</a>
                <a class="list-group-item list-group-item-action" onClick={ListOrderPendingPaymentUser}>Chờ thanh toán</a>
                <a class="list-group-item list-group-item-action" onClick={ListOrdePaidUser}>Đã thanh toán</a>
                <a class="list-group-item list-group-item-action " onClick={orderUser}>Hóa đơn</a>
              </div>
            </div>
          </div>
          <section class="h-100 h-custom">
            <div class="container h-100 py-5">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col">
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col" class="h5">Order list</th>
                          <th scope="col" class="h5"></th>
                          <th scope="col" class="h5">Xóa</th>

                        </tr>
                      </thead>
                      <tbody>
                        {ListOrderUser0.map((item, index) => {
                          return (
                            <tr>
                              <th scope="row">
                                <a href="/#" class="list-group-item">
                                  <div class="d-flex align-items-center">
                                    <div class="flex-column ms-4">
                                      <p class="mb-2">Tên chủ kho: {item.owner.username}</p><p class="mb-2">Thời gian thuê: {item.rentalTime}</p>
                                    </div>
                                  </div>
                                </a>
                              </th>
                              <td class="align-middle">
                              </td>

                              <td class="align-middle">
                                <a class="myButton"onClick={() => {
                                  if (window.confirm("Bạn có muốn bài viết này không ?")) {
                                    DeleteOrderOwner(item._id)
                                  }
                                } 
                                }><i class="fa-solid fa-trash"></i></a>
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ListOrderUnconfirmed;
