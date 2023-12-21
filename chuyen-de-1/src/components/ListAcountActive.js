import React, { useState, useEffect } from "react";
import "../theme/ListWarehouseUser.css";
import { BASE_URL } from "../config";


import axios from "axios";

export default function ListAcountActive() {
  let Token = localStorage.getItem("jsonwebtoken");
  //console.log(Token);

  const [ListAcount, setListAcount] = useState();
  const [deActive, setDeActive] = useState([]);


  function handleSubmit(id) {  
      axios
        .put(
          BASE_URL+"/admin/deactivate-account" +
            id,
          {
            headers: {
              Authorization: `Token ${Token}` 
            },
            params: {
              id_acount: id
            }
          }
        )
        .then((res) => {
          alert("de active thanh cong");
          window.location.href="/ListAcountActive"
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
 
  

 

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
        console.log(res.data.accounts);
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
                  <tr key={index}>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <button
                      onClick={(e) => handleSubmit(item)}
                      className="btn btn-sm ms-4 btn-access bg-primary"
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
