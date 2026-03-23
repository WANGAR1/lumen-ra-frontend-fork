import React from 'react'
import Button from "../../components/Buttons/Button";
import "./AboutLumenraSection.css";
import { Link } from "react-router-dom"; 

const AboutLumenraSection = () => {
  return (
    <section className="about-lumenra">
      <div className="about-container">
        <h2>About LUMEN-RA</h2>
        <p>
          A web-based educational platform designed to equip men with practical
          skills, knowledge, and confidence to support women experiencing
          non-clinical health-related distress and during recovery following
          disclosures of gender-based violence (GBV).
        </p>
        <div className="about-buttons">

          <Link to= '/Signup'>
          <Button label="Get Started" variant="started"/>
          </Link>
          
          <Link to= '/Toolkit'>
          <Button label="Learn More" variant = "check"/>
          </Link>

        </div>
      </div>
    </section>
  )
}

export default AboutLumenraSection
