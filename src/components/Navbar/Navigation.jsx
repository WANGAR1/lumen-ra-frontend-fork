{/* =================Navigation and Routing================== */}
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./Navigation.css"
import Button from "../Buttons/Button";
import routes from "../../utils/routes";

const Navigation = ()=> {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
<nav className="navbar">
  <div className="container">
    <div className="navbar-left">
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        ☰
      </button>
      <div className={`mobile-dropdown ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li><NavLink to={routes.Home} onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to={routes.About} onClick={closeMenu}>About</NavLink></li>
          <li><NavLink to={routes.Progress} onClick={closeMenu}>Progress</NavLink></li>
          <li><NavLink to={routes.Toolkit} onClick={closeMenu}>Toolkit</NavLink></li>
        </ul>
      </div>
    </div>

    <div className="logo"><span>LUMEN-RA</span></div>

    <div className="navbar-right">
      <ul className="nav-links">
        <li><NavLink to={routes.Home} className={({ isActive }) => (isActive ? "active-link" : "")}>Home</NavLink></li>
        <li><NavLink to={routes.About} className={({ isActive }) => (isActive ? "active-link" : "")}>About</NavLink></li>
        <li><NavLink to={routes.Progress} className={({ isActive }) => (isActive ? "active-link" : "")}>Progress</NavLink></li>
        <li><NavLink to={routes.Toolkit} className={({ isActive }) => (isActive ? "active-link" : "")}>Toolkit</NavLink></li>
      </ul>
      <div className="actions">
        <NavLink to="/Login" onClick={closeMenu}>
          <Button label="Login" variant="secondary" />
        </NavLink>
        <NavLink to="/AIChatbot" onClick={closeMenu}>
          <Button label="Let's Chat" variant="primary" />
        </NavLink>
      </div>
    </div>
  </div>
</nav>
)
};

export default Navigation;