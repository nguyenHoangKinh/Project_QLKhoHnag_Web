import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../theme/Card.css'; // Make sure to adjust the path based on your project structure

const Card = ({ image, title, description, linkText }) => {
  return (
    <div className="col">
      <div className="card">
        <div className="card text-bg-dark">
          <figure>
            <img src={image} className="card-img" alt="..." />
          </figure>
          <div className="card-img-overlay">
            <h5 className="position-absolute card-title text-capitalize long-2 ">{title}</h5>
          </div>
          <div className="card-buttons-1 position-absolute container ">
            <h4 className="fw-bold mb-1">{title}</h4>
            <p className="long-2">{description}</p>
            <a href={linkText} className="btn btn-outline-light rounded-3 px-3 py-2 fs-5 mx-1 text-capitalize mt-2">
              read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;