import React from "react";
import "./header.css";
import { useCart } from "../../context/Context";
import { Link } from "react-router-dom";
const Header = () => {
  // const {
  //   state: { cart },
  //   productDispatch,
  // } = useCart();
  return (
    <nav className="navbar">
      <div className="container flex">
        <div className="logo">
          <Link to="/">shopping cart</Link>
        </div>
        {/* <div className="search">
          <input
            className="input"
            placeholder="Search for product"
            onChange={(e) =>
              productDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              })
            }
          />
          <button className="search-btn">Search</button>
        </div>

        <h3>
          <Link to="/cart">{cart.length}</Link>
         </h3> */}
      </div>
    </nav>
  );
};

export default Header;
