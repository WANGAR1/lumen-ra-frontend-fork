import React from "react";
import "./ScenarioSection.css";
import NurseImage from "../../assets/Scenario/nurse.svg";
import DoctorImage from "../../assets/Scenario/doctor.svg";
import JoggingImage from "../../assets/Scenario/jogging.svg";

const ScenarioSection = () => {
  return (
    <section className="scenario">
      <div className="scenario-container">
        <h2>Experience Real Scenarios</h2>
        <div className="scenario-images">
          <img src={NurseImage} alt="Healthcare consultation" />
          <img src={DoctorImage} alt="Medical examination" />
          <img src={JoggingImage} alt="Physical activity" />
        </div>
      </div>
    </section>
  );
};

export default ScenarioSection;