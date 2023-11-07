import { useState,useEffect } from "react";
import { BASE_URL } from "../config";
import axios from "axios";
const InformationWarehouse = () => {
    // let Token = localStorage.getItem("jsonwebtoken");
    // // const [columns, setColumns] = useState([]);
    // const [records, setRecords] = useState([]);
  
    // useEffect(() => {
    //   axios
    //     .get(
    //       BASE_URL+`/warehouse/list?id_owner=${records._id}`,
    //       {
    //         headers: {
    //           Token:
    //           Token
    //         },
    //       }
    //     )
    //     .then((res) => {
    //     //   setColumns(Object, res.data);
    //       setRecords(res.data.warehouses);
    //       console.log(res);
    //     });
    // }, []);
  return (


<div className="container d-flex justify-content-center " >
      <div class="card" style={{width: "46rem", height:"30rem"}}>
      {/* <div className="w-200 h-50">
        <img src="https://file4.batdongsan.com.vn/2023/05/29/20230529153800-9db6_wm.jpg" class="card-img-top " alt="..." />
        </div> */}
        <div class="card-body">
          <h4 class="card-title">Cho thuê kho xưởng tại KCN Bàu Xéo, Trảng Bom, Đồng Nai (Diện tích 5000 - 16800 m2) - JSC Việt Nam</h4>
          <hr />
          <div className="row">
          <div className="box-monney-capacty row">
          <div className="col-2">
            <h6 className="">Mức giá</h6>
            <div className="monney">Thỏa thuận</div>
          </div>
          <div className="col-2">
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
          <hr />
          <div className="row">
          <h5 className="">Địa Chỉ</h5>
          <div className="address"> thành phố Hồ Chí Minh </div>
          </div>
          </div>
          {/* <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p> */}
          {/* <a href="#" class="btn btn-primary stretched-link">
            Go somewhere
          </a> */}
        </div>
      </div>
    </div>




  );
};

export default InformationWarehouse;
