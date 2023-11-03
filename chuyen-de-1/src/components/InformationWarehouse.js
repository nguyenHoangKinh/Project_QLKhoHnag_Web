import React, { useState } from "react";
import axios from "axios";
const InformationWarehouse = () => {

  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="row">
        {/* <div className="image"> */}
          {/* <img src="https://file4.batdongsan.com.vn/2023/10/18/20231018161138-1a75_wm.jpg" className="img-fluid" alt="..."/> */}
        {/* </div> */}
          <h1 className="wareHouseName">
            Bán nhà xưởng và kho lạnh 100% vốn nước ngoài
          </h1>
          <hr />
          <div className="box-monney-capacty row">
          <div className="col-1">
            <h6 className="">Mức giá</h6>
            <div className="monney">Thỏa thuận</div>
          </div>
          <div className="col-1">
          <h6 className="capacity ">Diện tích</h6>
          <div className="capacity ">5.000 m²</div>
          </div>
          </div>
          <hr />
          <div className="row">
          <h6 className="text">Thông tin mô tả</h6>
          <p className="description">+ Công ty TNHH Thực Phẩm & kho lạnh P. K Vietfood 100% vốn nước ngoài, cty đang hoạt động bình thường.
+ Giá bán thỏa thuận theo giá trị thẩm định tại thời điểm hiện tại.
+ Được phép kinh doanh sản xuất chế biến các ngành nghề về thực phẩm.
+ Vị trí: Nằm trong KCN Long Hậu, Cần Giuộc, long An.
+ Diện tích đất: 5000 m² (41.15 x 121.5), đầy đủ các hạng mục, công năng hoàn chỉnh để phục vụ sản xuất, kho lạnh.</p>
          </div>
          <div className="row">
          <h5 className="">Địa Chỉ</h5>
          <div className="address"> thành phố Hồ Chí Minh</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformationWarehouse;
