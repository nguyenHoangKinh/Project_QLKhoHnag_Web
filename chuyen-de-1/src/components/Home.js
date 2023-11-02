import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteWare } from "../WareReducer";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function Home() {
  //const wares = useSelector((state) => state.wares);
  //const [records, setWares] = useState([]);
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  // console.log(wares);
  const dispatch = useDispatch();

  // contructor(props){
  //   super(props);
  //   this.state = {
  //     warehouses : []

  //   };
  // }

  // componentDidMount(){
  //   axios.get("https://warehouse-management-api.vercel.app/v1/warehouse/list?id_owner=6539131d3d09d1cd2b68e1cf",
  //   {headers: {
  //     'Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzkxMzFkM2QwOWQxY2QyYjY4ZTFjZiIsImlzT3duZXIiOnRydWUsImlhdCI6MTY5ODg4ODIxMCwiZXhwIjoxNjk4ODk1NDEwfQ.hacIHg_2J8pj2RmNa1Pqhc_osin5TmTtXJCDRIjlMJY',
  //   }}).then((res) => {
  //      setWares(Object, res.data)
  //     console.log(res)
  //   });
  // }
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        "https://warehouse-management-api.vercel.app/v1/warehouse/list?id_owner=6539131d3d09d1cd2b68e1cf",
        {
          headers: {
            Token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzkxMzFkM2QwOWQxY2QyYjY4ZTFjZiIsImlzT3duZXIiOnRydWUsImlhdCI6MTY5ODkwNjY3NiwiZXhwIjoxNjk4OTEzODc2fQ.vT8V__xNAtB_iZ7j0iNiH4VUBJpmPZURJPGUXXKjIEE",
          },
        }
      )
      .then((res) => {
        setColumns(Object, res.data)
        setRecords(res.data.warehouses);
        console.log(res);
      });
  }, []);

  function handleSubmit(id) {
    const conf = window.confirm("Ban co chac la xoa khong?");
    if (conf) {
      axios
        .delete("https://warehouse-management-api.vercel.app/v1/warehouse/deleteWarehouse/" + id, 
        {
          headers: {
            Token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzkxMzFkM2QwOWQxY2QyYjY4ZTFjZiIsImlzT3duZXIiOnRydWUsImlhdCI6MTY5ODkwNjY3NiwiZXhwIjoxNjk4OTEzODc2fQ.vT8V__xNAtB_iZ7j0iNiH4VUBJpmPZURJPGUXXKjIEE",
          },
        })
        .then((res) => {
          alert("xoa thanh cong");
          // navigate("/");
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  }

  // const handleDelete = (id) => {
  //   dispatch(deleteWare({ id: id }));
  // };
  return (
    <div className="container">
      <Link to="/create" className="btn btn-success my-3">
        Create +
      </Link>
      <div className="d-flex flex-column justify-content-center- align-items-center bg-light vh-200">
        <h1>List of WareHouse</h1>
        <div className="w-200 rounded bg-white border shadow p-7">
          <table className="table">
            <thead>         
              <tr>
                {/* <th>ID</th> */}
                <th>Ten</th>
                <th>Dia chi</th>
                <th>Danh muc</th>
                <th>Dung tich</th>
                <th>Gia</th>
                <th>Trang thai </th>
                <th>Mo ta</th>
              </tr>
            </thead>
            <tbody>
              {records.map((d, i) => (
                <tr key={i}>  
                   {/* <td>{d._id}</td>           */}
                  <td>{d.wareHouseName}</td>
                  <td>{d.address}</td>
                  <td>{d.category}</td>
                  <td>{d.capacity}</td>
                  <td>{d.monney}</td>
                  <td>{d.status}</td>
                  <td>{d.description}</td>
                  <td>
                    <Link to="update" className="btn btn-sm btn-succes">
                      Update
                    </Link>
                    <button
                      onClick={(e) => handleSubmit(d._id)}
                      className="btn btn-sm ms-4 btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
