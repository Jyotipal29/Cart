import React from "react";
import "./header.css";
import { useCart } from "../../context/Context";
import { Link, useNavigate } from "react-router-dom";
import User from "../user/User";
import { logoutUser } from "../../context/action";
import { useUser } from "../../context/UserContext";

const Header = () => {
  const { user } = useUser();
  console.log(user);
  const navigate = useNavigate();

  const onLogout = async () => {
    const data = await logoutUser();
    navigate("/login");
  };
  return (
    <nav className="navbar">
      <div className="container flex">
        <div className="logo">
          <Link to="/home">shopping cart</Link>
        </div>

        {user.name ? (
          <div>
            <button onClick={onLogout}>logout</button>
            <Link to="/user">{user.name}</Link>
          </div>
        ) : (
          <div>
            <Link to="/login" style={{ marginRight: "30px" }}>
              login
            </Link>
            <Link to="/register" style={{ marginRight: "30px" }}>
              register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
