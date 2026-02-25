import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <div className="cta-page-wrapper">
      <section className="cta-card">
        <h2 className="cta-title">Start Building Real Allyship Skills Today</h2>
        
        <p className="cta-subtitle">
          Join the Digital Allyship Toolkit and gain the skills to support women safely and confidently
        </p>

        <div className="cta-button-group">
          <button className="btn-get-started">
            Get Started
          </button>
          
          <button className="btn-confidence-check">
            Take Confidence Check
          </button>
        </div>
      </section>
    </div>
  );
};

export default CallToAction;