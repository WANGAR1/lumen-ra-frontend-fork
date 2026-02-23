import React from "react";
import "./WhyThisMattersSection.css";

const WhyThisMatters = () => {
  return (
    <section className="why-matters">
      <div className="why-matters-container">
        
        <div className="where-box">
          <h3>Where This Happens</h3>
          <p>
            These challenges occur primarily within personal relationships,
            workplaces, and informal social settings, where men are often the
            first point of disclosure.
          </p>
        </div>

        <div className="matters-content">
          <h2>Why This Matters</h2>

          <p>
            The problem is significant because men show{" "}
            <span className="highlight">
              strong willingness to support women
            </span>
            , yet the absence of accessible, male-focused educational tools
            prevents them from providing effective, informed support. Without
            intervention, this knowledge–action gap{" "}
            <span className="bold">
              undermines men's potential role
            </span>{" "}
            in promoting gender equality and trauma-informed care.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyThisMatters;