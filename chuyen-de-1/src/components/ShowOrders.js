import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState,useEffect,useContext } from "react";
import { Logout } from "../context/UserContext";
import ListGroup from "react-bootstrap/ListGroup";
import {UserContext} from '../context/UserContext';
const ShowOrders = () => {
  let Token = localStorage.getItem("jsonwebtoken");
  const {loadingData,orderList,ListOrder} = useContext(UserContext);
  useEffect(() => {
    //call api
    orderList(Token);
  }, []);
  // const LogoutToken = () => {
  //   Logout(Token);
  // };

  return (
    <>
      <div className="category-containers">
        <ListGroup className="category-row">
        <h1 className="text-center">List Order</h1>
          {ListOrder &&
            ListOrder.length > 0 &&
            ListOrder.map((item, index) => {
              return (
          <ListGroup.Item className="category-item">
            <div class="row no-gutters">
              {/* <aside class="col-md-3 mt-2">
                    <a href="#" class="img-wrap ">
                      <img src="https://file4.batdongsan.com.vn/2023/11/02/20231102084859-e975_wm.jpg" className="img-fluid"/>
                    </a>
                  </aside> */}
              <div class="col-md-6">
                <div class="info-main text-start">
                  <h3 className="text-start"> Thông tin hóa đơn</h3>
                    <div className="">Tên chủ kho: {ListOrder.owner}</div>
                    <div className="">Tên kho hàng: {ListOrder.warehouses} </div>
                    <div className="">Thời gian thuê: {ListOrder.rentalTime} </div>
                </div>
              </div>
              <aside class="col-sm-6">
                <div class="info-aside">
                  <div class="price-wrap text-start">
                    <span class="price h5"> Thông tin bên mua </span>
                    <div className="">Tên khách hàng: {ListOrder.user}</div>
                  </div>
                  <br />
                  <h4 className="text-center">{ListOrder.money}$ </h4>
                  {/* <p>
                    <a href="#" class="btn btn-primary btn-block">
                      {" "}
                      Details{" "}
                    </a>
                    <a href="#" class="btn btn-light btn-block">
                      <i class="fa fa-heart"></i>
                      <span class="text">Add to wishlist</span>
                    </a>
                  </p> */}
                </div>
              </aside>
            </div>
          </ListGroup.Item>
          );
            })}
        </ListGroup>
      </div>
    </>
  );
};

export default ShowOrders;
