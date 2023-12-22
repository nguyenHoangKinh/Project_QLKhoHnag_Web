import React, { useState, useEffect } from "react";
import "../../theme/ListPostOwner.css";
import axios from "axios";
import { BASE_URL } from "../../config";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import Navbar from '../HomeNavbar';
import Footer from '../HomeFooter';

export default function ListPostOwner() {
    const [listPostOwner, setListPostOwner] = useState();
    const navigate = useNavigate();
    let token = localStorage.getItem("jsonwebtoken");
    let idUser = jwtDecode(token);

    useEffect(() => {
        //call api
        axios.get(BASE_URL + '/blog/list-by-owner', {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                id: idUser.id
            }
        }).then((res) => {
            setListPostOwner(res.data.data);
        }).catch((error) => {
            console.log(error.message);
        });
    }, [listPostOwner]);

    const handleDelete = (idBlog) => {
        axios.delete(BASE_URL + `/blog/delete-blog/${idBlog}/`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                id_owner: idUser.id
            }
        }).then((res) => {
            console.log(res)
        }).catch((error) => {
            console.log(error.message);
        });
    }

    return (
        <>
            <Navbar />
            <div class="container mt-5 mb-5">
                <div class="d-flex justify-content-center row">
                    <div class="col-md-10">
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end mb-2">
                            <a class="btn btn-outline-primary " type="button" href="/AddPost">Đăng bài</a>
                        </div>
                        {listPostOwner ? (listPostOwner.length > 0 &&
                            listPostOwner.map((itemPost, index) => {
                                return (
                                    <div class="row p-2 bg-white border rounded mb-2">
                                        <div class="col-md-3 mt-1">
                                            <img class="img-fluid img-responsive rounded product-image" src={itemPost.images[0]} style={{ width: 200, height: 200 }} />
                                        </div>
                                        <div class="col-md-6 mt-1">
                                            <h3 style={{ fontWeight: "bold" }}>{itemPost.warehouse.wareHouseName}</h3>
                                            <div class="mt-1 mb-1 spec-1">
                                                <span style={{ fontWeight: "bold" }}>Giá: </span>
                                                <span class="dot"></span><span>{itemPost.warehouse.monney}</span>
                                                <span class="dot"></span><span> VNĐ<br /></span>
                                            </div>
                                            <div class="mt-1 mb-1 spec-1">
                                                <span style={{ fontWeight: "bold" }}>Địa chỉ: </span>
                                                <span class="dot"></span><span>{itemPost.warehouse.address}<br /></span>
                                            </div>
                                            <span style={{ fontWeight: "bold", fontSize: 20 }}>Mô Tả: </span>
                                            <span class="text-justify text-truncate para mb-0">{itemPost.description}<br /><br /></span>
                                        </div>
                                        <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                                            <div class="d-flex flex-column mt-4">
                                                <button class="btn btn-primary btn-sm" type="button" onClick={() => { navigate('/UpdatePost', { state: { id: itemPost._id } }); }}>Sửa Bài Viết</button>
                                                <button class="btn btn-outline-primary btn-sm mt-2" type="button" onClick={() => {
                                                    if (window.confirm("Bạn có muốn bài viết này không ?")) {
                                                        handleDelete(itemPost._id)
                                                    }
                                                }}>Xóa Bài Viết</button>
                                            </div>
                                        </div>
                                    </div>)
                            })) : (
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <td className="emptyWarehouse">Không có bài viết</td>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
