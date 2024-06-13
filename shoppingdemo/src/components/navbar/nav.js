import React from "react";
import logo from "C:/Downloads/b84folder/shoppingdemo/src/images/br3.jpg";
import { Link, Outlet } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <div className="bg">
      <div className="navbar">
        <nav className="nav">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="links">
            <Link to="/home" className="link">
              Home
            </Link>
            <Link to="/student" className="link">
              Students
            </Link>
            <Link to="/admin" className="link">
              Admin
            </Link>
            <Link to="/user" className="link">
              User
            </Link>
            <Link to="/placement" className="link">
              Placement
            </Link>
            <Link to="/certificate" className="link">
              Certificate
            </Link>
            <Link to="/login" className="link">
              Login
            </Link>
          </div>
        </nav>
      </div>

      <Outlet />
    </div>
  );
};

export default Nav;
