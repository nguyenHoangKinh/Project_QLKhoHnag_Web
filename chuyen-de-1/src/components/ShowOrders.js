import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
const ShowOrders = () => {
  const navigation = useNavigate();
  let Token = localStorage.getItem("jsonwebtoken");
  const { loadingData, orderList, ListOrder } = useContext(UserContext);

  // console.log(checkValue);
  useEffect(() => {
    //call api
    orderList(Token);
  }, []);
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
                  {console.log(item)}
                  <ListGroup.Item className="category-item">
                    <div
                      onClick={() => {
                        navigation("/InformationOrder", {
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
                          {/* <h4 className="text-center">{item.money}$ </h4> */}
                          {/* <p>
                            <button
                              className="btn btn-primary btn-block"
                              onClick={() => {
                                navigation("/InformationWarehouse", {
                                  state: { item },
                                });
                              }}
                            >
                              Xem Chi Tiet
                            </button>
                          </p> */}
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
