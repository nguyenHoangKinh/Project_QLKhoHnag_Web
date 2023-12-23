import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { jwtDecode } from "jwt-decode";
import { BASE_URL } from "../config";
import axios from "axios";

const Navbar = () => {
    const navigation = useNavigate();
    const [user, setUser] = useState();
    let token = localStorage.getItem("jsonwebtoken");
    let idUser;
    
    if (token) {
        idUser = jwtDecode(token);
    }

    const logout = () => {
        localStorage.removeItem("jsonwebtoken");
        window.location.href = "/Login";
    }
    const ChatUser = () => {
        navigation("/chatUse")
    }
    const orderUser = () => {
        navigation("/ShowListOrderUser")
    }
    const orderOwner = () => {
        navigation("/ShowListOrderOwner")
    }

    useEffect(() => {
        //call api
        if (idUser) {
            axios.get(BASE_URL + '/auth/account-by-id', {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                params: {
                    id: idUser.id
                }
            }).then((res) => {
                setUser(res.data.others);
            }).catch((error) => {
                console.log(error.message);
            });
        }
    }, []);

    return (
        <>
            {!token ? (<nav className="navbar navbar-expand-lg bg-primary p-2 bg-opacity-75">
                <div className="container-fluid container">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item me-2">
                                <a className="nav-link text-uppercase fs-5 active text-white" href="/">Home</a>
                            </li>
                            <li className="nav-item mx-2 dropdown">
                                <a className="nav-link text-uppercase fs-5 dropdown-toggle text-white" href="#" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link text-uppercase fs-5 text-white" href="#">Link</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link text-uppercase fs-5 text-white" href="#">Link</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <a className="nav-link text-uppercase fs-5 text-white" href="Login">Đăng Nhập</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link text-uppercase fs-5 text-white" href="RegisterAccount">Đăng Ký</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>) : (idUser.isAdmin ? (<nav className="navbar navbar-expand-lg bg-primary p-2 bg-opacity-75">
                <div className="container-fluid container">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item me-2">
                                <a className="nav-link text-uppercase fs-5 active text-white" href="/">Home</a>
                            </li>
                            <li className="nav-item mx-2 dropdown">
                                <a className="nav-link text-uppercase fs-5 dropdown-toggle text-white" href="#" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link text-uppercase fs-5 text-white" href="#">Link</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link text-uppercase fs-5 text-white" href="#">Link</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                {user ? (<a className="nav-link text-uppercase fs-5 text-white" href="#">{user.username}</a>) : (<></>)}
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link text-uppercase fs-5 text-white" onClick={logout}>Đăng Xuất</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>) : (idUser.isOwner ? (<nav className="navbar navbar-expand-lg bg-primary p-2 bg-opacity-75">
                <div className="container-fluid container">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item me-2">
                                <a className="nav-link text-uppercase fs-5 active text-white" href="/">Home</a>
                            </li>
                            <li className="nav-item mx-2 dropdown">
                                <a className="nav-link text-uppercase fs-5 dropdown-toggle text-white" href="#" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Quản Lý Đơn Hàng
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link text-uppercase fs-5 text-white" onClick={orderOwner}>List Order</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link text-uppercase fs-5 text-white" onClick={ChatUser}>Chat</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                {user ? (<a className="nav-link text-uppercase fs-5 text-white" href="Profile">{user.username}</a>) : (<></>)}
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link text-uppercase fs-5 text-white" onClick={logout}>Đăng Xuất</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>) : (<nav className="navbar navbar-expand-lg bg-primary p-2 bg-opacity-75">
                <div className="container-fluid container">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item me-2">
                                <a className="nav-link text-uppercase fs-5 active text-white" href="/">Home</a>
                            </li>
                            <li className="nav-item mx-2 dropdown">
                                <a className="nav-link text-uppercase fs-5 dropdown-toggle text-white" href="#" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link text-uppercase fs-5 text-white" href="ListWarehouseUser">Danh Sách Kho Hàng</a>
                            </li>
                                                        <li className="nav-item mx-2">
                                <a className="nav-link text-uppercase fs-5 text-white" onClick={orderUser}>orderUser</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link text-uppercase fs-5 text-white" onClick={ChatUser}>chat</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link text-uppercase fs-5 text-white" href="#">Link</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                {user ? (<a className="nav-link text-uppercase fs-5 text-white" href="Profile">{user.username}</a>) : (<></>)}
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link text-uppercase fs-5 text-white" onClick={logout}>Đăng Xuất</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>)))}
        </>

    );
};
export default Navbar;