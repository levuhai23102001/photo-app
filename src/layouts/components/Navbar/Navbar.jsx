import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <ul className="nav navbar">
        <li className="nav-item">
          <NavLink to="/">Home Page</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/add">Add Page</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
