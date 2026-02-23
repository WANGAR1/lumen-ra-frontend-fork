import React from 'react'
import SearchBar from "../../components/SearchBar/SearchBar";
import AboutLumenraSection from "../../pages/About/AboutLumenraSection";
import VisionSection from "../../pages/About/VisionSection";
import ProblemSection from "../../pages/About/ProblemSection";
import HowItWorksSection from "../../pages/About/HowItWorksSection";
import WhyThisMattersSection from "../../pages/About/WhyThisMattersSection";
import WhatYouGetSection from "../../pages/About/WhatYouGetSection";
import ScenarioSection from "../../pages/About/ScenarioSection";
import FAQSection from "../../pages/About/FAQSection";
import SupportSection from "../../pages/About/SupportSection";
import GetInTouchSection from "../../pages/About/GetInTouchSection";

const About = () => {
  return (
    <>
      <SearchBar/>
      <AboutLumenraSection/>
      <VisionSection/>
      <ProblemSection/>
      <WhyThisMattersSection/>
      <HowItWorksSection/>
      <WhatYouGetSection/>
      <ScenarioSection/>
      <FAQSection/>
      <SupportSection/>
      <GetInTouchSection/>
    </>
  )
}

export default About;
