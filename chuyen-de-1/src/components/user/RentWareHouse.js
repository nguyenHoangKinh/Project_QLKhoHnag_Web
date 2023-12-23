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
    <div className="rent-warehouse-container">
      <h1 className="warehouse-detail-heading">DeTail Kho hàng</h1>
      <div className="warehouse-details">
        {warehouses.map((item, index) => (
          <div
            key={index}
            className="warehouse-item"
          >
            <img
              className="warehouse-image"
              src={item.imageWarehouse}
              alt="Avatar"
            />
            <div className="warehouse-info">
              <h2 className="warehouse-name">{item.wareHouseName}</h2>
              <p className="warehouse-text">Address: {item.address}</p>
              <p className="warehouse-text">Category: {item.category.name}</p>
              <p className="warehouse-text">Capacity: {item.capacity}</p>
              <p className="warehouse-text">
                Current Capacity: {item.currentCapacity}
              </p>
              <p className="warehouse-text">Price: {item.monney}</p>
              <p className="warehouse-text">Description: {item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit} className="rent-form">
          <label className="form-label">
            Dung tích (%):
            <select
              value={capacity}
              onChange={handleCapacityChange}
              className="form-select"
            >
              <option value={"0%"}>0%</option>
              <option value={"25%"}>25%</option>
              <option value={"50%"}>50%</option>
              <option value={"75%"}>75%</option>
              <option value={"100%"}>100%</option>
            </select>
          </label>
          <label className="form-label">
            Tháng và năm bắt đầu:
            <input
              type="month"
              value={startDate}
              onChange={handleStartDateChange}
              className="form-input"
            />
          </label>
          <label className="form-label">
            Tháng và năm kết thúc:
            <input
              type="month"
              onChange={handleEndDateChange}
              className="form-input"
            />
          </label>
          <button type="submit" className="form-button">
            Gửi yêu cầu
          </button>
        </form>
        {message && (
          <div className="message-container">
            <h3 className="message-heading">Thông báo:</h3>
            <p className="message-text">{message}</p>
          </div>
        )}
        <Link to="javascript:history.go(-1)" className="back-link">
          Quay lại
        </Link>
      </div>
    </div>
  );
};

export default RentWareHouse;