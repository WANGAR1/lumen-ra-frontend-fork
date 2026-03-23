import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Navigation.css";
import Button from "../Buttons/Button";
import routes from "../../utils/routes";
import logo from "../../assets/LOGO.svg"; 

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // --- Mobile-Only Auto-Close Logic ---
  useEffect(() => {
    let timer;
    
    // Check if menu is open AND if we are on a mobile/tablet screen size
    const isMobile = window.innerWidth <= 1024;

    if (isMenuOpen && isMobile) {
      timer = setTimeout(() => {
        setIsMenuOpen(false);
        console.log("Mobile menu auto-closed after 10s");
      }, 10000); 
    }

    return () => clearTimeout(timer);
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <div className="container">
        
        {/* LEFT: Burger & Logo */}
        <div className="navbar-left">
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            ☰
          </button>
          <NavLink to={routes.Home} className="logo-link">
            <img src={logo} alt="LUMEN-RA Logo" className="navbar-logo-img" />
          </NavLink>
        </div>

        {/* MIDDLE: Links */}
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li><NavLink to={routes.Home} onClick={closeMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>Home</NavLink></li>
          <li><NavLink to={routes.About} onClick={closeMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>About</NavLink></li>
          <li><NavLink to={routes.Progress} onClick={closeMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>Progress</NavLink></li>
          <li><NavLink to={routes.Toolkit} onClick={closeMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>Toolkit</NavLink></li>
        </ul>

        {/* RIGHT: Actions */}
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