import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import './ModulesPage.css';

// Mapping your specific SVG assets
import gbvImg from "../../assets/motion.img.svg"; 
import allyImg from "../../assets/image.svg";
import womensImg from "../../assets/Womens.svg"; 
import emotionsImg from "../../assets/emotions.svg";
import traumaImg from "../../assets/trauma.svg";
import appropriateImg from "../../assets/appropriate.svg";
import certImg from "../../assets/cert.svg";

const ModulesPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const navigate = useNavigate(); // 2. Initialize the navigate function

  const modules = [
    { 
      id: 1, 
      title: "Understanding Gender-Based Violence", 
      img: gbvImg, 
      time: "20 min", 
      category: "Foundational",
      path : "/IntroGBV", // This must match routes.IntroGBV in your App.jsx
      desc: "Learn about GBV, myths vs realities, and its impact on women." 
    },
    { 
      id: 2, 
      title: "The Role of an Ally", 
      img: allyImg, 
      time: "15 min", 
      category: "Practical Allyship Guides",
      desc: "Understand the women's health challenges, its emotional and physical impact." 
    },
    { 
      id: 3, 
      title: "Women's non-clinical challenges", 
      img: womensImg, 
      time: "20 min", 
      category: "Scenario-Based",
      desc: "Set boundaries, and challenging disclosures." 
    },
    { 
      id: 4, 
      title: "Emotional safety principles", 
      img: emotionsImg, 
      time: "20 min", 
      category: "Multimedia",
      desc: "Practice active listening and creating a safe and supportive space." 
    },
    { 
      id: 5, 
      title: "Trauma awareness", 
      img: traumaImg, 
      time: "15 min", 
      category: "Scenario-Based",
      desc: "Engage in interactive scenarios, aid and make efficiently." 
    },
    { 
      id: 6, 
      title: "Appropriate response to disclosure", 
      img: appropriateImg, 
      time: "20 min", 
      category: "Emergency",
      desc: "Provide immediate, safe support when harm is disclosed." 
    },
  ];

  const filteredModules = modules.filter(m => 
    activeFilter === 'All' || m.category === activeFilter
  );

  return (
    <div className="modules-page-wrapper">
      
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

      <section className="toolkit-controls">
        <div className="search-container">
          <span className="icon-search">🔍</span>
          <input type="text" placeholder="Search" className="main-search" />
        </div>

        <div className="filter-row">
          {['All', 'Scenario-Based', 'Practical Allyship Guides', 'Multimedia', 'Emergency'].map((cat) => (
            <button 
              key={cat}
              className={`pill-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="progress-tracker">
          <button className="track-btn">Track your progress ➔</button>
        </div>
      </section>

      <section className="sub-nav-bar">
        <div className="sub-nav-top">
          <h3 className="section-title">Modules ({filteredModules.length})</h3>
          <div className="tag-indicators">
            <span>Expert-reviewed</span>
            <span>Scenario-Based</span>
            <span>Self-paced</span>
          </div>
        </div>
      </section>

      <main className="modules-grid">
        {filteredModules.map((m) => (
          <div key={m.id} className="module-card">
            <div className="card-image-box">
              <img src={m.img} alt={m.title} className="card-thumb" />
            </div>
            <div className="card-content">
              <h4>{m.title}</h4>
              <p>{m.desc}</p>
              <div className="card-footer">
                <span className="duration-text">{m.time}</span>
                {/* 3. Added the onClick handler here */}
                <button 
                  className="btn-start-module"
                  onClick={() => m.path ? navigate(m.path) : alert("Module coming soon!")}
                >
                  Start Module
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>

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