import React, { useState, useEffect } from "react";
import "../theme/ListWarehouseUser.css";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { BASE_URL } from "../config";
import { jwtDecode } from "jwt-decode";

import axios from "axios";

export default function ListAcountActive() {
  let Token = localStorage.getItem("jsonwebtoken");
  //console.log(Token);

  const [ListAcount, setListAcount] = useState();
  const [deActive, setDeActive] = useState([]);

  
  const DeActiveAcount = () => {
    //let idAcount = jwtDecode(Token);
    axios
      .put(`https://warehouse-management-api.vercel.app/v1/admin/deactivate-account?id=6545f49ea87cbe45b9dbd8b2`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((res) => {
        // if (res && res.data) {
        //   setDeActive(res.data);
        //   console.log(res.data);
        // }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  useEffect(() => {
    //call api
    axios
      .put(
        "https://warehouse-management-api.vercel.app/v1/admin/list-account-active",
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      )
      .then((res) => {
        setListAcount(res.data.accounts);
        console.log(res);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  useEffect(() => {
    //call api
    axios
      .get(
        "https://warehouse-management-api.vercel.app/v1/admin/list-account-active",
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      )
      .then((res) => {
        setListAcount(res.data.accounts);
        //console.log(res.data.accounts);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <>
      <h1>ListAcountActive</h1>
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
                      onClick={DeActiveAcount}
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
