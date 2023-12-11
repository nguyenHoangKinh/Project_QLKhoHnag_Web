import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Button, Flex } from "antd";
import { BASE_URL } from "../config";
const InformationWarehouse = () => {
  let Token = localStorage.getItem("jsonwebtoken");
  const location = useLocation();
  const [detailWarehouse, setDetailWarehouses] = useState(null);
  // const {  } =
  //   useContext(UserContext);

  // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ",location.state.itemWarehouse._id,Token,detailWarehouse,detailWarehouse.createdAt);
  useEffect(() => {
    if (location.state.itemWarehouse._id,Token) {
      axios.get(
        BASE_URL+`/warehouse/getAWarehouse?id=${location.state.itemWarehouse._id}`,{
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      ).then((res) => {
        console.log(res.data.warehouse);
        if (res.data) {
          setDetailWarehouses(res.data.warehouse)
        }else{
          alert("thông tin chi tiết ko tồn tại!")
        }
  
      }).catch((e) => {
        console.log(` error ${e.response.data.message}`);
      });
    }else{
      alert("loi")
    }
  }, []);
  function thongBao() {
    if (window.confirm(`Delete the Order ${detailWarehouse.name} ?`)) {
      this.DeleteOrderUser(
        location.state.item.user._id,
        location.state.item._id,
        Token
      );
    }
  }
  // const formatTime = (item) => {
  //   const options = { hour: "numeric", minute: "numeric" };
  //   return new Date(item).toLocaleString("en-US", options);
  // };
  return (
    <>
      {!detailWarehouse ? (
        <h4 >chi tiết đơn hàng không có giá trị</h4>
      ) : (
        <div className="container d-flex justify-content-center ">
          <div class="card" style={{ width: "46rem", height: "30rem" }}>
            {/* <div className="w-200 h-50">
        <img src="https://file4.batdongsan.com.vn/2023/05/29/20230529153800-9db6_wm.jpg" class="card-img-top " alt="..." />
        </div> */}
            <div class="card-body">
              <h4 class="card-title">Thông tin đơn hàng</h4>
              <hr />
              <div class="row">
              <h6 className="">Mô tả</h6>
                    <div className="monney">
                      {detailWarehouse.description != null
                        ? detailWarehouse.description
                        : "Không có giá trị!"}
                    </div>
              </div>
              <hr />
              <h4 class="card-title">Thông tin đơn hàng</h4>
              <hr />
              <div className="row">
                <div className="box-monney-capacty row">
                  <div className="col-2">
                    <h6 className="">Mức giá</h6>
                    <div className="monney">
                      {detailWarehouse.monney != null
                        ? detailWarehouse.monney
                        : "Không có giá trị!"}
                    </div>
                  </div>
                  <div className="col-2">
                    <h6 className="capacity ">Diện tích : </h6>
                    <div className="capacity ">5.000 m²</div>
                  </div>
                  {/* <div className="col-3">
                    <h6 className="capacity ">Thời gian tạo kho</h6>
                    <div className="capacity ">
                      {formatTime != null
                        ? formatTime(detailWarehouse.createdAt)
                        : "Không có giá trị!"}
                    </div>
                  </div> */}
                </div>
                <hr />
                <div className="row">
                  <h6 className="text">
                    Tên chủ kho:{" "}
                    {detailWarehouse.owner != null
                      ? detailWarehouse.owner.username
                      : "Không có giá trị!"}
                  </h6>
                  <h6 className="text">
                    Email:{" "}
                    {detailWarehouse.owner != null
                      ? detailWarehouse.owner.email
                      : "Không có giá trị!"}
                  </h6>
                  <h6 className="text">
                    Dia chi Chu kho{" "}
                    {detailWarehouse.owner != null
                      ? detailWarehouse.owner.address
                      : "Không có giá trị!"}
                  </h6>
                  <h6 className="text">
                    SDT{" "}
                    {detailWarehouse.owner != null
                      ? detailWarehouse.owner.phone
                      : "Không có giá trị!"}
                  </h6>
                </div>
                <hr />
                <div className="row">
                  <h5 className="">Địa Chỉ</h5>
                  <div className="address">
                    {" "}
                    {detailWarehouse != null
                      ? detailWarehouse.address
                      : "Không có giá trị!"}
                  </div>
                </div>
              </div>
              {/* <div
                onClick={() => {
                  thongBao();
                }}
                className="d-flex justify-content-center"
              >
                <Button type="primary" danger>
                  Hủy Đơn
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InformationWarehouse;
