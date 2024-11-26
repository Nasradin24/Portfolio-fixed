import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSun } from "@fortawesome/free-solid-svg-icons";
import "../css/Navbar.css";

const CustomNavbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleTitleClick = () => {
    navigate("/");
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="title">
      <span onClick={handleTitleClick} className="navbar-brand" style={{ cursor: "pointer", color: "#ffffff", fontSize: "32px", paddingTop: "5px" }}>
        Nasradin Guseinovi
      </span>

      <FontAwesomeIcon
        icon={faBars}
        className="menu-icon"
        onClick={toggleMenu}
      />

      <ul className={`navbar-list ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default CustomNavbar;
