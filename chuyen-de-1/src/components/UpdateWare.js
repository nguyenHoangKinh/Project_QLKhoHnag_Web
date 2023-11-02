import React, { useState } from "react";
import { addWare } from "../WareReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateWare() {
  // const [wareHouseName, setName] = useState('');
  // const [address, setAddress] = useState('');
  // const [capacity, setCapacity] = useState('');
  // const [monney, setMonney] = useState('');
  // const [status, setStatus] = useState('');
  // const [description, setDescription] = useState('');

  // const wares = useSelector((state) => state.wares);
  // const dispatch = useDispatch();
  // const navigate = useNavigate()

  // const handleSubmit = (event) =>{
  //   event.preventDefault();
  //   dispatch(addWare({id:wares[wares.length - 1].id + 1 , wareHouseName, address,
  //   capacity, monney, status, description}))
  //   navigate('/')

  const [inputData, setInputData] = useState({
    wareHouseName: "",
    address: "",
    category: "",
    capacity: "",
    monney: "",
    status: "",
    description: "",
    owner: ""
  });
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    let product = {
      wareHouseName: inputData.wareHouseName,
      address: inputData.address,
      category: inputData.category,
      capacity: inputData.capacity,
      monney: inputData.monney,
      status: inputData.status,
      description: inputData.description,
      owner: "6539131d3d09d1cd2b68e1cf"
  }
  console.log(product)
    axios
      .post(
        "https://warehouse-management-api.vercel.app/v1/warehouse/create?id_owner=6539131d3d09d1cd2b68e1cf",
        product,
        {
          headers: {
            token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzkxMzFkM2QwOWQxY2QyYjY4ZTFjZiIsImlzT3duZXIiOnRydWUsImlhdCI6MTY5ODkwNjY3NiwiZXhwIjoxNjk4OTEzODc2fQ.vT8V__xNAtB_iZ7j0iNiH4VUBJpmPZURJPGUXXKjIEE",
          },
        }
      )
      .then((res) => {
        //setInputData(Object, res.data)
        console.log(res);
        alert("Sua thanh cong");
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-100 border bg-secondary text-white p-5">
        <h3>Them Kho Moi</h3>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="wareHouseName">Ten:</label>
            <input
              type="text"
              name="wareHouseName"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, wareHouseName : e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="address">Dia chi:</label>
            <input
              type="text"
              name="address"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, address: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="category">Danh muc</label>
            <input
              type="text"
              name="category"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, category: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="capacity">Dung Tich</label>
            <input
              type="text"
              name="capacity"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, capacity: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="monney">Tien</label>
            <input
              type="text"
              name="monney"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, monney: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="status">Trang Thai</label>
            <input
              type="text"
              name="status"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, status: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="description">Mo ta</label>
            <input
              type="text"
              name="description"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, description: e.target.value })
              }
            />
          </div>
          
          <br />
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateWare;
