import React, { useState, useContext, useEffect } from "react";
import { Input } from "antd";
import { ProjectList } from "common/ProjectList";
import { ProjectListContext } from "context/ProjectListContext";
import { FaGithubSquare, FaSearch } from "react-icons/fa";
import { RiNotionFill } from "react-icons/ri";
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { NavList } from "./NavList";
import "./Navbar.css";

export function Navbar() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { setProjectListData } = useContext(ProjectListContext);
  const location = useLocation();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const search = e.target.value;
    setSearch(search.toLowerCase());
    setProjectListData(
      ProjectList.filter((project) =>
        project.name.toLowerCase().includes(search.toLowerCase())
      )
    );
    if (search !== "") {
      navigate(`/?search=${search}`);
      return;
    }
    navigate("/");
  };

  useEffect(() => {
    const searchedData = searchParams.get("search");
    setSearch(searchedData);
    if (searchedData !== null) {
      setProjectListData(
        ProjectList.filter((project) =>
          project.name.toLowerCase().includes(searchedData)
        )
      );
      return;
    }
    setProjectListData(ProjectList);
  }, []);
  return (
    <div className="navbar">
      <nav className="main-nav">
        <div className="logo">
          <Link to="/" state="Welcome to Interview Projects">
            <h2>REACT INTERVIEW PROJECT</h2>
          </Link>
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
      </nav>
      <nav className="secondary-nav">
        <ul className="flex">
          {NavList.map((list, index) => {
            const { path, navName, routeState } = list;
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
          {location.pathname === "/" && (
            <li className="search-input-li">
              <Input
                type="text"
                className="search-input"
                suffix={<FaSearch className="search-input-icon" />}
                placeholder="search project"
                value={search}
                onChange={handleSearch}
              />
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
