import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Button, Flex } from 'antd';
const InformationWarehouse = () => {
  let Token = localStorage.getItem("jsonwebtoken");
  const location = useLocation();
  const { OrderDetails, DetailOrder,DeleteOrderUser } = useContext(UserContext);

  // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ",location.state.item.user._id,location.state.item.owner._id,Token);
  useEffect(() => {
    //call api
    OrderDetails(location.state.item._id) ;
  }, []);
  function thongBao()
  {
    if (window.confirm(`Delete the Order ${DetailOrder.name} ?`)) {
      DeleteOrderUser(location.state.item.user._id,location.state.item._id,Token);
    }
  
  }
  
  return (
    <>
      {DetailOrder == null ? (
        alert("chi tiết đơn hàng không có giá trị")
      ) : (
        <div className="container d-flex justify-content-center ">
          <div class="card" style={{ width: "46rem", height: "30rem" }}>
            {/* <div className="w-200 h-50">
        <img src="https://file4.batdongsan.com.vn/2023/05/29/20230529153800-9db6_wm.jpg" class="card-img-top " alt="..." />
        </div> */}
            <div class="card-body">
              <h4 class="card-title">Thông tin đơn hàng</h4>
              <hr />
              <div className="row">
                <div className="box-monney-capacty row">
                  <div className="col-2">
                    <h6 className="">Mức giá</h6>
                    <div className="monney">
                      {DetailOrder.money != null
                        ? DetailOrder.money
                        : "Không có giá trị!"}
                    </div>
                  </div>
                  <div className="col-2">
                    <h6 className="capacity ">Diện tích : </h6>
                    <div className="capacity ">5.000 m²</div>
                  </div>
                  <div className="col-3">
                    <h6 className="capacity ">thoi gian thue</h6>
                    <div className="capacity ">
                      {DetailOrder.rentalTime != null
                        ? DetailOrder.rentalTime
                        : "Không có giá trị!"}
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <h6 className="text">
                    Tên chủ kho:{" "}
                    {DetailOrder.owner != null
                      ? DetailOrder.owner.username
                      : "Không có giá trị!"}
                  </h6>
                  <h6 className="text">
                    ten kho:{" "}
                    {DetailOrder.warehouses != null
                      ? DetailOrder.warehouses.wareHouseName
                      : "Không có giá trị!"}
                  </h6>
                  <h6 className="text">
                    ten khach{" "}
                    {DetailOrder.user != null
                      ? DetailOrder.user.username
                      : "Không có giá trị!"}
                  </h6>
                </div>
                <hr />
                <div className="row">
                  <h5 className="">Địa Chỉ</h5>
                  <div className="address">
                    {" "}
                    {DetailOrder.warehouses != null
                      ? DetailOrder.warehouses.address
                      : "Không có giá trị!"}
                  </div>
                </div>
              </div>
              <div
              onClick={() => {
                 thongBao();
              }}
               className="d-flex justify-content-center">
              <Button type="primary" danger>Hủy Đơn</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InformationWarehouse;
