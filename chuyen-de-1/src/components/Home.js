import {useContext } from "react";
import { Link } from "react-router-dom";
import { deleteWare } from "../WareReducer";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Logout } from "../context/UserContext";
import { BASE_URL } from "../config";
import {UserContext} from '../context/UserContext';
import {jwtDecode}  from "jwt-decode"
import Card from "./Card";


function Home() {
  const {Logout,wListOwner,records,columns} = useContext(UserContext);
  let Token = localStorage.getItem("jsonwebtoken");
  let idUser= jwtDecode(Token)


  console.log(records);
  //ham logout
  const LogoutToken = () => {
    Logout(Token);
  };

  useEffect(() => {
    wListOwner(Token)
  }, []);

  function handleSubmit(id) {
    const conf = window.confirm("Ban co chac la xoa khong?");
    if (conf) {
      axios
        .delete(
          BASE_URL+"/warehouse/deleteWarehouse/" +
            id,
          {
            headers: {
              Authorization: `Token ${Token}` 
            },
            params: {
              id_owner: idUser.id
            }
          }
        )
        .then((res) => {
          alert("xoa thanh cong");
          window.location.href="/HomeScreen"
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    // <div className="container">
    //   <Link to="/create" className="btn btn-success my-3">
    //     Create +
    //   </Link>
    //   <button onClick={LogoutToken} className="btn btn-danger my-3">
    //     Logout 
    //   </button>
    //   <div className="d-flex flex-column justify-content-center- align-items-center bg-light vh-200">
    //     <h1>List of WareHouse</h1>
    //     <div className="w-200 rounded bg-white border shadow p-7">
    //       <table className="table">
    //         <thead>
    //           <tr>
    //             <th>Ten</th>
    //             <th>Dia chi</th>
    //             <th>Danh muc</th>
    //             <th>Dung tich</th>
    //             <th>Gia</th>
    //             <th>Trang thai </th>
    //             <th>Mo ta</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {records.map((d, i) => (
    //             <tr key={i}>        
    //               <td>{d.wareHouseName}</td>
    //               <td>{d.address}</td>
    //               <td>{d.category.name}</td>
    //               <td>{d.capacity}</td>
    //               <td>{d.monney}</td>
    //               <td>{d.status}</td>
    //               <td>{d.description}</td>
    //               <td>
    //                 <button
    //                   onClick={(e) => handleSubmit(d)}
    //                   className="btn btn-sm ms-4 btn-access bg-primary"
    //                 >
    //                   Update
    //                 </button><br/>
  
    //                 <button
    //                   onClick={(e) => handleSubmit(d._id)}
    //                   className="btn btn-sm ms-4 btn-danger " 
    //                 >
    //                   Delete
    //                 </button>
    //               </td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>
    // </div>
    <>
        
        <Card/>
    </>
  );
}

export default Home;
