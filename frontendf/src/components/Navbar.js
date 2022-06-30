import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = ({ click }) => {
  return (
    <div className="navbar">
      {/* logo */}
      <div className="navbar__logo">
        <h2>MERN SHOPING CART</h2>
      </div>
      {/* links */}
      <ul className="navbar__links">
        <li>
          <Link to="/cart">
            cart
            <span className="cartlogo__badge">0</span>
          </Link>
        </li>
        <li>
          <Link to="/">shop</Link>
        </li>
      </ul>
      {/* hamburger menu */}
      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
