import React, { useState, useEffect } from "react";
import "../../theme/ListPostOwner.css";
import axios from "axios";
import { BASE_URL } from "../../config";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import Navbar from '../HomeNavbar';
import Footer from '../HomeFooter';

export default function ListWarehouseOwner() {
    const [listWarehouseOwner, setListWarehouseOwner] = useState();
    const navigate = useNavigate();
    let token = localStorage.getItem("jsonwebtoken");
    let idUser = jwtDecode(token);

    useEffect(() => {
        //call api
        axios.get(BASE_URL + '/warehouse/list', {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                id_owner: idUser.id
            }
        }).then((res) => {
            setListWarehouseOwner(res.data);
        }).catch((error) => {
            console.log(error.message);
        });
    }, [listWarehouseOwner]);

    const handleDelete = (idBlog) => {
        
    }

    return (
        <>
            <Navbar />
            <div class="container mt-5 mb-5">
                <div class="d-flex justify-content-center row">
                    <div class="col-md-10">
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end mb-2">
                            <a class="btn btn-outline-primary " type="button" href="#">Thêm Kho Hàng</a>
                        </div>
                        {listWarehouseOwner ? (listWarehouseOwner.length > 0 &&
                            listWarehouseOwner.map((itemWarehouse, index) => {
                                return (
                                    <div class="row p-2 bg-white border rounded mb-2">
                                        <div class="col-md-3 mt-1">
                                            <img class="img-fluid img-responsive rounded product-image" src={itemWarehouse.imageWarehouse} style={{ width: 200, height: 200 }} />
                                        </div>
                                        <div class="col-md-6 mt-1">
                                            <h3 style={{ fontWeight: "bold" }}>{itemWarehouse.wareHouseName}</h3>
                                            <div class="mt-1 mb-1 spec-1">
                                                <span style={{ fontWeight: "bold" }}>Giá: </span>
                                                <span class="dot"></span><span>{itemWarehouse.monney}</span>
                                                <span class="dot"></span><span> VNĐ<br /></span>
                                            </div>
                                            <div class="mt-1 mb-1 spec-1">
                                                <span style={{ fontWeight: "bold" }}>Địa chỉ: </span>
                                                <span class="dot"></span><span>{itemWarehouse.address}<br /></span>
                                            </div>
                                            <div class="mt-1 mb-1 spec-1">
                                                <span style={{ fontWeight: "bold" }}>Dung tích: </span>
                                                <span class="dot"></span><span>{itemWarehouse.currentCapacity} /{itemWarehouse.capacity} {itemWarehouse.category.acreage}<br /></span>
                                            </div>
                                            <span style={{ fontWeight: "bold", fontSize: 20 }}>Mô Tả: </span>
                                            <span class="text-justify text-truncate para mb-0">{itemWarehouse.description}<br /><br /></span>
                                        </div>
                                        <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                                            <div class="d-flex flex-column mt-4">
                                                <button class="btn btn-primary btn-sm" type="button" onClick={() => { navigate('/UpdateWarehouseOwner', { state: { id: itemWarehouse._id } }); }}>Thay đổi thông tin</button>
                                                <button class="btn btn-outline-primary btn-sm mt-2" type="button" onClick={() => {
                                                    if (window.confirm("Bạn có muốn bài viết này không ?")) {
                                                        handleDelete(itemWarehouse._id)
                                                    }
                                                }}>Xóa kho hàng</button>
                                            </div>
                                        </div>
                                    </div>)
                            })) : (
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <td className="emptyWarehouse">Không có kho hàng</td>
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
