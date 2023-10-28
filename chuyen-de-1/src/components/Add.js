import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const [inputData, setInputData] = useState({ wareHouseName: "",
   category: "", capacity: "", monney: "", status: "", description: ""
   });
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("https://warehouse-management-api.vercel.app/v1/warehouse/addWarehouse", inputData)
      .then((res) => {
        alert("Them thanh cong");
        navigate("/");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-light p-5">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="wareHouseName">Name:</label>
            <input
              type="text"
              name="wareHouseName"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, wareHouseName: e.target.value })
              }
            />
          </div>
          {/* <div>
            <label htmlFor="category">Danh muc</label>
            <input
              type="category"
              name="category"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, category: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="capacity">Capacity</label>
            <input
              type="capacity"
              name="capacity"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, capacity: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor=" monney">Tien</label>
            <input
              type="monney"
              name=" monney"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData,  monney: e.target.value })
              }
            />
          </div> */}
          <br />
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
}
export default Add;
