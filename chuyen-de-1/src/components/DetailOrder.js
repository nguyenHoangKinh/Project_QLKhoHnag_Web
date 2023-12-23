import React from "react";
import { Button, Card, Flex, Typography, Carousel } from "antd";
import SilderComponent from "../components/SilderComponent/SilderComponent";
import { UserContext } from "../context/UserContext";
import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BASE_URL } from "../config";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Header from "./HomeHeader";
import Footer from "./HomeFooter";
import { Container, Navbar } from "react-bootstrap";


const DetailOrder = ({ route, navigation }) => {
    const [OrderOwner, setDetailOrder] = useState([]);

    let token = localStorage.getItem("jsonwebtoken");
    const location = useLocation();
    const { loadingData, orderList, OrderDetails } = useContext(UserContext);
    let id = location.state.item._id;
    // console.log(Token,Id);
    useEffect(() => {
        if (id) {
            axios
                .get(BASE_URL + `/order/getAOrder?id=${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((res) => {
                    if (res && res.data) {
                        let detail = res.data.Order;
                        console.log(detail);
                        setDetailOrder(detail);

                        // console.log(res.data);
                    } else {
                        console.log("mang rong...");
                    }
                })
                .catch((e) => {

                });
        }
    }, []);
    return (
        <>
            <Header />
            <Navbar />
            <div className="container">
                <div className="card-order" style={{ justifyContent: "center" ,display: "flex",}}>
                    <div class="card" style={{ width: "700px" }}>
                        <div class="card-body">
                            <h5 class="card-title">Chi tiết đơn hàng</h5>
                            <p class="card-text">Tên Chủ kho: {OrderOwner != "" ? OrderOwner.owner.username : ""}</p>
                            <p class="card-text">Điện thoại chủ kho: {OrderOwner != "" ? OrderOwner.owner.phone : ""}</p>
                            <p class="card-text">Địa chỉ chủ kho: {OrderOwner != "" ? OrderOwner.owner.address : ""}</p>
                            <hr/>
                            <p class="card-text">Tên Kháchh hàng: {OrderOwner != "" ? OrderOwner.user.username : ""}</p>
                            <p class="card-text">Điện thoại khách hàng: {OrderOwner != "" ? OrderOwner.user.phone : ""}</p>
                            <p class="card-text">Địa chỉ chủ kho: {OrderOwner != "" ? OrderOwner.user.address : ""}</p>
                            <hr/>
                            <p class="card-text">Tên kho hàng: {OrderOwner != "" ? OrderOwner.warehouse.wareHouseName : ""}</p>
                            <p class="card-text">Địa chỉ kho hàng:{OrderOwner != "" ? OrderOwner.warehouse.address : ""}</p>
                            <p class="card-text">Dung lượng chứa đã thuê: {OrderOwner != "" ? OrderOwner.capacity : ""}</p>
                            <p class="card-text">Thời gian thuê kho:{OrderOwner != "" ? OrderOwner.rentalTime : ""}</p> 
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
}
export default DetailOrder;
