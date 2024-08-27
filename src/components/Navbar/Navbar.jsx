import React, { useState } from "react";
import { FaGithubSquare } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <nav className="main-nav">
      <div className="logo">
        <h2>Interview Project</h2>
      </div>
      <div
        className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}
      >
        <ul>
          <li>
            <NavLink
              to="/"
              className={(isActive) =>
                `${isActive.isActive ? "isActiveNav" : ""} navLink`
              }
              state="Welcome to Interview Projects"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/form"
              className={(isActive) =>
                `${isActive.isActive ? "isActiveNav" : ""} navLink`
              }
            >
              Form
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/checkboxTry"
              className={(isActive) =>
                `${isActive.isActive ? "isActiveNav" : ""} navLink`
              }
            >
              Checkbox Try
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/stopwatch"
              className={(isActive) =>
                `${isActive.isActive ? "isActiveNav" : ""} navLink`
              }
            >
              Stopwatch
            </NavLink>
          </li>
          {showMediaIcons ? (
            <li className="mobile-social-link">
              <a
                href="https://github.com/vikasdev66/interview-projects.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithubSquare className="social-media-icon" />
              </a>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
      <div className="social-media">
        <ul className="social-media-desktop">
          <li>
            <a
              href="https://github.com/vikasdev66/interview-projects.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare className="social-media-icon" />
            </a>
          </li>
        </ul>
      </div>
      <div className="hamburger-menu">
        <div className="hamburger-menu-container">
          <GiHamburgerMenu
            className={`hamburger-menu-icon ${
              showMediaIcons ? "rotate-90" : ""
            }`}
            onClick={() => {
              setShowMediaIcons(!showMediaIcons);
            }}
          />
        </div>
      </div>
    </nav>
  );
}
