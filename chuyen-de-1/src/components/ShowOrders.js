import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Logout } from "../services/UserServices";
import { BASE_URL } from "../config";
const ShowOrders = () => {
//     let Token = localStorage.getItem("jsonwebtoken");
//   const [columns, setColumns] = useState([]);
//   const [records, setRecords] = useState([]);

  
//   //ham logout
//   const LogoutToken = () => {
//     Logout(Token);
//   };

//   useEffect(() => {
//     axios
//       .get(
//         BASE_URL+`/warehouse/list?id_owner=${records._id}`,
//         {
//           headers: {
//             Token:
//             Token
//           },
//         }
//       )
//       .then((res) => {
//         setColumns(Object, res.data);
//         setRecords(res.data.warehouses);
//         console.log(res);
//       });
//   }, []);

//   function handleSubmit(id) {
//     const conf = window.confirm("Ban co chac la xoa khong?");
//     if (conf) {
//       axios
//         .delete(
//           BASE_URL+"/warehouse/deleteWarehouse/" +
//             id,
//           {
//             headers: {
//               Token:
//               Token
//             },
//           }
//         )
//         .then((res) => {
//           alert("xoa thanh cong");
//           console.log(res);
//         })
//         .catch((err) => console.log(err));
//     }
//   }

    return (<>
 <div className="container">
      <Link to="/create" className="btn btn-success my-3">
        Create +
      </Link>
      <button 
    //   onClick={LogoutToken}
       className="btn btn-danger my-3">
        Logout 
      </button>
      <div className="d-flex flex-column justify-content-center- align-items-center bg-light vh-200">
        <h1>List of Oders is Active </h1>
        <div className="w-200 rounded bg-white border shadow p-7">
          <table className="table w-200">
            <thead>
              <tr>
                {/* <th>ID</th> */}
                <th>ChuKho</th>
                <th>Kho</th>
                <th>Nguoi thue</th>
                <th>Dung tich</th>
                <th>Thoi Thang thue</th>
                <th>Trang thai </th>
                <th>Mo ta</th>
              </tr>
            </thead>
            <tbody className="rounded  border border-primary mt-5">
              {/* {records.map((d, i) => ( */}
                <tr  className=" bg-info     ">
                  {/* <td>{d._id}</td>           */}
                  <td>wareHouseName</td>
                  <td>address</td>
                  <td>category</td>
                  <td>capacity</td>
                  <td>monney</td>
                  <td>status</td>
                  <td>description</td>
                  <td>
                    <button
                    //   onClick={(e) => handleSubmit(d._id)}
                      className="btn btn-sm ms-4 btn-danger " >
                      Delete
                    </button>
                  </td>
                </tr>
              {/* ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>)
}

export default ShowOrders;