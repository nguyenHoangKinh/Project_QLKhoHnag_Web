import React, { useState, useEffect } from "react";
import "../theme/Profile.css";
import axios from "axios";
import { BASE_URL } from "../config";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const [informationProfile, setInformationProfile] = useState();
    const [textSearch, setTextSearch] = useState();
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
            console.log(res.data.others)
        }).catch((error) => {
            console.log(error.message);
        });
    }, [informationProfile]);

    return (
        <div>
            {informationProfile &&
                <div class="container rounded bg-white mt-5 mb-5">
                    <div class="row">
                        <div class="col-md-3 border-right">
                            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                                <img class="rounded-circle mt-5" width="200px" height="200px" src={informationProfile.avatar} />
                                <span class="font-weight-bold username">{informationProfile.username}</span>
                                <span class="text-black-50">{informationProfile.email}</span>
                            </div>
                        </div>
                        <div class="col-md-5 border-right">
                            <div class="p-3 py-5">
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                    <h4 class="text-right">Thông tin cá nhân</h4>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-md-6">
                                        <label class="labels">Username</label>
                                        <input type="text" class="form-control" placeholder={informationProfile.username} value="" disabled />
                                    </div>
                                    <div class="col-md-6">
                                        <label class="labels">Email</label>
                                        <input type="text" class="form-control" value="" placeholder={informationProfile.email} disabled />
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-12">
                                        <label class="labels">Số điện thoại</label>
                                        <input type="text" class="form-control" placeholder={informationProfile.phone} value="" disabled />
                                    </div>
                                    <div class="col-md-12">
                                        <label class="labels">Địa chỉ</label>
                                        <input type="text" class="form-control" placeholder={informationProfile.address} value="" disabled />
                                    </div>
                                    <div class="col-md-12">
                                        <label class="labels">Số kho hàng</label>
                                        <input type="text" class="form-control" placeholder={informationProfile.warehouses.length} value="" disabled />
                                    </div>
                                    <div class="col-md-12">
                                        <label class="labels">Số bài viết</label>
                                        <input type="text" class="form-control" placeholder={informationProfile.blogs.length} value="" disabled />
                                    </div>
                                </div>
                                <div class="mt-5 text-center">
                                    <button class="btn btn-primary profile-button" type="button">Chỉnh sửa thông tin cá nhân</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    );
}
