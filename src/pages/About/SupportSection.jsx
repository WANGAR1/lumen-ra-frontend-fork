import React from 'react';
import './SupportSection.css';

const SupportSection = () => {
  return (
    <section className="support-container">
      <div className="support-content">
        <h2>Still Have Questions?</h2>
        <p>We're here to help! Reach out to our support team.</p>
        <button className="support-btn" onClick={() => 
            window.location.href = 'mailto:support@lumenra.com'}>
          Contact Support
        </button>
      </div>
    </section>
  );
};

export default SupportSection;