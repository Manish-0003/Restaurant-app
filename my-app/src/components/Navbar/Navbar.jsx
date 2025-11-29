import React from "react";
import "./Navbar.css";
import { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { CartContext } from "../../CartContext";
import { Link } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((total, item) => total + item.qty, 0);
  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">Food Fusion</div>
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={closeMenu}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/menu" onClick={closeMenu}>
              Menu
            </Link>
          </li>
          <li>
            <Link to="/cart" className="cart-icon" onClick={closeMenu}>
              <span>{cartCount}</span>
              Cart
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={closeMenu} className="login-btn">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
