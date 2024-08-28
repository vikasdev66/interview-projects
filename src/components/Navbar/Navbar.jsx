import React, { useState } from "react";
import { FaGithubSquare } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiNotionFill } from "react-icons/ri";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <nav className="main-nav">
      <div className="logo">
        <Link to="/" state="Welcome to Interview Projects">
          <h2>Interview Project</h2>
        </Link>
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
              state="Passing data using react router dom"
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
          <li>
            <NavLink
              to="/todoList"
              className={(isActive) =>
                `${isActive.isActive ? "isActiveNav" : ""} navLink`
              }
            >
              Todo List
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/accordion"
              className={(isActive) =>
                `${isActive.isActive ? "isActiveNav" : ""} navLink`
              }
            >
              Accordion
            </NavLink>
          </li>
          {showMediaIcons ? (
            <li className="mobile-social-link">
              <div className="mobile-social-link-div">
                <a
                  href="https://github.com/vikasdev66/interview-projects.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithubSquare className="social-media-icon" />
                </a>
                <a
                  href="https://light-bubbler-736.notion.site/Interview-Preparation-8cf5bc808f58470481cf004e6005f006?pvs=74"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiNotionFill className="social-media-icon" />
                </a>
              </div>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
      <div className="social-media">
        <ul className="social-media-desktop gap-4">
          <li>
            <a
              href="https://github.com/vikasdev66/interview-projects.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare className="social-media-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://light-bubbler-736.notion.site/Interview-Preparation-8cf5bc808f58470481cf004e6005f006?pvs=74"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiNotionFill className="social-media-icon" />
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
