import React, { useState, useEffect } from "react";
import "../theme/ListWarehouseUser.css";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { BASE_URL } from "../config";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";

import axios from "axios";

export default function ListOwnerDeActive() {
  let Token = localStorage.getItem("jsonwebtoken");
  console.log(Token);

  const [ListAcount, setListAcount] = useState();
  //const [deActive, setDeActive] = useState([]);

  useEffect(() => {
    //call api
    axios
      .get(
        "https://warehouse-management-api.vercel.app/v1/admin/list-owner-not-active",
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      )
      .then((res) => {
        setListAcount(res.data.owners);
        console.log(res.data.owners);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <>
      <h1>ListOwnerActive</h1>

      <div
        className="listwarehouseuser"
        style={{ marginTop: 10, width: "100%" }}
      >
        <table className="styled-table">
          <thead>
            <tr>
              <th>userName</th>
              <th>email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {ListAcount &&
              ListAcount.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
