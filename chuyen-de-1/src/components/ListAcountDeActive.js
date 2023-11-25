import React, { useState, useEffect } from "react";
import "../theme/ListWarehouseUser.css";

import axios from "axios";

export default function ListAcountDeActive() {
    let Token = localStorage.getItem("jsonwebtoken");
    //console.log(Token);

    const [ListAcount, setListAcount] = useState();

    useEffect(() => {
        //call api
        axios.get('https://warehouse-management-api.vercel.app/v1/admin/list-account-not-active', {
            headers: {
                Authorization: `Bearer ${Token}` 
            }
        }).then((res) => {
            setListAcount(res.data.accounts);
            console.log(res.data.accounts);
        }).catch((error) => {
            console.log(error.message);
        });
    }, []);

    return (
        <>
        

            <h2>ListAcountDeActive</h2>
            <div className="listwarehouseuser">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>userName</th>
                            <th>email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ListAcount &&
                            // ListAcount.length > 0 &&
                            ListAcount.map((item, index) => {
                                return (
                                    <tr>
                                        <td>{item.username}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <button className="btn btn-danger" >
                                             <th>active</th>
                                        </button>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
        </>
    );
}
