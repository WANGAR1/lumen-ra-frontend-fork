import React from "react";
import "./VisionSection.css";

const VisionSection = () => {
  return (
    <section className="vision">
      <div className="vision-container">
        <h2>Vision & Mission</h2>
        <p className="vision-text">
          Our mission is to advance gender equality by transforming willing but
          underprepared men into informed, trauma‑aware allies who provide safe,
          responsible, and non‑clinical support in real‑world health and
          gender‑based violence (GBV) disclosure situations.
        </p>

        <div className="vision-grid">
          <div className="vision-card">
            <img src="/icons/book.svg" alt="Education" />
            <h3>Education</h3>
            <p>Building knowledge and awareness</p>
          </div>
          <div className="vision-card">
            <img src="/icons/lightning.svg" alt="Empowerment" />
            <h3>Empowerment</h3>
            <p>Transforming intentions into action</p>
          </div>
          <div className="vision-card">
            <img src="/icons/shield.svg" alt="Support" />
            <h3>Support</h3>
            <p>Safe and responsible allyship</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
