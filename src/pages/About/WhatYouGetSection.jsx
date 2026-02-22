import React from "react";
import "./WhatYouGetSection.css";

const WhatYouGet = () => {
  return (
    <section className="what-you-get">
      <div className="what-container">
        <h2 className="what-title">What You'll Get</h2>

        <div className="what-grid">
          <div className="what-item">
            <div className="check-icon">✓</div>
            <div>
              <h4>Video-Based Lessons</h4>
              <p>Expert guidance on trauma-informed support</p>
            </div>
          </div>

          <div className="what-item">
            <div className="check-icon">✓</div>
            <div>
              <h4>Interactive Scenarios</h4>
              <p>Practice real-world support situations</p>
            </div>
          </div>

          <div className="what-item">
            <div className="check-icon">✓</div>
            <div>
              <h4>Instant Feedback</h4>
              <p>Learn from your responses in real-time</p>
            </div>
          </div>

          <div className="what-item">
            <div className="check-icon">✓</div>
            <div>
              <h4>Progress Tracking & Certification</h4>
              <p>Track your journey and earn recognition</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;