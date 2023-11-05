import React, { useState, useEffect } from "react";
import "../theme/ListWarehouseUser.css";
import axios from "axios";
import { BASE_URL } from "../config";

export default function ListWarehouseUser() {
    const [listWarehouseUser, setListWarehouseUser] = useState();
    const [listCategoryUser, setListCategoryUser] = useState();
    let token = localStorage.getItem("jsonwebtoken");

    useEffect(() => {
        //call api
        axios.get(BASE_URL + '/warehouse/listWarehouseUser', {
            headers: {
                token: token
            }
        }).then((res) => {
            setListWarehouseUser(res.data.warehouse);
        }).catch((error) => {
            console.log(error.message);
        });

        axios.get(BASE_URL + '/warehouse/category/list', {
            headers: {
                token: token
            }
        }).then((res) => {
            console.log(res.data.categories)
            setListCategoryUser(res.data.categories);
        }).catch((error) => {
            console.log(error.message);
        });
    }, []);

    return (
        <>
            <h1>List Warehouse User</h1>
            <div className="listwarehouseuser">
                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>Warehouse Name</th>
                            <th>Address</th>
                            <th>Category</th>
                            <th>Capacity</th>
                            <th>Monney</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listWarehouseUser &&
                            listWarehouseUser.length > 0 &&
                            listWarehouseUser.map((itemWarehouse, index) => {
                                return (
                                    <tr>
                                        <td>{itemWarehouse.wareHouseName}</td>
                                        <td>{itemWarehouse.address}</td>
                                        {listCategoryUser &&
                                            listCategoryUser.length > 0 &&
                                            listCategoryUser.map((item, index) => {
                                                if (itemWarehouse.category.includes(item._id)) {
                                                    return (
                                                        <td>{item.name}</td>
                                                    )
                                                }
                                            })}
                                        <td>{itemWarehouse.capacity}</td>
                                        <td>{itemWarehouse.monney}</td>
                                        <td>{itemWarehouse.description}</td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
        </>
    );
}
