import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GBVLesson5.css';
import routes from '../../utils/routes';
import archImg from "../../assets/Supportive environment.svg"; 

const GBVLesson5 = () => {
  const navigate = useNavigate();

  const handleCompleteModule = () => {
    navigate('/certificate');
  };

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
      <header className="lesson-header-v5">
        <div className="header-content-v5">
          <span className="lesson-tag">LESSON 5 OF 5</span>
          <h1>An Empowered Response</h1>
          <p className="subtitle">The final step in our journey focuses on fostering resilience, establishing safety protocols, and connecting with the networks that sustain long-term healing.</p>
          
          <div className="progress-section-v5">
            <div className="progress-text-v5">
              <span>MODULE PROGRESS</span>
              <span>100% COMPLETE</span>
            </div>
            <div className="progress-bar-v5">
              <div className="progress-fill-v5" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>

        <div className="header-image-v5">
          <img src={archImg} alt="Supportive environment" />
          <div className="floating-safety-card">
            <span className="shield-icon-v5">🛡️</span>
            <strong>Safety as Foundation</strong>
            <p>Empowerment begins with the unwavering assurance of your personal space and mental peace.</p>
          </div>
        </div>
      </header>

      {/* --- Action & Safety Grid --- */}
      <section className="action-grid-v5">
        <div className="safety-guide-card">
          <h3><span>✱</span> Safety First</h3>
          <p>If you are in immediate danger, please prioritize your physical safety above all else. Your browser history and digital footprint can be sensitive; use "Quick Exit" or Private Browsing when navigating sensitive resources.</p>
          
          <div className="safety-contacts-v5">
            <div className="contact-pill">
              <span className="pill-icon">📞</span>
              <div>
                <strong>24/7 Helpline</strong>
                <p>Confidential support anytime.</p>
              </div>
            </div>
            <div className="contact-pill">
              <span className="pill-icon">🏠</span>
              <div>
                <strong>Safe Spaces</strong>
                <p>Locate nearest verified shelters.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="action-steps-card">
          <h3>Action Steps</h3>
          <ul className="steps-list">
            <li><span className="step-num">1</span> Identify three trusted individuals for your safety circle.</li>
            <li><span className="step-num">2</span> Document important events in a secure, encrypted digital vault.</li>
            <li><span className="step-num">3</span> Review the legal resource directory for your specific region.</li>
            <li><span className="step-num">4</span> Establish a "Safe Phrase" with your emergency contacts.</li>
          </ul>
        </div>
      </section>

      {/* --- Resource Networks --- */}
      <section className="resource-networks-v5">
        <div className="resource-header">
          <h2>Resource Networks</h2>
          <p>A curated directory of organizations dedicated to your well-being.</p>
          <button className="directory-btn">View Full Directory</button>
        </div>

        <div className="networks-grid">
          <div className="network-item">
            <span className="network-tag">LEGAL ADVOCACY</span>
            <h4>Women's Rights Initiative</h4>
            <p>Pro-bono legal consultation and representation for survivor-centered cases.</p>
            <button className="visit-link">Visit Network ↗</button>
          </div>

          <div className="network-item">
            <span className="network-tag">MENTAL HEALTH</span>
            <h4>The Healing Circle</h4>
            <p>Trauma-informed therapy sessions and peer-led support communities.</p>
            <button className="visit-link">Visit Network ↗</button>
          </div>

          <div className="network-item">
            <span className="network-tag">FINANCIAL SECURITY</span>
            <h4>Independence Fund</h4>
            <p>Micro-grants and financial planning tools to ensure physical autonomy.</p>
            <button className="visit-link">Visit Network ↗</button>
          </div>
        </div>
      </section>

      {/* --- Module Complete Area --- */}
      <div className="completion-zone">
        <div className="check-badge">✔</div>
        <h2>Module Complete</h2>
        <p>You have successfully navigated through all five lessons of this module. Your journey toward empowerment is an ongoing process, and we are here to support every step of it.</p>
        
        <button className="complete-btn" onClick={handleCompleteModule}>
          Complete Module
        </button>
      </div>

      {/* FOOTER REMOVED FROM HERE */}
    </div>
  );
};

export default GBVLesson5;