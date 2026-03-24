import React from 'react';
import { useNavigate } from 'react-router-dom';
import './IntroGBV.css';
import routes from '../../utils/routes';

// Import your specific SVG asset
import gbvHeroImg from "../../assets/Supportive female interaction.svg";

const IntroGBV = () => {
  const navigate = useNavigate();

  // Function to handle the Emergency exit (optional but recommended for GBV apps)
  const handleQuickExit = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div className="gbv-module-container">
      
      {/* --- TOP NAVIGATION --- */}
      <nav className="module-top-nav">
        <div className="nav-left">
          <span className="active" onClick={() => navigate(routes.ModulesPage)}>Modules</span>
          <span>Resources</span>
          <span>Support</span>
        </div>
        <div className="nav-right">
          <div className="user-profile-circle" title="Profile Settings">👤</div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="gbv-hero">
        <div className="hero-content">
          <div className="module-badge">
             <span className="icon">📖</span> MODULE 01 • INTRODUCTORY
          </div>
          <h1 className="hero-title">
            Understanding <br />
            <span className="highlight-text">Gender-Based Violence</span>
          </h1>
          <p className="hero-description">
            Gender-based violence (GBV) is a profound violation of human rights 
            that disproportionately affects women and marginalized identities. 
            This module provides a supportive, safe space to examine its systemic 
            roots, various forms, and the critical pathways toward healing.
          </p>
          <button className="start-lesson-btn" onClick={() =>navigate(routes.GBVLesson1)}>
            Start First Lesson <span className="arrow">→</span>
          </button>
        </div>

        <div className="hero-visual">
          <div className="main-image-wrapper">
            <img src={gbvHeroImg} alt="Supportive female interaction" />
            
            {/* Glassmorphism Floating Card */}
            <div className="glass-info-card">
              <div className="shield-box">🛡️</div>
              <div className="glass-text">
                <strong>A Digital Toolkit</strong>
                <p>Confidential and supportive environment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- OBJECTIVES GRID --- */}
      <section className="objectives-section">
        <div className="objective-card">
          <div className="obj-icon">👁️</div>
          <h3>Recognize Patterns</h3>
          <p>Identify the diverse forms of GBV, including emotional, economic, and physical abuse, and recognize early warning signs.</p>
        </div>

        <div className="objective-card">
          <div className="obj-icon">🧠</div>
          <h3>Unpack Root Causes</h3>
          <p>Understand the intersectional power dynamics, societal norms, and systemic structures that perpetuate cycles of violence.</p>
        </div>

        <div className="objective-card">
          <div className="obj-icon">🤝</div>
          <h3>Empowered Response</h3>
          <p>Gain practical knowledge on safe interventions, supporting survivors, and accessing specialized resource networks.</p>
        </div>
      </section>

      {/* --- SAFETY ALERT BANNER --- */}
      <div className="safety-alert-wrapper">
        <div className="safety-pill">
          <div className="safety-icon-box">🛡️</div>
          <div className="safety-content">
            <strong>Safety First</strong>
            <p>This content may be difficult. You can use the Quick Exit button at any time to hide this screen. Your progress is saved privately.</p>
          </div>
        </div>
      </div>

      {/* --- STATIC PILL FOOTER (MATCHES IMAGE) --- */}
      <footer className="module-footer-nav-static">
        
        {/* Overview: Active State with Side-by-Side layout */}
        <div 
          className="footer-btn overview active" 
          onClick={() => navigate(routes.ModulesPage)}
        >
          <span className="icon">←</span>
          <span>OVERVIEW</span>
        </div>

        {/* Previous: Icon on Top layout */}
        <div className="footer-btn">
          <span className="nav-arrow">‹</span>
          <span>PREVIOUS</span>
        </div>

        {/* Next: Icon on Top layout */}
        <div className="footer-btn">
          <span className="nav-arrow">›</span>
          <span>NEXT</span>
        </div>

        {/* Emergency: Vertical stack with red coloring */}
        <div className="footer-btn emergency" onClick={handleQuickExit}>
          <span className="icon">🚨</span>
          <span>EMERGENCY</span>
        </div>

      </footer>
    </div>
  );
};

export default IntroGBV;