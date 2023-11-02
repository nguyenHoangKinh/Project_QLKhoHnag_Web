import "../App.css";
//import x from "./db.json";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";

function List() {

  

  // const data = x.Kho;

  // function ReptileListItems() {
  //   return data.map((item) => <li>{JSON.stringify(item)}</li>);
  // }
//   let warehouse = {
//     address: "",
//     capacity: "",
//     description: "",
//     monney: 0,
//     wareHouseName: ""
//   }

// https://warehouse-management-api.vercel.app/v1/warehouse/create?id_owner=${idOnwner}

  const idOnwner  = '6539131d3d09d1cd2b68e1cf';
    
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();
  const idOwner = '6539131d3d09d1cd2b68e1cf';

  useEffect(() => {
    axios.get(BASE_URL+"/warehouse/create?id_owner=" + {idOnwner}).then((res) => {
      setColumns(Object, res.data[0]);
      setRecords(res.data);
      //setRecords(res.data.warehouses);
     //console.log(res.data.idOnwner)
    });
  }, []);

  return (
    <>
      <div className="container mt-5">
        <div className="text-end">
          <Link to="/create" className="btn btn-primary">
            Add +
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              {columns.map((c, i) => (
                <th key={i}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {records.map((d, i) => (
                
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.statusKho}</td>
                {/* <td>{d.wareHouseName}</td>
                <td>{d.category}</td>
                <td>{d.capacity}</td>
                <td>{d.monney}</td>
                <td>{d.status}</td>
                <td>{d.description}</td> */}
                <td>
                  <Link to="update" className="btn btn-sm btn-succes">
                    Update
                  </Link>
                  <button
                    onClick={(e) => handleSubmit(d.id)}
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

      {/* <div className="App">
        <header className="App-header">{ReptileListItems()}</header>
      </div> */}
    </>
  );
  function handleSubmit(id) {
    const conf = window.confirm("Ban co chac la xoa khong?");
    if (conf) {
      axios
        .delete("https://651cbef435bd4107e373147b.mockapi.io/Kho/" + id)
        .then((res) => {
          alert("xoa thanh cong");
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  }
}

export default List;





