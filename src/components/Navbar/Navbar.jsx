import React, { useState } from "react";
import { FaGithubSquare } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiNotionFill } from "react-icons/ri";
import { NavLink, Link } from "react-router-dom";
import { NavList } from "./NavList";
import "./Navbar.css";

export function Navbar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const handleShowMedia = () => {
    setShowMediaIcons(!showMediaIcons);
  };
  return (
    <nav className="main-nav">
      <div className="logo">
        <Link to="/" state="Welcome to Interview Projects">
          <h2>React Interview Projects</h2>
        </Link>
      </div>
      <div
        className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}
      >
        <ul>
          {NavList.map((list, index) => {
            const { path, navName, routeState } = list;
            console.log({routeState});
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  state={{ routeState }}
                  className={(isActive) =>
                    `${isActive.isActive ? "isActiveNav" : ""} navLink`
                  }
                >
                  {navName}
                </NavLink>
              </li>
            );
          })}
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
              showMediaIcons ? "hamburger-menu-icon-rotate" : ""
            }`}
            onClick={handleShowMedia}
          />
        </div>
      </div>
    </nav>
  );
}
