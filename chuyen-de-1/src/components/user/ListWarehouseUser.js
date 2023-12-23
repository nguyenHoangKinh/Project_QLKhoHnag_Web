import React, { useState, useEffect } from "react";
import "../../theme//ListWarehouseUser.css";
import axios from "axios";
import { BASE_URL } from "../../config";
import { jwtDecode } from "jwt-decode";
import Navbar from "../HomeNavbar";
import Footer from "../HomeFooter";
import CardWarehouse from "../CardWarehouse";

export default function ListWarehouseUser() {
  const [listWarehouseUser, setListWarehouseUser] = useState();
  const [categoryId, setCategoryId] = useState("0");
  const [listCategoryUser, setListCategoryUser] = useState();
  const [textSearch, setTextSearch] = useState();
  let token = localStorage.getItem("jsonwebtoken");

  useEffect(() => {
    //call api
    axios
      .get(BASE_URL + "/warehouse/listWarehouseUser", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setListWarehouseUser(res.data.warehouse);
      })
      .catch((error) => {
        console.log(error.message);
      });

    axios
      .get(BASE_URL + "/warehouse/category/list", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setListCategoryUser(res.data.categories);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  function handleSelectCatagory(event) {
    setCategoryId(event.target.value);
  }

  function handleSearchWarehouse(event) {
    var input, filter;
    input = event.target.value;
    filter = input.toLowerCase();
    setTextSearch(filter);
  }
  console.log(listWarehouseUser);
  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center mt-3">
        <input
          type="text"
          id="myInput"
          onChange={handleSearchWarehouse}
          placeholder="Search for names.."
          title="Type in a name"
        ></input>
      </div>
      <section style={{ backgroundColor: "#f7fafd" }}>
        <div className="container mt-4 py-5">
          <div className="section-header">
            <h2>Danh sách kho hàng</h2>
          </div>
          <div className="row row-cols-2 row-cols-md-4 g-4">
            {listWarehouseUser ? (
              listWarehouseUser.length > 0 &&
              listWarehouseUser.map((card) => {
                if (
                  (categoryId && card.category._id.includes(categoryId)) ||
                  categoryId === 0
                ) {
                  if (
                    card.wareHouseName.toLowerCase().includes(textSearch) ||
                    !textSearch
                  ) {
                    return (
                      <div key={card.id} className="col">
                        <CardWarehouse
                          imageWarehouse={card.imageWarehouse}
                          wareHouseName={card.wareHouseName}
                          description={card.description}
                          linkText={card.linkText}
                          owner={card.owner}
                          warehouseId={card._id} // Truyền ID của kho xuống
                        />
                      </div>
                    );
                  }
                }
                return null; // Return null for elements that don't match the conditions
              })
            ) : (
              <div>Không có kho hàng</div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
