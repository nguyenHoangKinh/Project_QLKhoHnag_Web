import React, { useState, useEffect } from "react";
import "../theme/ListWarehouseUser.css";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { BASE_URL } from "../config";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";

import axios from "axios";

export default function ListUserDeActive() {
  let Token = localStorage.getItem("jsonwebtoken");
  //console.log(Token);

  const [ListAcount, setListAcount] = useState();
  const [deActive, setDeActive] = useState([]);


  useEffect(() => {
    //call api
    axios
      .get(
        "https://warehouse-management-api.vercel.app/v1/admin/list-user-not-active",
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      )
      .then((res) => {
        setListAcount(res.data.users);
        //console.log(res.data.accounts);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <>
      <h1>ListUserActive</h1>
      
      <div className="listwarehouseuser">
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
              // ListAcount.length > 0 &&
              ListAcount.map((item, index) => {
                return (
                  <tr>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <button
                      //onClick={DeActiveAcount}
                      className="btn btn-danger"                    
                    >
                      DeActive
                    </button>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
