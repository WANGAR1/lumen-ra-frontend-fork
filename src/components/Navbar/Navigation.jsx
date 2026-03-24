import { NavLink, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext"; 
import "./Navigation.css";
import Button from "../Buttons/Button";
import routes from "../../utils/routes";
import logo from "../../assets/LOGO.svg"; 

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Access user state and logout function
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // Auto-close mobile menu logic
  useEffect(() => {
    let timer;
    const isMobile = window.innerWidth <= 1024;
    if (isMenuOpen && isMobile) {
      timer = setTimeout(() => setIsMenuOpen(false), 10000); 
    }
    return () => clearTimeout(timer);
  }, [isMenuOpen]);

  const handleLogout = () => {
    logout();
    closeMenu();
    navigate(routes.Home);
  };

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

          {/* --- CONDITIONAL LINK: Show Progress ONLY if user exists --- */}
          {user && (
            <li>
              <NavLink to={routes.Progress} onClick={closeMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>
                Progress
              </NavLink>
            </li>
          )}

          <li>
            <NavLink to={routes.Toolkit} onClick={closeMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>
              Toolkit
            </NavLink>
          </li>
        </ul>

        {/* RIGHT: Actions */}
        <div className="navbar-actions">
          {user ? (
            <Button 
              label="Logout" 
              variant="secondary" 
              onClick={handleLogout} 
            />
          ) : (
            <NavLink to="/Login">
              <Button label="Login" variant="secondary" />
            </NavLink>
          )}

          <NavLink to="/AIChatbot">
            <Button label="Let's Chat" variant="primary" />
          </NavLink>
        </div>

      </div>
    </nav>
  );
};

export default Navigation;