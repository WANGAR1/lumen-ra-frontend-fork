import React from 'react';
import './ModulesPage.css';

// Importing the SVGs from your assets folder
import moduleImg from "../../assets/image.svg"; 
import certImg from "../../assets/cert.svg";

const ModulesPage = () => {
  const modules = [
    { id: 1, title: "Understanding Gender-Based Violence", time: "20 min", desc: "Learn about GBV, myths vs realities, and its impact on women." },
    { id: 2, title: "The Role of an Ally", time: "15 min", desc: "Understand the women's health challenges, its emotional and physical impact." },
    { id: 3, title: "Women's non-clinical challenges", time: "20 min", desc: "Set boundaries, and challenging disclosures." },
    { id: 4, title: "Emotional safety principles", time: "20 min", desc: "Practice active listening and creating a safe and supportive space." },
    { id: 5, title: "Trauma awareness", time: "15 min", desc: "Engage in interactive scenarios, aid and make efficiently." },
    { id: 6, title: "Appropriate response to disclosure", time: "20 min", desc: "Provide immediate, safe support when harm is disclosed." },
  ];

  return (
    <div className="modules-page-wrapper">
      
      {/* --- HERO SECTION --- */}
      <header className="hero-section">
        <div className="hero-inner">
          <h1>Browse our Learning Modules</h1>
          <p>Foundational training to equip you with the skills, confidence, and awareness needed to respond safely and supportively.</p>
          <div className="hero-btns">
            <button className="btn-orange">Start Learning</button>
            <button className="btn-white-outline">View Modules</button>
          </div>
        </div>
      </header>

      {/* --- SEARCH & PRIMARY FILTERS --- */}
      <section className="toolkit-controls">
        <div className="search-container">
          <span className="icon-search">🔍</span>
          <input type="text" placeholder="Search" className="main-search" />
        </div>

        <div className="filter-row">
          <button className="pill-btn active">All</button>
          <button className="pill-btn">Scenario-Based</button>
          <button className="pill-btn">Practical Allyship Guides</button>
          <button className="pill-btn">Multimedia</button>
          <button className="pill-btn">Emergency</button>
        </div>

        <div className="progress-tracker">
          <button className="track-btn">Track your progress ➔</button>
        </div>
      </section>

      {/* --- SUB-NAV SECTION (Gray Bar) --- */}
      <section className="sub-nav-bar">
        <div className="sub-nav-top">
          <h3 className="section-title">Modules</h3>
          <div className="tag-indicators">
            <span>Expert-reviewed</span>
            <span>Scenario-Based</span>
            <span>Self-paced</span>
          </div>
        </div>
        <div className="filter-row secondary">
          <button className="pill-btn active">All</button>
          <button className="pill-btn">Partner NGOs</button>
          <button className="pill-btn">Gender Experts</button>
          <button className="pill-btn">GBV Experts</button>
          <button className="pill-btn">Academic Advisors</button>
          <button className="pill-btn">Referrals</button>
        </div>
      </section>

      {/* --- MODULES GRID --- */}
      <main className="modules-grid">
        {modules.map((m) => (
          <div key={m.id} className="module-card">
            <div className="card-image-box">
              <img src={moduleImg} alt={m.title} className="card-thumb" />
            </div>
            <div className="card-content">
              <h4>{m.title}</h4>
              <p>{m.desc}</p>
              <div className="card-footer">
                <span className="duration-text">{m.time}</span>
                <button className="btn-start-module">Start Module</button>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* --- GUIDED LEARNING JOURNEY (Blue-ish Section) --- */}
      <section className="learning-journey">
        <div className="journey-text">
          <h2>Guided Learning Journey, Flexible Learning Pace</h2>
          <ul className="journey-list">
            <li>Complete a short confidence check (optional)</li>
            <li>Choose any module to start with</li>
            <li>Earn a badge when you complete each module</li>
          </ul>
          <button className="btn-orange">Start Learning</button>
        </div>
        <div className="journey-visual">
          <img src={certImg} alt="Certificate Preview" className="cert-image-svg" />
        </div>
      </section>

      {/* --- FINAL ACTION BANNER --- */}
      <section className="action-banner">
        <h2>Transform Allyship from Intention to Action</h2>
        <p>Join the Digital Allyship Toolkit and gain the skills to support women safely and confidently</p>
        <div className="action-btns">
          <button className="btn-orange">Get Started</button>
          <button className="btn-white-outline">Take Confidence Check</button>
        </div>
      </section>

    </div>
  );
};

export default ModulesPage;