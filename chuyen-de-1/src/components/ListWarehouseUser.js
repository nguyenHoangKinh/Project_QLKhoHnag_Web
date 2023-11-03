import React, { useState } from "react";
import "../theme/ListWarehouseUser.css";
import axios from "axios";

export default function ListWarehouseUser() {
    return (
        <>
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
                    <tr>
                        <td>Dom</td>
                        <td>6000</td>
                        <td>Dom</td>
                        <td>6000</td>
                        <td>Dom</td>
                    </tr>
                    <tr class="active-row">
                        <td>Melissa</td>
                        <td>5150</td>
                        <td>Melissa</td>
                        <td>5150</td>
                        <td>Melissa</td>
                    </tr>
                    {/* <!-- and so on... --> */}
                </tbody>
            </table>
        </div>
        </>
    );
}
