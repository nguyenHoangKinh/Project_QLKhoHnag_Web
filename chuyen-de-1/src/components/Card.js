import { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../theme/Card.css"; // Make sure to adjust the path based on your project structure
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  let Token = localStorage.getItem("jsonwebtoken");
  const navigation = useNavigate();
  const {DetailBlog, } = useContext(UserContext);
  const DetaiBolg = (item) => {
    DetailBlog(Token,item._id)
    setTimeout(() => {
      navigation("/DetailsOrderPage", {
        state: { item },
      })
    }, 700)
  }
  return (
    <div className="col">
      <div className="card">
        <div className="card text-bg-dark">
          <figure>
            <img src={data.images[0]} className="card-img" alt="..." />
          </figure>
          <div className="card-img-overlay">
            <h5 className="position-absolute card-title text-capitalize long-2 ">
              {data.description}
            </h5>
          </div>
          <div
            className="card-buttons-1 position-absolute container"
            style={{ top: "20%" }}
          >
            <h4 className="fw-bold mb-1">{data.description}</h4>
            <p className="long-2">
              <i
                class="fa-solid fa-map-location-dot"
                style={{ color: "yellow" }}
              ></i>
              {data.warehouse.address}
            </p>
            <p className="long-2">
              Diện tích hiện tại: {data.warehouse.currentCapacity}
            </p>
            <a
              onClick={() => {
                DetaiBolg(data);
              }}
              className="btn btn-outline-light rounded-3 px-3 py-2 fs-5 mx-1 text-capitalize mt-2"
            >
              read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
