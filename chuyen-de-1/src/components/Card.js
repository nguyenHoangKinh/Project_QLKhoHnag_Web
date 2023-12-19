import React from 'react';
import '../theme/Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({ image, title, description, linkText }) => {
 return (
    <div className="col-lg-4 col-md-6 my-3 ">
      <div className="card mb-3">
        <figure>
          <img src={image} className="card-img-top w-100 img-fluid " alt="..." />
        </figure>
        <div className="card-buttons-1 position-absolute container ">
          <h4 className="fw-bold mb-1 long-1 w-">{title}</h4>
          <p className="text-white long-2">{description}</p>
          <a href={linkText}
            className="btn btn-outline-light rounded-3 px-3 mx-1 text-capitalize mt-1">read
            more</a>
        </div>
      </div>
    </div>
 );
};

export default Card;