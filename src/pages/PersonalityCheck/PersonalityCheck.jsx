import React, { useState } from "react";
import "./personalityCheck.css";

const PersonalityCheck = () => {
  const [step, setStep] = useState(1);

  return (
    <section className="personality-check">
      <h2>Personality Check</h2>

      <div className="progress">
        <span>Step {step} of 4</span>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      </div>

      <label>
        How familiar are you with gender-based violence (GBV)?
      </label>

      <input
        type="text"
        placeholder="Type your response here"
      />

      <button onClick={() => setStep(step + 1)}>Next</button>
    </section>
  );
};

export default PersonalityCheck;