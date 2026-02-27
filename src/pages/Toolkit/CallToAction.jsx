import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import './CallToAction.css';

const CallToAction = () => {
  const navigate = useNavigate(); // 2. Initialize the navigate function

  return (
    <div className="cta-page-wrapper">
      <section className="cta-card">
        <h2 className="cta-title">Start Building Real Allyship Skills Today</h2>
        
        <p className="cta-subtitle">
          Join the Digital Allyship Toolkit and gain the skills to support women safely and confidently
        </p>

        <div className="cta-button-group">
          <button 
            className="btn-get-started"
            onClick={() => navigate('/signup')} // Optional: Navigate to signup
          >
            Get Started
          </button>
          
          <button 
            className="btn-confidence-check"
            onClick={() => navigate('/personalitycheck')} // 3. Link to your personality check route
          >
            Take Confidence Check
          </button>
        </div>
      </section>
    </div>
  );
};

export default CallToAction;