import React from "react";
import "./ProblemSection.css";

const ProblemSection = () => {
  return (
    <section className="problem-section">
      <div className="problem-container">
        <h2 className="problem-title">The Problem: Key Action Gap</h2>
        <div className="problem-underline"></div>

        <div className="problem-box">
          <p>
            Despite high awareness of gender-based violence among men aged
            16–40, many lack the{" "}
            <span className="highlight">
              practical skills, trauma-informed knowledge, and structured
              guidance
            </span>{" "}
            required to respond appropriately when women disclose experiences
            of violence or health-related distress.
          </p>

          <p>
            As informal first respondents, their uncertainty and reliance on
            unstructured advice can lead to{" "}
            <strong>inconsistent or potentially harmful support.</strong> There
            is currently no accessible, skill-based digital platform
            specifically designed to equip men with the confidence and tools
            needed for safe and informed allyship.
          </p>
          </div>

          <div className="problem-cards">
          <div className="problem-card">
            <div className="icon orange">△</div>
            <h3>Fear of Harm</h3>
            <p>
              Fear of saying the wrong thing or causing harm prevents many men
              from offering support when it's needed most.
            </p>
            </div>

            <div className="problem-card">
            <div className="icon teal">💬</div>
            <h3>
              Unclear <br /> Boundaries
            </h3>
            <p>
              Over-reliance on informal advice-giving without clear boundaries
              on what constitutes appropriate support.
            </p>
            </div>

            <div className="problem-card">
            <div className="icon orange">↗</div>
            <h3>
              Limited <br /> Understanding
            </h3>
            <p>
              Limited understanding of when and how to escalate or refer to
              professional support services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
