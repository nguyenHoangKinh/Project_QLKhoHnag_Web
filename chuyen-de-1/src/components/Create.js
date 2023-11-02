import React, { useState } from "react";
import { addWare } from "../WareReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Create() {
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
  });
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(
        "https://warehouse-management-api.vercel.app/v1/warehouse/create?id_owner=6539131d3d09d1cd2b68e1cf",
        {
          headers: {
            Token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzkxMzFkM2QwOWQxY2QyYjY4ZTFjZiIsImlzT3duZXIiOnRydWUsImlhdCI6MTY5ODkwNDg0MSwiZXhwIjoxNjk4OTEyMDQxfQ.RdulZgLJrQwVzrnE9N97fgDf5eGVIacZLnWxFSft1tY",
          },
        },
        inputData
      )
      .then((res) => {
        console.log(res);
        alert("Them thanh cong");
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Them Kho Moi</h3>

        {/* <form  onSubmit={handleSubmit}> 
        
          <div>
            <label htmlFor="wareHouseName">Ten:</label>
            <input
              type="text"
              name="wareHouseName"
              className="form-control"
              placeholder="enter name"
              onChange={e => setName( e.target.value )
              }
            />
          </div>
          <div>
            <label htmlFor="address">Dia chi:</label>
            <input
              type="text"
              name="address"
              className="form-control"
              placeholder="enter address"
              onChange={e => setAddress( e.target.value )
              }             
            />
          </div>
          <div>
          <label htmlFor="capacity">Dung tich:</label>
            <input
              type="text"
              name="capacity"
              className="form-control"
              placeholder="enter capacity"
              onChange={e => setCapacity( e.target.value )
              }
            />
          </div>
          <div>
          <label htmlFor="monney">Gia:</label>
            <input
              type="text"
              name="monney"
              className="form-control"
              placeholder="enter monney"
              onChange={e => setMonney( e.target.value )
              }
            />
          </div>
          <div>
          <label htmlFor="status">Trang Thai:</label>
            <input
              type="text"
              name="status"
              className="form-control"
              placeholder="enter status"
              onChange={e => setStatus( e.target.value )
              }
             
            />
          </div>
          <div>
            <label htmlFor="ndescription">Mo ta:</label>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="enter description"
              onChange={e => setDescription( e.target.value )
              }
             
            />
          </div><br />
          <button className="btn btn-info">
            Submit
          </button>
        </form> */}

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

export default Create;
