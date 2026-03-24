import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GBVLesson4.css';
import routes from '../../utils/routes';
import abstractImg from "../../assets/Abstract illustration representing systemic structures.svg"; // Your top right image
import gavelImg from "../../assets/Professional environment representing legal and systemic structures.svg"; // Your systemic barriers image

const GBVLesson4 = () => {
  const navigate = useNavigate();

  return (
    <div className="lesson-page-container">
      {/* --- Top Nav --- */}
      <nav className="module-top-nav">
        <div className="nav-left">
          <span className="active" onClick={() => navigate(routes.ModulesPage)}>Modules</span>
          <span>Resources</span>
          <span>Support</span>
        </div>
        <div className="nav-right">
          <div className="user-profile-circle">👤</div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <header className="lesson-header-v4">
        <div className="header-content-v4">
          <span className="lesson-tag">LESSON 4 OF 5</span>
          <h1>Unpacking the Root Causes</h1>
          <p className="subtitle">Exploring the intersectional power dynamics and systemic norms that perpetuate cycles of violence and inequality.</p>
          
          <div className="progress-section-v4">
            <div className="progress-text-v4">
              <span>OVERALL PROGRESS</span>
              <span>80%</span>
            </div>
            <div className="progress-bar-v4">
              <div className="progress-fill-v4" style={{ width: '80%' }}></div>
            </div>
          </div>
        </div>
        <div className="header-image-v4">
          <img src={abstractImg} alt="Abstract illustration" />
        </div>
      </header>

      {/* --- Middle Grid --- */}
      <section className="middle-content-v4">
        <div className="social-norms-card">
          <div className="icon-box-teal">👥</div>
          <h3>Social Norms</h3>
          <p>Societal expectations often dictate how individuals should behave based on gender, creating environments where harmful behaviors are minimized or justified.</p>
          <ul className="check-list-v4">
            <li><span className="check-icon">✔</span> Normalization of aggressive behavior in certain contexts.</li>
            <li><span className="check-icon">✔</span> The reinforcement of binary gender roles through media and education.</li>
          </ul>
        </div>

        <div className="power-dynamics-card">
          <div className="icon-box-orange">⚖️</div>
          <h3>Power Dynamics</h3>
          <p>Power is not distributed equally. Intersectionality—the overlap of race, class, and gender—creates unique vulnerabilities.</p>
          <div className="critical-insight">
            <strong>CRITICAL INSIGHT</strong>
            <p>"True safety requires addressing the imbalances of influence in both private and public spheres."</p>
          </div>
        </div>
      </section>

      {/* --- Dark Systemic Barriers Section --- */}
      <section className="systemic-barriers-v4">
        <div className="barriers-text">
          <h2>Systemic Barriers</h2>
          <p>Legal, economic, and institutional systems often lack the frameworks needed to protect the most vulnerable or provide adequate paths to justice.</p>
          
          <div className="sub-barriers-grid">
            <div className="sub-barrier">
              <span className="mini-icon">⚖️</span>
              <h4>Legal Gaps</h4>
              <p>Outdated policies that fail to address modern safety concerns.</p>
            </div>
            <div className="sub-barrier">
              <span className="mini-icon">💰</span>
              <h4>Economic Dependence</h4>
              <p>Financial constraints that limit mobility and options.</p>
            </div>
          </div>
        </div>
        <div className="barriers-image">
          <img src={gavelImg} alt="Legal gavel and books" />
        </div>
      </section>

      {/* --- Action Area --- */}
      <div className="action-footer-v4">
        <button className="mark-complete-btn" onClick={() => console.log("Lesson 4 Complete")}>
          Mark as Complete <span className="check">✔</span>
        </button>
        <p className="next-hint">Ready for Lesson 5: The Path Forward</p>
      </div>

      {/* --- Footer Nav --- */}
      <footer className="module-footer-nav-static">
        <div className="footer-btn" onClick={() => navigate(routes.IntroGBV)}>
          <span className="icon">←</span>
          <span>OVERVIEW</span>
        </div>
        <div className="footer-btn" onClick={() => navigate(routes.GBVLesson3)}>
          <span className="nav-arrow">‹</span>
          <span>PREVIOUS</span>
        </div>
        <div className="footer-btn next-active" onClick={() => navigate(routes.GBVlesson5)}>
          <span className="nav-arrow">›</span>
          <span>NEXT</span>
        </div>
        <div className="footer-btn emergency" onClick={() => window.location.href = 'https://google.com'}>
          <span className="icon">🚨</span>
          <span>EMERGENCY</span>
        </div>
      </footer>
    </div>
  );
};

export default GBVLesson4;