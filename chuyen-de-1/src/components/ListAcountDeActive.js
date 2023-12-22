import React, { useState, useEffect } from "react";
import "../theme/ListWarehouseUser.css";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ListAcountDeActive() {
  let Token = localStorage.getItem("jsonwebtoken");
  //console.log(Token);
  let idUser = jwtDecode(Token);
  const [ListAcount, setListAcount] = useState();
  const [allIds, setAllIds] = useState([]);
  console.log(allIds);

  const handleChange = (id) => {
    setAllIds((prevIds) => {
      if (prevIds.includes(id)) {
        // Nếu id đã tồn tại trong mảng, loại bỏ nó
        return prevIds.filter((prevId) => prevId !== id);
      } else {
        // Nếu id chưa tồn tại trong mảng, thêm nó vào
        return [...prevIds, id];
      }
    });
  };

  function submitNAcount() {
    //console.log(id, Token);
    axios
      .put(
        `https://warehouse-management-api.vercel.app/v1/admin/activate-multiple-accounts`,
        {},
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
          params:{
            id: allIds,
          }
        }
      )
      .then((res) => {
        alert("Active nhieu tai khoan thanh cong");
         setListAcount((prevList) => {
          setAllIds([]);
          window.location.reload();
          return prevList;
        });
      })
      .catch((error) => console.log(error.message));
  }

  function handleSubmit(id) {
    console.log(id, Token);
    axios
      .put(
        `https://warehouse-management-api.vercel.app/v1/admin/activate-account?id=${id}`,
         {},
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      )
      .then((res) => {
        alert("Active Tai Khoan thanh cong");
        window.location.href = "/ListAcountDeActive";
        console.log(res);
        // console.log(id);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    //call api
    axios
      .get(
        "https://warehouse-management-api.vercel.app/v1/admin/list-account-not-active",
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
     <Link to="/HomeAdminScreen" className="btn btn-success my-3">
          ListAcountActive
        </Link>{" "}
      <h2>ListAcountDeActive</h2>
      <button onClick={submitNAcount} className="btn btn-danger my-3">
          ActiveMultil
        </button>
      <div className="listwarehouseuser">
        <table className="styled-table"
        style={{ width: "100%" }}>
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
                    <input type="checkbox" value={allIds} onChange={()=> {handleChange(item._id)}} />
                    <button
                      onClick={(e) => handleSubmit(item._id)}
                      className="btn btn-sm ms-4 btn-access bg-primary"
                    >
                      Active
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
