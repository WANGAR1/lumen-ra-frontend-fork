import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Certificate.css';

const Certificate = () => {
  const navigate = useNavigate();
  
  // Use your real name or a fallback
  const userName = "Goodness Gibendi"; 
  const awardDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="certificate-page">
      <div className="cert-viewer-container">
        {/* The 95% Completion Badge in your screenshot */}
        <div className="completion-badge-orange">
          <span className="percent">95%</span>
          <span className="label">Completion<br/>Rate</span>
        </div>

        <div className="certificate-paper">
          {/* Floral Corner Ornaments */}
          <div className="corner top-left"></div>
          <div className="corner top-right"></div>
          <div className="corner bottom-left"></div>
          <div className="corner bottom-right"></div>

          <div className="cert-inner-border">
            {/* Top Shield Icon */}
            <div className="cert-top-icon">
              <div className="shield-embellishment">🛡️</div>
            </div>

            <h1 className="cert-main-title">Certificate of Completion</h1>
            <p className="cert-present-text">is hereby presented to</p>
            
            <h2 className="cert-recipient-name">{userName}</h2>
            
            <div className="cert-divider"></div>

            <p className="cert-description-text">
      For completing the <strong>Understanding Gender-Based Violence</strong> module, 
      demonstrating proficiency in identifying systemic root causes, recognizing 
      patterns of abuse, and implementing empowered response protocols.
    </p>

            <div className="cert-award-date">
              Awarded this <span className="date-line">{awardDate}</span>
            </div>

            <div className="cert-signatures-row">
              <div className="sig-block">
                <span className="sig-handwritten">Sofia Ramirez</span>
                <div className="sig-line"></div>
                <strong>Sofia Ramirez</strong>
                <span>Program Director</span>
              </div>

              <div className="gold-seal-container">
                <div className="gold-seal"></div>
              </div>

              <div className="sig-block">
                <span className="sig-handwritten">Jonathan Hale</span>
                <div className="sig-line"></div>
                <strong>Jonathan Hale</strong>
                <span>Lead Facilitator</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cert-actions no-print">
        <button className="print-btn" onClick={() => window.print()}>Download Certificate</button>
        <button className="back-btn" onClick={() => navigate('/Modules')}>Back to Dashboard</button>
      </div>
    </div>
  );
};

export default Certificate;