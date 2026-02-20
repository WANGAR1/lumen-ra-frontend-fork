import React from "react";
import "./StatsBadge.css";

const StatsBadge = () => {
  return (
    <>
      <div className="stats-item badge-95p">
        <span className="stat-number">95%</span>
        <span className="stat-label">Positive Feedback</span>
      </div>

      <div className="stats-item badge-120k">
        <span className="stat-number">120K</span>
        <span className="stat-label">Male Allyship</span>
      </div>

      <div className="stats-item badge-70p">
        <span className="stat-number">70%</span>
        <span className="stat-label">Trauma Awareness</span>
      </div>
    </>
  );
};

export default StatsBadge;