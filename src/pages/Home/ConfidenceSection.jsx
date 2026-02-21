 {/* ==================Confidence Section================== */}
 
import React from "react";
import "./ConfidenceSection.css";
import StatsBadge from "../../components/StatsBadge/StatsBadge";
import Button from "../../components/Buttons/Button";
import ConfidenceImage from "../../assets/HomeImages/handsimage.svg";

const ConfidenceSection = () => {
  return (
    <section className="confidence">
      <div className="confidence-container">
        <div className="confidence-left">
          <h2>10x Your Confidence to <span>Support Women</span> with Practical Skills</h2>
          <p>
            Learn actionable techniques to boost your confidence and 
            enhance your digital allyship skills.
          </p>
          <Button label="Take the Quiz" variant="quiz" />
        </div>

        <div className="confidence-right">
          <img src={ConfidenceImage} alt="Confidence illustration" />
          <div className="stats-badge-container">
            <StatsBadge />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfidenceSection;