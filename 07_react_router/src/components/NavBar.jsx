import "../index.css";
import React from "react";
import { useNavigate, NavLink, replace } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <nav>
      <h1>Logo</h1>
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/products">
          <li>Products</li>
        </NavLink>
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
      </ul>

      <button
        onClick={(e) => {
          navigate("/about", { replace: true });
        }}
      >
        Get Started
      </button>
    </nav>
  );
}

export default NavBar;
