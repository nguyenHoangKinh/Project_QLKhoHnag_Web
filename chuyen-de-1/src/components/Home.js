import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteWare } from "../WareReducer";


function Home() {
  const wares = useSelector((state) => state.wares);
  // console.log(wares);
  const dispatch = useDispatch();
  
  const handleDelete = (id)=>{
         dispatch(deleteWare({id: id}))
  }
  return (
    <div className="container">
      <Link to="/create" className="btn btn-success my-3">
        Create +
      </Link>
      <div className="d-flex flex-column justify-content-center- align-items-center bg-light vh-200">
        <h1>List of WareHouse</h1>
        <div className="w-100 rounded bg-white border shadow p-7">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Ten</th>
                <th>Dia chi</th>
                <th>Dung tich</th>
                <th>Gia</th>
                <th>Trang thai </th>
                <th>Mo ta</th>
              </tr>
            </thead>
            <tbody>
              {wares.map((ware, index) => (
                <tr key={index}>
                  <td>{ware.id}</td>
                  <td>{ware.wareHouseName}</td>
                  <td>{ware.address}</td>
                  <td>{ware.capacity}</td>
                  <td>{ware.monney}</td>
                  <td>{ware.status}</td>
                  <td>{ware.description}</td>
                  <td>
                    <button className="btn btn-sm btn-primary">Edit</button>
                    <button onClick={()=> handleDelete(ware.id)} className="btn btn-sm btn-danger ms-2">
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
