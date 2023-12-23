import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "../../theme/RentWareHouse.css"; // Tích hợp các quy tắc CSS hiện tại nếu cần
import { BASE_URL } from "../../config";

const RentWareHouse = () => {
  let Token = localStorage.getItem("jsonwebtoken");
  let idUser = jwtDecode(Token);

  console.log(Token);
  const { id } = useParams();

  const [capacity, setCapacity] = useState(0);
  const [rentalTime, setRentalTime] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [message, setMessage] = useState("");

  const [warehouses, setWarehouse] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://warehouse-management-api.vercel.app/v1/warehouse/getAWarehouse`,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
          params: {
            id: id,
          },
        }
      )
      .then((res) => {
        if (
          Array.isArray(res.data.warehouse) &&
          res.data.warehouse.length > 0
        ) {
          setWarehouse(res.data.warehouse);
        } else {
          setWarehouse([res.data.warehouse]);
        }
      })
      .catch((e) => {
        console.log(`get warehouseUser error ${e.response}`);
      });
  }, [id, Token]);

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
          startDate: startDate,
          endDate: endDate,
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
        let capacity = res.data;
        const orderId = res.data.data._id.toString();
        alert("Gửi thành công");
      })
      .catch((e) => {
        console.log(`error ${e.response.data.message}`);
      });
  };

  return (
    <div style={{ margin: "50px", textAlign: "center" }}>
      <h1>DeTail Kho hàng</h1>
      <div>
        {warehouses.map((item, index) => (
          <div key={index} style={{ border: "2px solid #ddd", padding: "10px", marginBottom: "20px", borderRadius: "8px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <img
              style={{ width: 80, height: 56, marginRight: 10 }}
              src={item.imageWarehouse}
              alt="Avatar"
            />
            <div>
              <h2 style={{ fontSize: "1.2em" }}>{item.wareHouseName}</h2>
              <p>Address: {item.address}</p>
              <p>Category: {item.category.name}</p>
              <p>Capacity: {item.capacity}</p>
              <p>Current Capacity: {item.currentCapacity}</p>
              <p>Price: {item.monney}</p>
              <p>Description: {item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: "400px", margin: "0 auto", backgroundColor: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "10px" }}>
            Dung tích (%):
            <select value={capacity} onChange={handleCapacityChange} style={{ width: "100%", padding: "10px", marginBottom: "15px", boxSizing: "border-box" }}>
              <option value={"0%"}>0%</option>
              <option value={"25%"}>25%</option>
              <option value={"50%"}>50%</option>
              <option value={"75%"}>75%</option>
              <option value={"100%"}>100%</option>
            </select>
          </label>
          <label style={{ marginBottom: "10px" }}>
            Tháng và năm bắt đầu:
            <input
              type="month"
              value={startDate}
              onChange={handleStartDateChange}
              style={{ width: "100%", padding: "10px", marginBottom: "15px", boxSizing: "border-box" }}
            />
          </label>
          <label style={{ marginBottom: "10px" }}>
            Tháng và năm kết thúc:
            <input
              type="month"
              onChange={handleEndDateChange}
              style={{ width: "100%", padding: "10px", marginBottom: "15px", boxSizing: "border-box" }}
            />
          </label>
          <button type="submit" style={{ backgroundColor: "#4caf50", color: "white", padding: "12px 20px", border: "none", borderRadius: "4px", cursor: "pointer" }}>Gửi yêu cầu</button>
        </form>
        {message && (
          <div style={{ marginTop: "20px" }}>
            <h3>Thông báo:</h3>
            <p>{message}</p>
          </div>
        )}
        <Link to="javascript:history.go(-1)" style={{ color: "#4caf50", textDecoration: "none", marginTop: "20px" }}>Quay lại</Link>
      </div>
    </div>
  );
};

export default RentWareHouse;