import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-top">
          <h2>Need update on Latest Offers?</h2>
          <p>Subscribe on our newsletter to get frequent update</p>
          <div className="input-footer">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-left">
            <h2>FoodHub</h2>
            <div className="socials">
              <a href="#">
                <FaFacebook className="social-icon" />
              </a>
              <a href="#">
                <FaInstagram className="social-icon" />
              </a>
              <a href="#">
                <FaYoutube className="social-icon" />
              </a>
            </div>
          </div>
          <div className="footer-right">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="copy">© 2025 FoodHub. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
