import React from "react";
import "./PersonalityCheck.css";

const PersonalityCheck = () => {
  return (
    <section className="personality">
      <div className="personality-container">
        <h2>Personality Check</h2>
        <p className="subtitle">
          Let's understand your goal so as to create a personalised roadmap
        </p>
        <p className="step">Step 1 of 4</p>

        <div className="question-block">
          <label htmlFor="gbv-input">
            How familiar are you with gender-based violence (GBV)?
          </label>
          <input
            id="gbv-input"
            type="text"
            placeholder="Type your response here"
          />
        </div>

        <button className="next-btn">Next</button>
      </div>
    </section>
  );
};

export default PersonalityCheck;