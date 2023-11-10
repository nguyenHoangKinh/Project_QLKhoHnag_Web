import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Logout } from "../services/UserServices";
import { BASE_URL } from "../config";
import ListGroup from "react-bootstrap/ListGroup";
const ShowOrders = () => {
  

  return (
    <>
      <div className="category-containers">
        <ListGroup className="category-row">
        <h1 className="text-center">List Order</h1>
          {/* {ListCategory &&
            ListCategory.length > 0 &&
            ListCategory.map((item, index) => {
              return ( */}
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
                    <div className="">Tên chủ kho: </div>
                    <div className="">Tên kho hàng: </div>
                    <div className="">Thời gian thuê: </div>
                </div>
              </div>
              <aside class="col-sm-6">
                <div class="info-aside">
                  <div class="price-wrap text-start">
                    <span class="price h5"> Thông tin bên mua </span>
                    <div className="">Tên khách hàng: </div>
                  </div>
                  <br />
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
          {/* );
            })} */}
        </ListGroup>
      </div>
    </>
  );
};

export default ShowOrders;
