import React from "react";
import "./HeroSection.css";
import StatsBadge from "../../components/StatsBadge/StatsBadge";
import Button from "../../components/Buttons/Button";
import { Link } from "react-router-dom"; 
import HeroImage from "../../assets/WhyLumenraImages/heroimage.svg";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        
        {/* =========================Left column==================== */}
        <div className="hero-left">
          <h2>Digital Allyship Toolkit for Men To Support Women</h2>
          <p>
            We are a web-based educational platform designed to equip men with
            practical skills, knowledge, and confidence to support women
            experiencing non-clinical health-related distress and during
            recovery following disclosures of gender-based violence (GBV).
          </p>
          <div className="hero-buttons">
            <Link to= '/Signup'>
            <Button label="Get Started" variant="started" />
            </Link>

            <Button label="Personality Check" variant="check" />
          </div>
          </div>

          {/*==================== Right column with image============= */}
          <div className="hero-right">
          <img src={HeroImage} alt="Hero illustration" />
          <div className="stats-badge-container">
            <StatsBadge />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;