import React from "react";
import "./HowItWorksSection.css";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="how-container">
        <h2 className="how-title">How It Works</h2>
        <div className="how-underline"></div>
        <p className="how-subtitle">
          Practical, Guided, and Self-Paced Learning
        </p>

        <div className="how-cards">
          <div className="how-card">
            <div className="icon teal">
              <span>📖</span>
            </div>
            <h3>Learn the Foundations</h3>
            <p>
              Expert-led modules on trauma awareness and communication skills
            </p>
          </div>

          <div className="how-card featured">
            <div className="icon orange">
              <span>📄</span>
            </div>
            <h3>Structured Learning Modules</h3>
            <p>
              Interactive situations to build your response skills
            </p>
          </div>

          <div className="how-card">
            <div className="icon teal">
              <span>✦</span>
            </div>
            <h3>Scenario-Based Simulation</h3>
            <p>
              Guides and tools for safe, supportive action
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
