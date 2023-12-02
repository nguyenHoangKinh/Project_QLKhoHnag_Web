import React, { useState, useEffect } from "react";
import "../theme/Profile.css";
import axios from "axios";
import { BASE_URL } from "../config";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const initFormValue = {
    address: "",
    email: "",
    phone: "",
};

const isEmptyValue = (value) => {
    return !value || value.trim().length < 1;
};

export default function Profile() {
    const [informationProfile, setInformationProfile] = useState();
    const [formValue, setFormValue] = useState(initFormValue);
    const [file, setFile] = useState();
    const [formError, setFormError] = useState({});
    const navigate = useNavigate();
    let token = localStorage.getItem("jsonwebtoken");
    let idUser = jwtDecode(token);

    useEffect(() => {
        //call api
        axios.get(BASE_URL + '/auth/account-by-id', {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                id: idUser.id
            }
        }).then((res) => {
            setInformationProfile(res.data.others);
            // console.log(res.data.others)
        }).catch((error) => {
            console.log(error.message);
        });
    }, [informationProfile]);

    const updateProfile = () => {
        if ((!isEmptyValue(formValue.address) || !isEmptyValue(formValue.email) || !isEmptyValue(formValue.phone) || file) && validateForm()) {
            const formData = new FormData();

            if (file) {
                formData.append("avatar", file[0].file)
            }

            formData.append("address", formValue.address)
            formData.append("email", formValue.email)
            formData.append("phone", formValue.phone)

            axios.put(BASE_URL + '/auth/update-account', formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    params: {
                        id: idUser.id
                    }
                }).then((res) => {
                    alert("Cập nhật thông tin thành công");
                    window.location.href = "Profile";
                }).catch((error) => {
                    console.log(error.message);
                });
        } else {
            alert("Yêu cầu nhập thông tin đẩy đủ hoặc chính xác để cập nhật");
        }
    }

    const handleChange = (event) => {
        const { value, name } = event.target;
        setFormValue({
            ...formValue,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const files = e.target.files;

        const arrayFile = Array.from(files).map((file) => ({
            file: file,
        }));
        setFile(arrayFile)
    };

    const validateForm = () => {
        const error = {};

        if (!/\S+@\S\.\S+/.test(formValue.email)) {
            error["email"] = "Email không hợp lệ";
        }

        setFormError(error);

        return Object.keys(error).length === 0;
    };

    return (
        <div className="profile_bg">
            {informationProfile &&
                <div class="container emp-profile">
                    <form method="post">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="profile-img">
                                    <img src={informationProfile.avatar} alt="" />
                                    <div class="file btn btn-lg btn-primary">
                                        Change Photo
                                        <input type="file" name="file" onChange={handleFileChange} />
                                        {!file ? (<div>Chọn hình ảnh</div>) : (<div>Đã chọn hình ảnh</div>)}
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="profile-head">
                                    <h5>{informationProfile.username}</h5>
                                    <h6>{informationProfile.email}</h6>
                                    <p class="proile-rating"><span></span></p>
                                    <br />
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item">
                                            <div class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Cập nhật thông tin cá nhân</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <button type="button" class="profile-edit-btn" name="btnAddMore" onClick={() => updateProfile()}>Cập nhật</button>
                            </div>
                            <div class="col-md-2">
                                <button type="button" class="profile-edit-btn" name="btnAddMore" onClick={() => navigate('/Profile')}>Hủy</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                            </div>
                            <div class="col-md-8">
                                <div class="tab-content profile-tab" id="myTabContent">
                                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Username</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{informationProfile.username}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <input
                                                    id="email"
                                                    className="form-control"
                                                    type="text"
                                                    name="email"
                                                    placeholder={informationProfile.email}
                                                    value={formValue.email}
                                                    onChange={handleChange} />
                                                {formError.email && (
                                                    <div className="error-feedback-profile">{formError.email}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Số điện thoại</label>
                                            </div>
                                            <div class="col-md-6">
                                                <input
                                                    id="phone"
                                                    className="form-control"
                                                    type="text"
                                                    name="phone"
                                                    placeholder={informationProfile.phone}
                                                    value={formValue.phone}
                                                    onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Địa chỉ</label>
                                            </div>
                                            <div class="col-md-6">
                                                <input
                                                    id="address"
                                                    className="form-control"
                                                    type="text"
                                                    name="address"
                                                    placeholder={informationProfile.address}
                                                    value={formValue.address}
                                                    onChange={handleChange} />
                                            </div>
                                        </div>
                                        {informationProfile.warehouses &&
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Tổng số kho hàng</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>{informationProfile.warehouses.length} (kho hàng)</p>
                                                </div>
                                            </div>}
                                        {informationProfile.blogs &&
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Tổng số bài viết</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>{informationProfile.blogs.length} (bài viết)</p>
                                                </div>
                                            </div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>}
        </div>
    );
}
