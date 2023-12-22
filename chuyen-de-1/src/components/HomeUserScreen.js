import React, { useState, useEffect } from "react";
import "../theme/ListWarehouseUser.css";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { BASE_URL } from "../config";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";

import axios from "axios";
import Header from "./HomeHeader";
import Navbar from "./HomeNavbar";
import BlogPostsSection2 from "./BlogPostSection2";
import Footer from "./HomeFooter";

export default function HomeUserScreen() {
  let Token = localStorage.getItem("jsonwebtoken");
  //console.log(Token);

  const [list, setList] = useState([]);

  useEffect(() => {
    //call api
    axios
      .get(
        "https://warehouse-management-api.vercel.app/v1/warehouse/listWarehouseUser",
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      )
      .then((res) => {
        setList(res.data.warehouse);
        console.log(res.data.warehouse);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <>
      <>
      <Header/>
      <Navbar/>
      <BlogPostsSection2/>
        {/* <div className="tabar">
          <h1>ListWarehouseUser</h1>
          <Link to="/ListAcountDeActive" className="btn btn-success my-3">
            .......
          </Link>{" "}
        </div>
        <div className="listwarehouseuser">
          <table
            className="styled-table"
            style={{ marginTop: 1200, width: "100%" }}
          >
            <thead>
              <tr>
                <th></th>
                <th>Tên Kho</th>
                <th>Địa Chỉ</th>
                <th>Loại Kho</th>
                <th>Dung Tích</th>
                <th>Dung Tích Còn Lại</th>
                <th>Giá Tiền</th>
              </tr>
            </thead>
            <tbody>
              {list &&
                list.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img
                          style={{ width: 100, height: 70 }}
                          src={item.imageWarehouse}
                          alt="Avatar"
                        />
                      </td>
                      <td>
                        <Link to={`/DetailWareUser/${item._id}`}>
                          {item.wareHouseName}
                        </Link>
                      </td>
                      <td>{item.address}</td>
                      <td>{item.category.name}</td>
                      <td>{item.capacity}</td>
                      <td>{item.currentCapacity}</td>
                      <td>{item.monney}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div> */}
        <Footer/>
      </>
    </>
  );
}
