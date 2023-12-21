import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

function Create() {
  const Token = localStorage.getItem('jsonwebtoken');
  const idUser = jwtDecode(Token);

  const [inputData, setInputData] = useState({
    wareHouseName: '',
    address: '',
    category: '',
    capacity: '',
    monney: '',
    status: '',
    description: '',
    owner: idUser.id,
    imageWarehouse: '',
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get('https://warehouse-management-api.vercel.app/v1/warehouse/category/list', {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((res) => {
        const categoriesData = res.data.categories;
        setCategories(categoriesData);
      })
      .catch((error) => {
        console.error(`Error fetching categories: ${error}`);
      });
  }, []);

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setInputData({ ...inputData, imageWarehouse: reader.result });
      };
      reader.readAsDataURL(file);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(
        'https://warehouse-management-api.vercel.app/v1/warehouse/create',
        inputData,
        {
          headers: {
            Authorization: `Token ${Token}`,
          },
          params: {
            id_owner: idUser.id,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        alert('Thêm thành công');
        //navigate('/HomeScreen');
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <h3 className="mb-4 text-center">Thêm Kho Mới</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="wareHouseName" className="form-label">
                  Tên Kho:
                </label>
                <input
                  type="text"
                  name="wareHouseName"
                  className="form-control"
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      wareHouseName: e.target.value,
                    })
                  }
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
                  onChange={(e) =>
                    setInputData({ ...inputData, address: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Danh mục:
                </label>
                <select
                  name="category"
                  className="form-control"
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      category: e.target.value,
                    })
                  }
                >
                  <option value="">Chọn Danh mục</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
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
                  onChange={(e) =>
                    setInputData({ ...inputData, capacity: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="monney" className="form-label">
                  Tiền:
                </label>
                <input
                  type="text"
                  name="monney"
                  className="form-control"
                  onChange={(e) =>
                    setInputData({ ...inputData, monney: e.target.value })
                  }
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
                  onChange={(e) =>
                    setInputData({ ...inputData, status: e.target.value })
                  }
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
                  onChange={(e) =>
                    setInputData({ ...inputData, description: e.target.value })
                  }
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
              <button className="btn btn-info">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
