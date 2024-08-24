import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="nav-container">
      <ul>
        <li>
          <NavLink to="/" className="navLink">
            Form
          </NavLink>
        </li>
        <li>
          <NavLink to="/checkboxTry" className="navLink">
            Checkbox Try
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
