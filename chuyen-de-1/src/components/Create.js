import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { values } from "lodash";

function Create() {
  const token = localStorage.getItem("jsonwebtoken");
  const idUser = jwtDecode(token);
  console.log(token);
  //console.log(idUser);
  
  const [categories, setCategories] = useState([]);
  const [wareHouseName, setWareHouseName] = useState();
  const [address, setAddress] = useState();
  const [idCategorie, setIdCategorie] = useState();
  const [capacity, setCapacity] = useState();
  const [monney, setMonney] = useState();
  const [status, setStatus] = useState();
  const [description, setDescription] = useState();
  const [imageWarehouse, setImageWarehouse] = useState();
  const [fileStatus, setFileStatus] = useState(false);
  const [checkAdd, setCheckAdd] = useState(false);
  //console.log(inputData);

  //const [categories, setCategories] = useState([]);
  //console.log(categories);

  // Hàm kiểm tra
  // const isDataComplete = () => {
  //   const requiredFields = ['wareHouseName', 'address', 'category', 'capacity', 'monney', 'status', 'description', 'imageWarehouse'];
  //   return requiredFields.every(field => inputData[field].trim() !== '');
  // };

  useEffect(() => {
    axios
      .get(
        `https://warehouse-management-api.vercel.app/v1/warehouse/category/list`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        let categorie = res.data.categories;
        setCategories(categorie);
      })
      .catch((e) => {
        console.log(`get categories error ${e}`);
      });
  }, []);
  // function handleFileChange(event) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setInputData({ ...inputData, imageWarehouse: reader.result });
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageWarehouse(reader.result);
      };
      reader.readAsDataURL(file);
    }

  };

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   axios
  //     .post(
  //       'https://warehouse-management-api.vercel.app/v1/warehouse/create',
  //       inputData,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //         params: {
  //           id_owner: idUser,
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //       alert('Thêm thành công');
  //       //navigate('/HomeScreen');
  //     })
  //     .catch((err) => console.log(err));
  // }
  // Hàm handleSubmit đã được cập nhật để bao gồm kiểm tra
  const updateWarehouse = (
    wareHouseName,
    address,
    idCategorie,
    capacity,
    monney,
    status,
    description,
    owner,
    imageWarehouse
  ) => {
    axios
      .post(
        `https://warehouse-management-api.vercel.app/v1/warehouse/create`,
        {
          "wareHouseName": wareHouseName,
          "address": address,
          "category": idCategorie,
          "capacity": capacity,
          "currentCapacity": capacity,
          "monney": monney,
          "status": status,
          "description": description,
          // "owner": owner,
          "imageWarehouse": imageWarehouse,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            id_owner: idUser.id,
          },
        }
      )
      .then((res) => {
        console.log(res);
        // setCheckAdd(true);
      })
      .catch((e) => {
        console.log(`Add error ${e}`);
        // setCheckAdd(false);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <h3 className="mb-4 text-center">Thêm Kho Mới</h3>
            <div className="mb-3">
              <label htmlFor="wareHouseName" className="form-label">
                Tên Kho:
              </label>
              <input
                type="text"
                name="wareHouseName"
                className="form-control"
                value={wareHouseName}
                onChange={(e) => setWareHouseName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Địa chỉ:
              </label>
              <input
                type="text"
                name="address"
                className="form-control"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Danh mục:
              </label>
              <select
                name="category"
                className="form-control"
                value={idCategorie}
                onChange={(e) => setIdCategorie(e.target.value)}
              >
                <option value="">Chọn Danh mục</option>
                {categories &&
                  categories.length > 0 &&
                  categories.map((cat) => (
                    <option value={cat._id}>
                      {cat.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="capacity" className="form-label">
                Dung Tích:
              </label>
              <input
                type="text"
                name="capacity"
                className="form-control"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="monney" className="form-label">
                Tiền:
              </label>
              <input
                type="number"
                name="monney"
                className="form-control"
                value={monney}
                onChange={(e) => setMonney(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="status" className="form-label">
                Trạng Thái:
              </label>
              <input
                type="text"
                name="status"
                className="form-control"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Mô Tả:
              </label>
              <input
                type="text"
                name="description"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="imageWarehouse" className="form-label">
                Upload Ảnh:
              </label>
              <input
                type="file"
                name="imageWarehouse"
                accept="image/*"
                className="form-control-file"
                onChange={handleFileChange}
              />
            </div>
            <button className="btn btn-info" onClick={updateWarehouse(wareHouseName, address, idCategorie, capacity, monney, status, description, idUser.id, imageWarehouse)}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
