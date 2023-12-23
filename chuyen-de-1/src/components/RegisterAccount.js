import React, { useState } from "react";
import "../theme/RegisterAccount.css";
import axios from "axios";
import { BASE_URL } from "../config";
import Navbar from './HomeNavbar';
import Footer from './HomeFooter';

const initFormValue = {
  username: "",
  address: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

const isEmptyValue = (value) => {
  return !value || value.trim().length < 1;
};

export default function RegisterPage() {
  const [formValue, setFormValue] = useState(initFormValue);
  const [formError, setFormError] = useState({});
  const [check, setCheck] = useState("");

  const validateForm = () => {
    const error = {};

    if (isEmptyValue(formValue.username)) {
      error["username"] = "Username is required";
    }

    if (isEmptyValue(formValue.address)) {
      error["address"] = "Address is required";
    }

    if (isEmptyValue(formValue.email)) {
      error["email"] = "Email is required";
    }

    if (isEmptyValue(formValue.phone)) {
      error["phone"] = "Phone is required";
    }

    if (isEmptyValue(formValue.password)) {
      error["password"] = "Password is required";
    }

    if (isEmptyValue(formValue.confirmPassword)) {
      error["confirmPassword"] = "Confirm Password is required";
    } else if (formValue.confirmPassword !== formValue.password) {
      error["confirmPassword"] = "Confirm Password not match";
    }
    setFormError(error);

    return Object.keys(error).length === 0;
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm() && check) {
      console.log("form value", formValue);
      let acc = {
        username: formValue.username,
        password: formValue.password,
        confirmPassword: formValue.confirmPassword,
        address: formValue.address,
        phone: formValue.phone,
        email: formValue.email,
      };

      axios.post(BASE_URL + "/auth/register?status=" + check,
        acc
      ).then((respone) => {
        console.log(respone);
        alert("Đăng ký thành công");
        window.location.href = "login";
      }).catch((err) => {
        console.log(err.request.response);
        alert(err.request.response.slice(12).replace('"}', ""));
      });
    } else {
      alert("Yêu cầu chọn chủ kho hoặc khách hàng");;
    }
  };

  function checkValue(e) {
    var value = e.target.value;
    console.log("You selected " + value);
    setCheck(value)
  }

  return (
    <>
      <Navbar />
      <section class="ftco-section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="wrap d-md-flex">
                <div class="text-wrap p-4 p-lg-5 d-flex img d-flex align-items-end">
                </div>
                <div class="login-wrap p-4 p-md-5">
                  <h3 class="mb-3">Tạo tài khoản</h3>
                  <form onSubmit={handleSubmit} class="signup-form">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group d-flex align-items-center">
                          <label class="label" for="name">Username</label>
                          <input
                            type="text"
                            class="form-control"
                            id="username"
                            name="username"
                            value={formValue.username}
                            onChange={handleChange} />
                        </div>
                        {formError.confirmPassword && (
                          <div className="error-feedback" style={{ marginTop: -25, marginBottom: 15, marginLeft: 110 }}>{formError.username}</div>
                        )}
                      </div>
                      <div class="col-md-12">
                        <div class="form-group d-flex align-items-center">
                          <label class="label" for="address">Address</label>
                          <input
                            type="text"
                            class="form-control"
                            id="address"
                            name="address"
                            value={formValue.address}
                            onChange={handleChange} />
                        </div>
                        {formError.confirmPassword && (
                          <div className="error-feedback" style={{ marginTop: -25, marginBottom: 15, marginLeft: 110 }}>{formError.address}</div>
                        )}
                      </div>
                      <div class="col-md-12">
                        <div class="form-group d-flex align-items-center">
                          <label class="label" for="email">Email</label>
                          <input
                            type="text"
                            class="form-control"
                            id="email"
                            name="email"
                            value={formValue.email}
                            onChange={handleChange} />
                        </div>
                        {formError.confirmPassword && (
                          <div className="error-feedback" style={{ marginTop: -25, marginBottom: 15, marginLeft: 110 }}>{formError.email}</div>
                        )}
                      </div>
                      <div class="col-md-12">
                        <div class="form-group d-flex align-items-center">
                          <label class="label" for="phone">Phone</label>
                          <input
                            type="text"
                            class="form-control"
                            id="phone"
                            name="phone"
                            value={formValue.phone}
                            onChange={handleChange} />
                        </div>
                        {formError.confirmPassword && (
                          <div className="error-feedback" style={{ marginTop: -25, marginBottom: 15, marginLeft: 110 }}>{formError.phone}</div>
                        )}
                      </div>
                      <div class="col-md-12">
                        <div class="form-group d-flex align-items-center">
                          <label class="label" for="password">Password</label>
                          <input
                            type="password"
                            class="form-control"
                            id="password"
                            name="password"
                            value={formValue.password}
                            onChange={handleChange} />
                        </div>
                        {formError.confirmPassword && (
                          <div className="error-feedback" style={{ marginTop: -25, marginBottom: 15, marginLeft: 110 }}>{formError.password}</div>
                        )}
                      </div>
                      <div class="col-md-12">
                        <div class="form-group d-flex align-items-center">
                          <label class="label" for="confirm-password">Confirm Password</label>
                          <input
                            type="password"
                            class="form-control"
                            id="confirm-password"
                            className="form-control"
                            name="confirmPassword"
                            value={formValue.confirmPassword}
                            onChange={handleChange} />
                        </div>
                        {formError.confirmPassword && (
                          <div className="error-feedback" style={{ marginTop: -25, marginBottom: 15, marginLeft: 110 }}>{formError.confirmPassword}</div>
                        )}
                      </div>

                      <div>
                        <input id="box1" onChange={checkValue} type="checkbox" value="0" checked={check.includes("0") ? true : false} />
                        <label htmlFor="#box1">Chủ kho</label>
                      </div>

                      <div>
                        <input id="box2" onChange={checkValue} type="checkbox" value="1" checked={check.includes("1") ? true : false} />
                        <label htmlFor="#box2">Khách hàng</label>
                      </div>

                      <div class="col-md-12">
                        <div >
                          <button type="submit" class="btn btn-secondary" style={{ width: "100%", height: 50, fontSize: 25 }}>Tạo tài khoản</button>
                        </div>
                      </div>
                    </div>

                  </form>
                  <div class="w-100 text-center">
                    <p class="mt-4">Tôi đã có tài khoản! <a href="login">Đăng Nhập</a></p>
                    <p class="mt-4"><a href="/">Trang chủ</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
      <script src="js/jquery.min.js"></script>
      <script src="js/popper.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/main.js"></script>
    </>
  );
}
