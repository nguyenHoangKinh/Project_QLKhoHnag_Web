import React, { useState } from "react";
import { addWare } from "../WareReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";




function Create() {

  const [wareHouseName, setName] = useState('');
  const [address, setAddress] = useState('');
  const [capacity, setCapacity] = useState('');
  const [monney, setMonney] = useState('');
  const [status, setStatus] = useState('');
  const [description, setDescription] = useState('');

  const wares = useSelector((state) => state.wares);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = (event) =>{
    event.preventDefault();
    dispatch(addWare({id:wares[wares.length - 1].id + 1 , wareHouseName, address,
    capacity, monney, status, description}))
    navigate('/')
  }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Them Kho Moi</h3>
        <form  onSubmit={handleSubmit}> 
        
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
        </form>
      </div>
    </div>
  );
}

export default Create;
