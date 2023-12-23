import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Header from './HomeHeader';
import Navbar from './HomeNavbar';
import Footer from './HomeFooter';
const ShowListOrderOwner = () => {
  const navigation = useNavigate();
  let Token = localStorage.getItem("jsonwebtoken");
  
  const { loadingData, orderListOwner, ListOrderOwner } = useContext(UserContext);

  console.log(ListOrderOwner);
  useEffect(() => {
    //call api
    orderListOwner(Token);
  }, []);
  return (
    <>
      {/* <div className="category-containers">
        <ListGroup className="category-row">
          <h1 className="text-center">List Order Owner</h1>
          {ListOrderOwner &&
            ListOrderOwner.length > 0 &&
            ListOrderOwner.map((item, index) => {
              return (
                <>
                  {console.log(item)}
                  <ListGroup.Item className="category-item">
                    <div
                      onClick={() => {
                        navigation("/InformationWarehouse", {
                          state: { item },
                        });
                      }}
                      className="row no-gutters"
                    >
                      <div className="col-md-6">
                        <div className="info-main text-start">
                          <h2 className="text-start">Hóa đơn</h2>
                          <div className="">
                            Tên chủ kho: {item != null ? item.owner.username : ""}
                          </div>
                          <div className="">Mã đơn: {item != null ? item.name : ""}</div>
                          <div className="">
                            Thời gian thuê: {item != null ? item.rentalTime : ""}
                          </div>
                        </div>
                      </div>
                      <aside className="col-sm-6">
                        <div className="info-aside">
                          <div className="price-wrap text-start">
                            <span className="price h5">
                              {" "}
                              Thông tin bên mua{" "}
                            </span>
                            <div className="">
                              Tên khách hàng: {item != null ? item.user.username : ""}
                            </div>
                          </div>
                          <br />
                        </div>
                      </aside>
                    </div>
                  </ListGroup.Item>
                </>
              );
            })}
        </ListGroup>
      </div> */}
      <>
      <Header />
      <Navbar />
      <div class="main_content">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="list-group">
                <a href="/#" class="list-group-item list-group-item-action">Chờ xác nhận đơn</a>
                <a href="/#" class="list-group-item list-group-item-action">Chờ thanh toán</a>
                <a href="/#" class="list-group-item list-group-item-action">Đã thanh toán</a>
                <a href="/#" class="list-group-item list-group-item-action">Hóa đơn</a>
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
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
                            <a href="/#" class="list-group-item">
                            <div class="d-flex align-items-center">
                              <div class="flex-column ms-4">
                                <p class="mb-2">Thinking, Fast and Slow</p>
                                <p class="mb-0">Daniel Kahneman</p>
                              </div>
                            </div>
                            </a>
                          </th>
                          <td class="align-middle">
                            <p class="mb-0" style={{ fontWeight: "500" }}></p>
                          </td>
                          <td class="align-middle">
                          </td>
                          <td class="align-middle">
                            <p class="mb-0" style={{ fontWeight: "500" }}>$9.99</p>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <a href="/#" class="list-group-item">
                            <div class="d-flex align-items-center">
                              <div class="flex-column ms-4">
                                <p class="mb-2">Thinking, Fast and Slow</p>
                                <p class="mb-0">Daniel Kahneman</p>
                              </div>
                            </div>
                            </a>
                          </th>
                          <td class="align-middle">
                            <p class="mb-0" style={{ fontWeight: "500" }}></p>
                          </td>
                          <td class="align-middle">
                          </td>
                          <td class="align-middle">
                            <p class="mb-0" style={{ fontWeight: "500" }}>$9.99</p>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <a href="/#" class="list-group-item">
                            <div class="d-flex align-items-center">
                              <div class="flex-column ms-4">
                                <p class="mb-2">Thinking, Fast and Slow</p>
                                <p class="mb-0">Daniel Kahneman</p>
                              </div>
                            </div>
                            </a>
                          </th>
                          <td class="align-middle">
                            <p class="mb-0" style={{ fontWeight: "500" }}></p>
                          </td>
                          <td class="align-middle">
                          </td>
                          <td class="align-middle">
                            <p class="mb-0" style={{ fontWeight: "500" }}>$9.99</p>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <a href="/#" class="list-group-item">
                            <div class="d-flex align-items-center">
                              <div class="flex-column ms-4">
                                <p class="mb-2">Thinking, Fast and Slow</p>
                                <p class="mb-0">Daniel Kahneman</p>
                              </div>
                            </div>
                            </a>
                          </th>
                          <td class="align-middle">
                            <p class="mb-0" style={{ fontWeight: "500" }}></p>
                          </td>
                          <td class="align-middle">
                          </td>
                          <td class="align-middle">
                            <p class="mb-0" style={{ fontWeight: "500" }}>$9.99</p>
                          </td>
                        </tr>
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
    </>
  );
};

export default ShowListOrderOwner;
