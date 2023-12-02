import React, { useState, useEffect } from "react";
import "../theme/Profile.css";
import axios from "axios";
import { BASE_URL } from "../config";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const [informationProfile, setInformationProfile] = useState();
    const navigate = useNavigate();
    let token = localStorage.getItem("jsonwebtoken");

    useEffect(() => {
        //call api
        if (token) {
            let idUser = jwtDecode(token);
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
        }
    }, [informationProfile]);

    return (
        <div>
            {informationProfile ?
                (<div class="container emp-profile">
                    <div method="post">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="profile-img">
                                    <img src={informationProfile.avatar} alt="" />
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="profile-head">
                                    <h5>{informationProfile.username}</h5>
                                    <h6>{informationProfile.email}</h6>
                                    <p class="proile-rating"><span></span></p>
                                    <br/>
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item">
                                            <div class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Thông tin cá nhân</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <button type="button" class="profile-edit-btn" name="btnAddMore" onClick={()=> navigate('/UpdateProfile')}>Cập nhật thông tin</button>
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
                                                <p>{informationProfile.email}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Số điện thoại</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{informationProfile.phone}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Địa chỉ</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{informationProfile.address}</p>
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
                                        {informationProfile.blogs  &&
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
                    </div>
                </div>) : (<div class="container emp-profile">
                    <div method="post">
                        <div class="row">
                            <div class="col-md-3">
                            </div>
                            <div class="col-md-6">
                                <div class="profile-head">
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item">
                                            <div class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Yêu cầu đăng nhập để xem được thông tin cá nhân</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <button type="button" class="profile-edit-btn" name="btnAddMore" onClick={()=> navigate('/Login')}>Đăng nhập</button>
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>
    );
}
