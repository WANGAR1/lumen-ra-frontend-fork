{/* ==================Home Page================== */}
import React from 'react'
import "./Home.css"
import SearchBar from "../../components/SearchBar/SearchBar";
import HeroSection from "../../pages/Home/HeroSection";
import WhyLumenraSection from "../../pages/Home/WhyLumenraSection"
import GuidesSection from "../../pages/Home/GuidesSection"
import ConfidenceSection from "../../pages/Home/ConfidenceSection"
import StartLearningSection from "../../pages/Home/StartLearningSection"
import TestingSection from "../../pages/Home/TestingSection"

const Home = () => {
  return (
    <>
      <SearchBar/>
      <HeroSection/>
      <WhyLumenraSection/>
      <GuidesSection/>
      <ConfidenceSection/>
      <StartLearningSection/>
      <TestingSection/>
    </>
  );
};

export default Home;
