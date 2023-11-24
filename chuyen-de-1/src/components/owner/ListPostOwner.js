import React, { useState, useEffect } from "react";
import "../../theme/ListPostOwner.css";
import axios from "axios";
import { BASE_URL } from "../../config";
import { jwtDecode } from "jwt-decode";

export default function ListPostOwner() {
    const [listPostOwner, setListPostOwner] = useState();
    const [textSearch, setTextSearch] = useState();
    let token = localStorage.getItem("jsonwebtoken");
    let idUser = jwtDecode(token)

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
    }, []);

    // function handleSelectCatagory(event) {
    //     setCategoryId(event.target.value)
    // }

    // function handleSearchWarehouse(event) {
    //     var input, filter;
    //     input = event.target.value;
    //     filter = input.toLowerCase();
    //     setTextSearch(filter);
    // }

    return (
        <>
            <div class="container py-5">
                <h1>List Warehouse User</h1>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end mb-2">
                    <a class="btn btn-outline-primary me-md-2" type="button" href="/AddPost">Đăng bài</a>
                </div>
                <div class="row">
                    <div class="col-lg-12 mx-auto">
                        <ul class="list-group shadow">
                            {listPostOwner ? (listPostOwner.length > 0 &&
                                listPostOwner.map((itemPost, index) => {
                                    return (
                                        <li class="list-group-item">
                                            <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                                                <div class="d-flex">
                                                    <img src={itemPost.images[0]} alt="Generic placeholder image" width="200" height="200" class="font-weight-bold my-2" />
                                                    <div class="media-body order-2 order-lg-1 p-3">
                                                        <h2 class="mt-0 fw-bold mb-2">{itemPost.warehouse.wareHouseName}</h2>
                                                        <div class="d-flex align-items-center justify-content-between mt-1">
                                                            <h5 class="font-weight-bold my-2">Giá: {itemPost.warehouse.monney} VNĐ</h5>
                                                            {/* <ul class="list-inline small">
                                                                <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                                                <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                                                <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                                                <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                                                <li class="list-inline-item m-0"><i class="fa fa-star-o text-gray"></i></li>
                                                            </ul> */}
                                                        </div>
                                                        <h5 class="font-weight-bold my-2">Địa chỉ: {itemPost.warehouse.address}</h5>
                                                        <h6 class="font-italic text-muted small pt-3">{itemPost.description}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>)
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
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
