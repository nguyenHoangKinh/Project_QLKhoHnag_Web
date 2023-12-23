import { useState, useEffect, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { jwtDecode } from "jwt-decode";
import { BASE_URL } from "../../config";
import { useNavigate } from "react-router-dom";

import axios from "axios";


const ListOrderUser = () => {
    let token = localStorage.getItem("jsonwebtoken");
    const [ListOrderUser3, setListOrderUser3] = useState([]);

    
    const navigation = useNavigate();

    const orderUnconfirmed = () => {
        navigation("/ListOrderUnconfirmed")
    }
    const ListOrderPendingPaymentUser = () => {
        navigation("/ListOrderPendingPaymentUser")
    }
    const ListOrdePaidUser = () => {
        navigation("/ListOrdePaidUser")
    }
    const orderUser = () => {
        navigation("/ShowListOrderUser")
    }
    useEffect(() => {
        axios
            .get(
                `${BASE_URL}/order/listOrderByUser?status=3`,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            )
            .then((res) => {
                if (res && res.data) {
                    let order = res.data.data;
                    console.log(order);
                    setListOrderUser3(order);
                }

            })
            .catch((e) => {

            });
    }, []);
    return (
        <>
            <div class="main_content">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="list-group1">
                                <a class="list-group-item list-group-item-action" onClick={orderUnconfirmed}>Chờ xác nhận đơn</a>
                                <a class="list-group-item list-group-item-action" onClick={ListOrderPendingPaymentUser}>Chờ thanh toán</a>
                                <a class="list-group-item list-group-item-action" onClick={ListOrdePaidUser}>Đã thanh toán</a>
                                <a class="list-group-item list-group-item-action " onClick={orderUser}>Hóa đơn</a>
                            </div>
                        </div>
                    </div>
                    <section class="h-100 h-custom">
                        <div class="container h-100 py-5">
                            <div class="row d-flex justify-content-center align-items-center h-100">
                                <div class="col">
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col" class="h5">Order list</th>
                                                    <th scope="col" class="h5"></th>
                                                    <th scope="col" class="h5">Xóa</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {ListOrderUser3.map((item, index) => {
                                                    return (
                                                        <tr>
                                                            <th scope="row">
                                                                <a href="/#" class="list-group-item">
                                                                    <div class="d-flex align-items-center">
                                                                        <div class="flex-column ms-4">
                                                                            <p class="mb-2">Tên chủ kho: {item.owner.username}</p><p class="mb-2">Thời gian thuê: {item.rentalTime}</p>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </th>
                                                            <td class="align-middle">
                                                            </td>
                                                            
                                                            <td class="align-middle">
                                                                <a class="myButton"><i class="fa-solid fa-trash"></i></a>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default ListOrderUser;