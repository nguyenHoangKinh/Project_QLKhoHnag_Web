import React, { useState, useEffect } from "react";
import "../theme/ListWarehouseUser.css";

import axios from "axios";

export default function ListWarehouseUser() {

    const [ListWarehouseUser, setListWarehouseUser] = useState();

    useEffect(() => {
        //call api
        axios.get('https://warehouse-management-api.vercel.app/v1/warehouse/listWarehouseUser', {
            headers: {
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1M2EwMTY3YmZmY2JkODFiOTgwOWExYiIsImlhdCI6MTY5OTAxNDczOSwiZXhwIjoxNjk5MDIxOTM5fQ.HpX5_tvV9DpW8SkC5qNcUcoTZshGPqyoQQyjsInyfpk'
            }
        }).then((res) => {
            setListWarehouseUser(res.data.warehouse);
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
                            <th>Capacity</th>
                            <th>Monney</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ListWarehouseUser &&
                            ListWarehouseUser.length > 0 &&
                            ListWarehouseUser.map((item, index) => {
                                return (
                                    <tr>
                                        <td>{item.wareHouseName}</td>
                                        <td>{item.address}</td>
                                        <td>{item.capacity}</td>
                                        <td>{item.monney}</td>
                                        <td>{item.description}</td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
        </>
    );
}
