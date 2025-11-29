import React from "react";
import "./Footer.css";
import { Link } from "react-router";
import  { FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo">Food Fusion</h2>
          <p className="footer-text">Taste to your plate</p>
        </div>
        <div className="footer-sections">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <p>📍 Muzaffarpur, Bihar</p>
          <p>📞 +91 9876543210</p>
          <p>✉ foodfusion@gmail.com</p>
          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 FoodFusion | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
