import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GBVLesson3.css';
import routes from '../../utils/routes';

const GBVLesson3 = () => {
  const navigate = useNavigate();

  const patterns = [
    {
      title: "Emotional",
      icon: "🧠",
      color: "teal",
      desc: "Persistent criticism, gaslighting, isolation from friends and family, and making you feel responsible for their behavior.",
      bullets: ["Constant belittling", "Extreme jealousy"]
    },
    {
      title: "Economic",
      icon: "💳",
      color: "blue",
      desc: "Restricting access to finances, preventing employment, or controlling how every cent is spent to maintain dependency.",
      bullets: ["Withholding money", "Stealing identity"]
    },
    {
      title: "Physical",
      icon: "⚠️",
      color: "orange",
      desc: "Any use of force that causes pain or injury, including threats, blocking exits, or damaging property to intimidate.",
      bullets: ["Physical intimidation", "Restraint or injury"]
    }
  ];

  return (
    <div className="lesson-page-container">
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

      <header className="lesson-header">
        <div className="header-top">
          <div className="module-info">
            <span className="module-label">LESSON 3 OF 5</span>
            <h1 className="lesson-main-title">Recognizing Patterns of Abuse</h1>
          </div>
          <div className="progress-percentage">60%</div>
        </div>
        <div className="progress-bar-container">
          <div className="progress-fill" style={{ width: '60%' }}></div>
        </div>
      </header>

      <main className="lesson-content-wide">
        <div className="intro-text-box">
          <p>Abuse is not always visible. It often manifests as a series of calculated patterns designed to establish power and control. By identifying these diverse forms—emotional, economic, and physical—we can begin to dismantle the cycle and seek the necessary support.</p>
        </div>

        {/* --- Pattern Cards Grid --- */}
        <div className="patterns-grid">
          {patterns.map((p, i) => (
            <div key={i} className="pattern-card">
              <div className={`icon-circle ${p.color}`}>{p.icon}</div>
              <h3>{p.title}</h3>
              <p className="pattern-desc">{p.desc}</p>
              <div className="pattern-divider"></div>
              <ul className="pattern-bullets">
                {p.bullets.map((b, j) => (
                  <li key={j}><span className="check-circle">✔</span> {b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* --- Agency Banner --- */}
        <section className="agency-banner">
          <div className="agency-text">
            <h2>It is not your fault.</h2>
            <p>Patterns of abuse are designed to confuse and disorient. Recognizing them is the first courageous step toward reclaiming your agency. You deserve a life free from control and fear.</p>
            <button className="text-link-btn">View Emergency Resources →</button>
          </div>
          <div className="shield-bg-icon">🛡️</div>
        </section>

        <div className="action-footer">
          <button className="mark-complete-btn-large">Mark as Complete</button>
          <p className="next-hint">Ready for Lesson 4: Safety Planning</p>
        </div>
      </main>

      <footer className="module-footer-nav-static">
        <div className="footer-btn" onClick={() => navigate(routes.ModulesPage)}>
          <span className="icon">←</span>
          <span>OVERVIEW</span>
        </div>
        <div className="footer-btn" onClick={() => navigate(routes.GBVLesson2)}>
          <span className="nav-arrow">‹</span>
          <span>PREVIOUS</span>
        </div>
        <div className="footer-btn next-active" onClick={() => navigate(routes.GBVLesson4)}>
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

export default GBVLesson3;