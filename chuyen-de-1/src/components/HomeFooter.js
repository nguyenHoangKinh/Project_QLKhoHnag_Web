// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="footer mt-5">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-info">
            <a href="index.html" className="logo d-flex align-items-center text-decoration-none">
              <span>TMCIT</span>
            </a>
            <p>Tokyo Metropolitan College of Industrial Technology</p>
            <div className="social-links d-flex mt-4">
              <a href="https://twitter.com/SangikosenTmcit" className="twitter"><i className="fab fa-twitter"></i></a>
              <a href="https://www.facebook.com/sangikosen.ac.jp" className="facebook"><i className="fab fa-facebook"></i></a>
              <a href="https://www.instagram.com/tmcit_official/" className="instagram"><i className="fab fa-instagram"></i></a>
              <a href="https://www.youtube.com/user/TMCITPR" className="linkedin"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Terms of service</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Product Management</a></li>
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Graphic Design</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>
              140-0011 1-10-40 Higashioi, Shinagawa-ku, Tokyo <br /><br />
              <strong>TEL:</strong> 03-3471-6331 (main)<br />
              <strong>FAX:</strong> 03-3471-6338<br />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
