import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { jwtDecode } from "jwt-decode";
import { BASE_URL } from "../config";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const ListOrder = () => {
    const navigation = useNavigate();
    const order = () => {
        navigation("/ShowListOrderUser")
    }
    const orderUnconfirmed = () => {
        navigation("/ListOrderUnconfirmed")
    }
    const ListOrderPendingPaymentUser = () => {
        navigation("/ListOrderPendingPaymentUser")
    }
    const ListOrdePaid = () => {
        navigation("/ListOrdePaid")
    }
    return (
        <div class="main_content">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="list-group">
                            <a  class="list-group-item list-group-item-action" onClick={orderUnconfirmed}>Chờ xác nhận đơn</a>
                            <a  class="list-group-item list-group-item-action" onClick={ListOrderPendingPaymentUser}>Chờ thanh toán</a>
                            <a class="list-group-item list-group-item-action" onClick={ListOrdePaid}>Đã thanh toán</a>
                            <a class="list-group-item list-group-item-action " onClick={order}>Hóa đơn</a>
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
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">
                                                    <a href="/#" class="list-group-item">
                                                        <div class="d-flex align-items-center">
                                                            <div class="flex-column ms-4">
                                                                <p class="mb-2">Thinking, Fast and Slow</p>
                                                                <p class="mb-0">Daniel Kahneman</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </th>
                                                <td class="align-middle">
                                                    <p class="mb-0" style={{ fontWeight: "500" }}></p>
                                                </td>
                                                <td class="align-middle">
                                                </td>
                                                <td class="align-middle">
                                                    <a class="myButton"><i class="fa-solid fa-trash"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <a href="/#" class="list-group-item">
                                                        <div class="d-flex align-items-center">
                                                            <div class="flex-column ms-4">
                                                                <p class="mb-2">Thinking, Fast and Slow</p>
                                                                <p class="mb-0">Daniel Kahneman</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </th>
                                                <td class="align-middle ">
                                                    <p class="mb-0" style={{ fontWeight: "500" }}></p>
                                                </td>
                                                <td class="align-middle">
                                                </td>
                                                <td class="align-middle" >
                                                    <a class="myButton"><i class="fa-solid fa-trash"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <a href="/#" class="list-group-item">
                                                        <div class="d-flex align-items-center">
                                                            <div class="flex-column ms-4">
                                                                <p class="mb-2">Thinking, Fast and Slow</p>
                                                                <p class="mb-0">Daniel Kahneman</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </th>
                                                <td class="align-middle">
                                                    <p class="mb-0" style={{ fontWeight: "500" }}></p>
                                                </td>
                                                <td class="align-middle">
                                                </td>
                                                <td class="align-middle">
                                                    <a class="myButton"><i class="fa-solid fa-trash"></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <a href="/#" class="list-group-item">
                                                        <div class="d-flex align-items-center">
                                                            <div class="flex-column ms-4">
                                                                <p class="mb-2">Thinking, Fast and Slow</p>
                                                                <p class="mb-0">Daniel Kahneman</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </th>
                                                <td class="align-middle">
                                                    <p class="mb-0" style={{ fontWeight: "500" }}></p>
                                                </td>
                                                <td class="align-middle">
                                                </td>
                                                <td class="align-middle">
                                                    <a class="myButton"><i class="fa-solid fa-trash"></i></a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ListOrder;