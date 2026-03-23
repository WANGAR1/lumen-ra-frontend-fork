import React from 'react';
import './CallToAction.css';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className="cta-page-wrapper">
      <section className="cta-card">
        <h2 className="cta-title">Start Building Real Allyship Skills Today</h2>
        
        <p className="cta-subtitle">
          Join the Digital Allyship Toolkit and gain the skills to support women safely and confidently
        </p>

        <div className="cta-button-group">

           <Link to= "/Signup">
          <button className="btn-get-started">
            Get Started
          </button>
          </Link>

          <Link to= "/PersonalityCheck">
          <button className="btn-confidence-check">
            Take Confidence Check
          </button>
           </Link>
        </div>
      </section>
    </div>
  );
};

export default CallToAction;