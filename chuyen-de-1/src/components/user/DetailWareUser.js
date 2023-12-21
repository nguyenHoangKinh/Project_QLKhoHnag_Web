import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import "../../theme/RentWareHouse.css";

const DetailWareUser = () => {
  let Token = localStorage.getItem("jsonwebtoken");
  let idUser = jwtDecode(Token);

  console.log(Token);
  const { id } = useParams();

  const [capacity, setCapacity] = useState(0);
  const [rentalTime, setRentalTime] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [message, setMessage] = useState("");

  const handleCapacityChange = (event) => {
    setCapacity(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
    const daysToRent = Math.ceil(
      (new Date(event.target.value + "-01") - new Date(startDate + "-01")) /
        (1000 * 60 * 60 * 24)
    );
    setRentalTime(daysToRent);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .post(
        `https://warehouse-management-api.vercel.app/v1/order/create`,
        {
          capacity: capacity,
          rentalTime: rentalTime,
          startDate: startDate, // Truyền giá trị ngày bắt đầu là tháng và năm
          endDate: endDate, // Truyền giá trị ngày kết thúc là tháng và năm
        },
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
          params: {
            id_warehouse: id,
          },
        }
      )
      .then((res) => {
        //console.log(res.data.data);  // In ra dữ liệu trả về từ API để kiểm tra cấu trúc
        let capacity = res.data;
        // console.log(userInfo.accessToken);
        const orderId = res.data.data._id.toString(); // Chuyển đổi thành chuỗi nếu cần
        // // Sử dụng orderId mà không gặp lỗi
        alert("gui thanh cong");
      })
      .catch((e) => {
        console.log(`error ${e.response.data.message}`);
      });
    // try {
    //   // Gửi yêu cầu đến API khi có đủ thông tin
    //   if (capacity && rentalTime > 0) {
    //     const response = await axios.post(
    //       "https://warehouse-management-api.vercel.app/v1/order/create",
    //       {
    //         capacity: capacity,
    //         rentalTime: rentalTime,
    //       },
    //       {
    //         headers: {
    //           Authorization: `Bearer ${Token}`,
    //         },
    //         params: {
    //           id_warehouse: id,
    //         },
    //     }

    //     //   {
    //     //     id_warehouse: id,
    //     //     capacity: capacity,
    //     //     rentalTime: rentalTime,
    //     //   }
    //     );

    //     // Cập nhật state với thông báo từ API
    //     setMessage(`Yêu cầu thành công! Ngày kết thúc: ${response.data.endDate}`);
    //   } else {
    //     setMessage("Vui lòng nhập đủ thông tin và chọn ngày hợp lệ.");
    //   }
    // } catch (error) {
    //   setMessage(`Đã xảy ra lỗi: ${error.message}`);
    // }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <label>
          Dung tích (%):
          <select value={capacity} onChange={handleCapacityChange}>
            <option value={"0%"}>0%</option>
            <option value={"25%"}>25%</option>
            <option value={"50%"}>50%</option>
            <option value={"75%"}>75%</option>
            <option value={"100%"}>100%</option>
          </select>
        </label>
        <br />
        <label>
          Tháng và năm bắt đầu:
          <input
            type="month"
            value={startDate}
            onChange={handleStartDateChange}
            className="date-input"
          />
        </label>
        <br />
        <label>
          Tháng và năm kết thúc:
          <input type="month" onChange={handleEndDateChange} className="date-input"/>
        </label>
        <br />
        <button type="submit">Gửi yêu cầu</button>
      </form>
      {/* Hiển thị thông báo nếu có */}
      {message && (
        <div className="message-container">
          <h3>Thông báo:</h3>
          <p>{message}</p>
        </div>
      )}
      <Link to="javascript:history.go(-1)" className="back-link">Quay lại</Link>
    </div>
  );
};

export default DetailWareUser;
