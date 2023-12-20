import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header>
      <div className="container my-2">
        <div className="d-flex justify-content-between w-100">
          <h1>Image</h1>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ height: '60px' }} />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </header>
  );
};
export default Header;