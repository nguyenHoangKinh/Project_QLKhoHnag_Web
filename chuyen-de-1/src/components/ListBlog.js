import { useState, useEffect, useContext } from "react";
import { Image } from "antd";
import { UserContext } from "../context/UserContext";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";
import {
    EnvironmentOutlined
  } from "@ant-design/icons";

const ListBlog = () => {
  let Token = localStorage.getItem("jsonwebtoken");
  const { loadingData, ListBlog, ListBlogs } = useContext(UserContext);
  const navigation = useNavigate();
  useEffect(() => {
    //call api
    ListBlog(Token);
  }, []);
  return (
    <div className="category-containers">
      <h1 className="text-center">List Blog</h1>
      <div className="">
        {ListBlogs &&
          ListBlogs.length > 0 &&
          ListBlogs.map((item, index) => {
            return (
              <div className="m-10">
                <div
                  // onClick={() => {
                  //   navigation("/InformationWarehouse", {
                  //     state: { item },
                  //   });
                  // }}
                  className="row"
                >
                  <div className="col-md-6 border border-primary ps-0 pe-0">
                      <Image
                        width="100%"
                        height="100%"
                        src={item.images[0]}
                      />
                  </div>
                  <aside className="col-sm-6 border border-primary">
                    <div className="info-aside text-break">
                      <div className="price-wrap text-start">
                        <view className="price"> {item.description} </view>
                        <div className="">
                        Giá:~{item.warehouse.monney}
                        </div>
                        <div className="">
                        Diện tích: {item.warehouse.capacity}
                        </div>
                        <div className="">
                        <EnvironmentOutlined />
                        {item.warehouse.address}
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
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListBlog;
