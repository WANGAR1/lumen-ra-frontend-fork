import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GBVLesson2.css';
import routes from '../../utils/routes';


const GBVLesson2 = () => {
  const navigate = useNavigate();

  const comparisons = [
    {
      myth: "Violence only happens to certain types of people or in specific communities.",
      reality: "GBV knows no boundaries. It affects individuals regardless of socioeconomic status, race, age, religion, or education level."
    },
    {
      myth: "If it was that bad, they would just leave the situation immediately.",
      reality: "Leaving is often the most dangerous time. Barriers like financial dependence, fear of escalation, and lack of support make leaving a complex process."
    },
    {
      myth: "Abuse is always physical; if there are no bruises, it isn't real violence.",
      reality: "Violence includes emotional, psychological, financial, and digital abuse. These forms can be just as damaging and are often precursors to physical harm."
    }
  ];

  return (
    <div className="lesson-page-container">
      {/* --- Top Nav (Reuse your existing component if possible) --- */}
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
            <span className="module-label">LESSON 2 OF 5</span>
          </div>
          <div className="progress-percentage">40% Complete</div>
        </div>
        <div className="progress-bar-container">
          <div className="progress-fill" style={{ width: '40%' }}></div>
        </div>
      </header>

      {/* --- Main Content --- */}
      <main className="lesson-main-centered">
        <section className="intro-card">
          <h1>Myths vs. Realities</h1>
          <p>Understanding Gender-Based Violence starts with dismantling the harmful misconceptions that prevent healing and justice.</p>
        </section>

        {/* --- Myths/Realities Grid --- */}
        <div className="comparison-grid">
          {comparisons.map((item, index) => (
            <React.Fragment key={index}>
              <div className="card myth-card">
                <div className="card-header">
                  <span className="status-icon">ⓧ</span> THE MYTH
                </div>
                <p>"{item.myth}"</p>
              </div>
              <div className="card reality-card">
                <div className="card-header">
                  <span className="status-icon">✔</span> THE REALITY
                </div>
                <p>{item.reality}</p>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* --- Summary Action Card --- */}
        <section className="summary-action-card">
          <div className="sparkle-icon">✨</div>
          <h3>The Truth Empowers Us</h3>
          <p>By challenging these myths, we remove the stigma that silences survivors. Remember: violence is never the fault of the person experiencing it, and there is never an excuse for abusive behavior.</p>
          <button className="mark-complete-btn">
            Mark as Complete <span className="check">✔</span>
          </button>
        </section>
      </main>

      {/* --- Footer Nav --- */}
      <footer className="module-footer-nav-static">
        <div className="footer-btn" onClick={() => navigate(routes.ModulesPage)}>
          <span className="icon">←</span>
          <span>OVERVIEW</span>
        </div>
        <div className="footer-btn" onClick={() => navigate(routes.GBVLesson1)}>
          <span className="nav-arrow">‹</span>
          <span>PREVIOUS</span>
        </div>
        <div className="footer-btn next-active" onClick={() => navigate(routes.GBVLesson3)}>
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

export default GBVLesson2;
