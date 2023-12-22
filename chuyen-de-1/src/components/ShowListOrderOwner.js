import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
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
      <div className="category-containers">
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
      </div>
    </>
  );
};

export default ShowListOrderOwner;
