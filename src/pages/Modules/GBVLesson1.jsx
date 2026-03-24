import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GBVLesson1.css';
import routes from '../../utils/routes';
import lessonImg from "../../assets/Subtle supportive background.svg"; // Use your bulb image here

const GBVLesson1 = () => {
  const navigate = useNavigate();

  return (
    <div className="lesson-page-container">
      {/* --- Top Nav --- */}
      <nav className="module-top-nav">
        <div className="nav-left">
          <span className="active">Modules</span>
          <span>Resources</span>
          <span>Support</span>
        </div>
        <div className="nav-right">
          <div className="user-profile-circle">👤</div>
        </div>
      </nav>

      {/* --- Progress Header --- */}
      <header className="lesson-header">
        <div className="header-top">
          <div className="module-info">
            <span className="module-label">MODULE: UNDERSTANDING GBV</span>
            <h2 className="lesson-count">Lesson 1 of 5</h2>
          </div>
          <div className="progress-percentage">20% Complete</div>
        </div>
        <div className="progress-bar-container">
          <div className="progress-fill" style={{ width: '20%' }}></div>
        </div>
      </header>

      {/* --- Main Content Grid --- */}
      <main className="lesson-main">
        <div className="lesson-text-column">
          <h1>What is Gender-Based Violence?</h1>
          <p>
            Gender-based violence (GBV) is a harmful act that is perpetrated against a 
            person's will and that is based on socially ascribed (gender) differences between 
            males and females. It includes acts that inflict physical, sexual, or mental harm or 
            suffering, threats of such acts, coercion, and other deprivations of liberty.
          </p>
          <p>
            While GBV can affect anyone, it disproportionately impacts women and girls 
            globally. This disparity is rooted in structural inequalities and power imbalances 
            between genders that have been historical and systemic.
          </p>

          {/* Key Understanding Box */}
          <div className="key-understanding-box">
            <div className="info-icon">ⓘ</div>
            <div className="info-content">
              <strong>Key Understanding</strong>
              <p>GBV is not just physical. It encompasses emotional, economic, and digital forms of abuse, all of which are used to maintain power and control over another individual.</p>
            </div>
          </div>
        </div>

        <div className="lesson-visual-column">
          <div className="lesson-image-wrapper">
            <img src={lessonImg} alt="Conceptual lightbulbs" />
          </div>
          <div className="quote-box">
            <span className="quote-mark">“</span>
            <p>"Awareness is the first step toward sanctuary. By defining the shadows, we find the strength to step into the light."</p>
            <cite>— Lumen_Ra Editorial Team</cite>
          </div>
        </div>
      </main>

      {/* --- FOOTER NAV (Next is now Active) --- */}
      <footer className="module-footer-nav-static">
        <div className="footer-btn" onClick={() => navigate(routes.ModulesPage)}>
          <span className="icon">←</span>
          <span>OVERVIEW</span>
        </div>

        <div className="footer-btn">
          <span className="nav-arrow">‹</span>
          <span>PREVIOUS</span>
        </div>

        <div className="footer-btn next-active" onClick={() => navigate(routes.GBVLesson2)}>
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

export default GBVLesson1;