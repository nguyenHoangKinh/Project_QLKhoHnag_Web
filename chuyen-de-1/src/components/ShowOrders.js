import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Logout } from "../context/UserContext";
import ListGroup from "react-bootstrap/ListGroup";
import { UserContext } from "../context/UserContext";
import { BASE_URL } from "../config";
const ShowOrders = ({navigation}) => {
  let Token = localStorage.getItem("jsonwebtoken");
  const {
    loadingData,
    orderList,
    ListOrder,
    setDetailOrder,
    setIdDetailOrder,
    checkValue,
    OrderDetails,
    setCheckValue,
  } = useContext(UserContext);

  // console.log(checkValue);
  useEffect(() => {
    //call api
    orderList(Token);
  }, []);
  // const LogoutToken = () => {
  //   Logout(Token);
  // };
  
  // window.location.href = "/InformationWarehouse";
  return (
    <>
      <div className="category-containers">
        <ListGroup className="category-row">
          <h1 className="text-center">List Order</h1>
          {ListOrder &&
            ListOrder.length > 0 &&
            ListOrder.map((item, index) => {
              return (
                <>
                  <ListGroup.Item className="category-item">
                    <div className="row no-gutters">
                      {/* <aside class="col-md-3 mt-2">
                    <a href="#" class="img-wrap ">
                      <img src="https://file4.batdongsan.com.vn/2023/11/02/20231102084859-e975_wm.jpg" className="img-fluid"/>
                    </a>
                  </aside> */}
                      <div className="col-md-6">
                        <div className="info-main text-start">
                          <h3 className="text-start"> Thông tin hóa đơn</h3>
                          <div className="">Tên chủ kho: {item.owner}</div>
                          {/* <div className="">Tên kho hàng: {item.warehouses} </div>
                        <div className="">
                          Thời gian thuê: {item.rentalTime}{" "}
                        </div> */}
                        </div>
                      </div>
                      <aside className="col-sm-6">
                        <div className="info-aside">
                          <div className="price-wrap text-start">
                            <span className="price h5">
                              {" "}
                              Thông tin bên mua{" "}
                            </span>
                            <div className="">Tên khách hàng: {item.user}</div>
                          </div>
                          <br />
                          {/* <h4 className="text-center">{item.money}$ </h4> */}
                          <p>
                            <button
                              className="btn btn-primary btn-block"
                              isChecked={checkValue}
                              onClick={() => {setCheckValue(!checkValue)}}

                            >
                            {/* {
                            console.log(checkValue)} */}
                            {checkValue ? (OrderDetails(Token,item._id),navigation.navigate('InformationWarehouse')) : false}
                              Xem Chi Tiet
                            </button>
                          </p>
                        </div>
                      </aside>
                    </div>
                    {/* <div className="">{setIdDetailOrder(item._id)}</div> */}
                  </ListGroup.Item>
                </>
              );
            })}
        </ListGroup>
      </div>
    </>
  );
};

export default ShowOrders;
