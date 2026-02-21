import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import routes from '../../utils/routes';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();
  
  // Logic to check if we are on the Home page
  const isHomePage = location.pathname === routes.Home || location.pathname === '/';

  return (
    <header className="nav-wrapper">
      <nav className="navbar-main">
        <div className="nav-container">
          {/* Logo area left empty as requested */}
          <div className="logo-placeholder"></div>

          <ul className="nav-links">
            <li><Link to={routes.Home} className={location.pathname === routes.Home ? 'active' : ''}>Home</Link></li>
            <li><Link to={routes.About} className={location.pathname === routes.About ? 'active' : ''}>About</Link></li>
            <li><Link to={routes.Toolkit} className={location.pathname === routes.Toolkit ? 'active' : ''}>Toolkit</Link></li>
            <li><Link to={routes.Progress} className={location.pathname === routes.Progress ? 'active' : ''}>Progress</Link></li>
          </ul>

          <div className="nav-actions">
            {isHomePage ? (
              <Link to={routes.Login} className="btn-outline">Log in</Link>
            ) : (
              <button className="btn-outline" onClick={() => console.log("Logging out...")}>Log out</button>
            )}
            <button className="btn-solid">Let's Chat</button>
          </div>
        </div>
      </nav>
      
      <div className="support-bar">
        <p>This platform provides educational support. For immediate help, please contact <span>+234-799-SAFE</span></p>
      </div>
    </header>
  );
};

export default Navigation;