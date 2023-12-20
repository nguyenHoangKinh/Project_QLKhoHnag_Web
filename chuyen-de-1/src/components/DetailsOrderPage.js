import React from "react";
import { Button, Card, Flex, Typography, Carousel } from "antd";
import SilderComponent from "../components/SilderComponent/SilderComponent";
import { UserContext } from "../context/UserContext";
import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const DetailsOrderPage = () => {
  let Token = localStorage.getItem("jsonwebtoken");
  const { loadingData, detailBlog, DetailBlog } = useContext(UserContext);
  const navigation = useNavigate();
  const location = useLocation();
  let id = location.state.item._id;
  console.log(detailBlog);
  useEffect(() => {
    //call api
    DetailBlog(Token, id);
  }, []);

  return (
    <div
      className="d-flex"
      style={{ width: "100%", height: "100vh", background: "#f5f5fa" }}
    >
      <div className="category-containers">
        <h4>Chi tiết đơn hàng</h4>
        {detailBlog != "" ? (
          <Card
            hoverable
            style={{ width: "100%" }}
            bodyStyle={{ padding: 0, overflow: "hidden" }}
          >
            <Flex justify="space-between">
              <div
                className=""
                style={{ width: "450px", height: "450px", padding: "10px" }}
              >
                <SilderComponent arrImages={detailBlog.images} />
              </div>
              <div style={{ width: "100%" }}>
                <Typography.Title level={3}>
                  {detailBlog.description}
                </Typography.Title>
                <div className="">
                  <i
                    class="fa-solid fa-warehouse"
                    style={{ color: "#16247d" }}
                  ></i>
                  <text style={{ color: "#16247d", marginLeft: "2px" }}>
                    Mã kho:
                  </text>
                  <text style={{ marginLeft: "10px", fontWeight: "bold" }}>
                    {detailBlog.warehouse._id}
                  </text>
                </div>
                <hr />
                <div className="">
                  <i
                    class="fa-solid fa-map-location-dot"
                    style={{ color: "#16247d" }}
                  ></i>
                  <text style={{ color: "#16247d", marginLeft: "2px" }}>
                    Địa chỉ kho:
                  </text>
                  <text style={{ marginLeft: "10px" }}>
                    {detailBlog.warehouse.address}
                  </text>
                </div>
                <hr />
                <div className="">
                  <i
                    class="fa-solid fa-dollar-sign"
                    style={{ color: "#16247d" }}
                  ></i>
                  <text style={{ color: "#16247d", marginLeft: "2px" }}>
                    giá thuê kho:
                  </text>
                  <text style={{ marginLeft: "10px" }}>
                    {detailBlog.warehouse.monney}
                  </text>
                </div>
                <hr />
                <div className="">
                  <i
                    class="fas fa-vector-square"
                    style={{ color: "#16247d" }}
                  ></i>
                  <text style={{ color: "#16247d", marginLeft: "2px" }}>
                    diện tích hiện tại của kho:
                  </text>
                  <text style={{ marginLeft: "10px" }}>
                    {detailBlog.warehouse.capacity}
                  </text>
                </div>
                <hr />
                <div className="">
                  <i
                    class="fa-solid fa-glass-water-droplet"
                    style={{ color: "#16247d" }}
                  ></i>
                  <text style={{ color: "#16247d", marginLeft: "2px" }}>
                    diện tích còn lại của kho:
                  </text>
                  <text style={{ marginLeft: "10px" }}>
                    {detailBlog.warehouse.currentCapacity}
                  </text>
                </div>

                <Button
                  type="primary"
                  href="#"
                  target="_blank"
                  style={{ top: "20px" }}
                >
                  Get Started
                </Button>
              </div>
            </Flex>
          </Card>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default DetailsOrderPage;
