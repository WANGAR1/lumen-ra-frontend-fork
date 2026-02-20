import React from "react";
import "./TestingSection.css";
import TestImage from "../../assets/HomeImages/testingimage.svg"; 
import Icon1 from "../../assets/HomeImages/icon1.svg"; 
import Icon2 from "../../assets/HomeImages/icon2.svg";
import Icon3 from "../../assets/HomeImages/icon3.svg";
import Icon4 from "../../assets/HomeImages/icon4.svg";

const TestingSection = () => {
  return (
    <section className="testing">
      <div className="testing-container">

        {/* ===============Top heading description============== */}
        <div className="testing-top">
          <h2>Testing</h2>
          <p>
            To advance gender equality by transforming willing but under prepared
            men into informed, trauma-aware allies who provide safe, responsible,
            and non-clinical support in real-world health and GBV disclosure
            situations.
          </p>
        </div>

        {/* ================Circular icons======================== */}
        <div className="testing-icons">
          <div className="icon-circle">
            <img src={Icon1} alt="Icon 1" />
          </div>
          <div className="icon-circle">
            <img src={Icon2} alt="Icon 2" />
          </div>
          <div className="icon-circle">
            <img src={Icon3} alt="Icon 3" />
          </div>
          <div className="icon-circle">
            <img src={Icon4} alt="Icon 4" />
          </div>
        </div>

        {/* ======================Supporting image==================== */}
        <div className="testing-image">
          <img src={TestImage} alt="Testing scenario" />
        </div>
      </div>
    </section>
  );
};

export default TestingSection;