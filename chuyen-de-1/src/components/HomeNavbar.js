import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary p-2 bg-opacity-75">
            <div className="container-fluid container">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item me-2">
                            <a className="nav-link text-uppercase fs-5 active text-white" href="#">Home</a>
                        </li>
                        <li className="nav-item mx-2 dropdown">
                            <a className="nav-link text-uppercase fs-5 dropdown-toggle text-white" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-uppercase fs-5 text-white" href="#">Link</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-uppercase fs-5 text-white" href="#">Link</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;