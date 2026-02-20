/* ------------------ Guides Section ------------------ */

import React from "react";
import "./GuidesSection.css";
import JoggingImage from "../../assets/GuidesImages/jogging.svg"; 
import VideoIcon from "../../assets/GuidesImages/videoicon.svg";
import ScenarioIcon from "../../assets/GuidesImages/scenarioicon.svg";
import FeedbackIcon from "../../assets/GuidesImages/feedbackicon.svg";
import ProgressIcon from "../../assets/GuidesImages/progressicon.svg";
import EqualityIcon from "../../assets/GuidesImages/equalityicon.svg";

const GuidesSection = () => {
  return (
    <section className="guides">
      <div className="guides-container">
        {/* Left Features */}
        <div className="guides-left">
          <h2>Practical, Guided, Self-Paced</h2>
          <ul className="guides-list">
            <li><img src={VideoIcon} alt="Video Lessons" /> Video-based Lessons</li>
            <li><img src={ScenarioIcon} alt="Interactive Scenarios" /> Interactive Scenarios</li>
            <li><img src={FeedbackIcon} alt="Instant Feedbacks" /> Instant Feedbacks</li>
            <li><img src={ProgressIcon} alt="Progress Tracking" /> Progress Tracking & Certification</li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="guides-right">
          <img src={JoggingImage} alt="Two people jogging" />
        </div>
      </div>

      {/* Tagline */}
      <div className="guides-tagline">
        <h3>Because Support can Shape Recovery.</h3>
        <p>
          Your response can make a difference. Equip yourself to foster healing,
          trust and equality.
        </p>
      </div>

      {/* Bottom Icons */}
      <div className="guides-bottom">
        <div className="guides-card">
          <img src={EqualityIcon}  alt="Safer Disclosures" />
          <p>Promotes Safer Disclosures</p>
        </div>
        <div className="guides-card">
          <img src={EqualityIcon}  alt="Responsible Allyship" />
          <p>Encourage Responsible Allyship</p>
        </div>
        <div className="guides-card">
          <img src={EqualityIcon} alt="Equality" />
          <p>Fosters Healing & Equality</p>
        </div>
      </div>
    </section>
  );
};

export default GuidesSection;
