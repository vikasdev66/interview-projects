import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="nav-container">
      <ul>
        <li>
          <NavLink
            to="/"
            className={(isActive) => `navLink ${isActive.isActive ? "isActiveNav" : ""}`}
          >
            Form
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/checkboxTry"
            className={(isActive) => `navLink ${isActive.isActive ? "isActiveNav" : ""}`}
          >
            Checkbox Try
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/stopwatch"
            className={(isActive) => `navLink ${isActive.isActive ? "isActiveNav" : ""}`}
          >
            Stopwatch
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
