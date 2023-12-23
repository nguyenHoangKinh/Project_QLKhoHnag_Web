import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../theme/Card.css"; // Make sure to adjust the path based on your project structure
import { Link } from "react-router-dom";

const Card = ({
  imageWarehouse,
  wareHouseName,
  description,
  linkText,
  owner,
  warehouseId,
}) => {
  return (
    <div className="col">
      <div className="card">
        <div className="card text-bg-dark">
          <figure>
            <img src={imageWarehouse} className="card-img" alt="..." />
          </figure>
          <div className="card-img-overlay">
            <h5 className="position-absolute card-title text-capitalize long-2 ">
              {wareHouseName}
            </h5>
          </div>
          <div className="card-buttons-1 position-absolute container ">
            <h4 className="fw-bold mb-1">{wareHouseName}</h4>
            <p className="long-2">Chủ kho: {owner.username}</p>
            <Link to={`/RentWareHouse/${warehouseId}`}>
              <a
                href={linkText}
                className="btn btn-outline-light rounded-3 px-3 py-2 fs-5 mx-1 text-capitalize mt-2"
              >
                Xem chi tiết
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
