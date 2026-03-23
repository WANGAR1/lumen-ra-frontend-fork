import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./Navigation.css";
import Button from "../Buttons/Button";
import routes from "../../utils/routes";
import logo from "../../assets/LOGO.svg"; 

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="container">
        
        {/* LEFT: Logo & Mobile Toggle */}
        <div className="navbar-left">
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            ☰
          </button>
          <NavLink to={routes.Home} className="logo-link">
            <img src={logo} alt="LUMEN-RA Logo" className="navbar-logo-img" />
          </NavLink>
        </div>

        {/* MIDDLE: Nav Links */}
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <NavLink to={routes.Home} onClick={closeMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.About} onClick={closeMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.Progress} onClick={closeMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>
              Progress
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.Toolkit} onClick={closeMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>
              Toolkit
            </NavLink>
          </li>
        </ul>

        {/* RIGHT: Buttons */}
        <div className="navbar-actions">
          <NavLink to="/Login">
            <Button label="Login" variant="secondary" />
          </NavLink>
          <NavLink to="/AIChatbot">
            <Button label="Let's Chat" variant="primary" />
          </NavLink>
        </div>

      </div>
    </nav>
  );
};

export default Navigation;