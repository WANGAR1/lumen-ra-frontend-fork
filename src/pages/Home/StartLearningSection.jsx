{/* ==================Start Learning Section================== */}
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext"; 
import "./StartLearningSection.css";
import Button from "../../components/Buttons/Button";
import { Link } from "react-router-dom";
import CertificateImage from "../../assets/HomeImages/certificate.svg"; 
<<<<<<< HEAD
import { Link } from "react-router-dom";
const StartLearningSection = () => {
  return (
    <section className="start-learning">
      <div className="start-learning-container">
=======
>>>>>>> eb914fef5b1169eca1c6fa9f5dfe25f7a2108628

const StartLearningSection = () => {

const { user } = useContext(AuthContext); 
const navigate = useNavigate();

const handleStartLearning = () => {
  if (user){
  navigate("/Dashboard");
 }else {
  navigate("/Signup")
 }
 };

  return (
    <section className = "start-learning">
      <div className = "start-learning-container">

{/* ==================Top options================= */}
        <div className = "options">
          <div className = "option-card-1">
            <h3>For Individuals</h3>
            <p>
              Start your journey to become an ally with clarity and care.
            </p>
          </div>

          <div className = "option-card-2">
            <h3>For Organisations</h3>
            <p>
              Partner with us to bring allyship training to schools or workplaces.
            </p>
          </div>
        </div>

{/*================ Certificate section============ */}
        <div className = "certificate-section">
          <div className = "certificate-left">
            <h2>Earn a Certificate of Completion</h2>
            <p>
              Track your progress and receive a digital certificate to recognise
              your commitment to informed allyship.
            </p>
<<<<<<< HEAD

          <Link to="/Modules">
            <Button label="Start Learning" variant="primary"/>
          </Link>

=======
            <Button label = "Start Learning" variant="primary" onClick={handleStartLearning}/>
>>>>>>> eb914fef5b1169eca1c6fa9f5dfe25f7a2108628
          </div>

          <div className = "certificate-right">
            <img src = {CertificateImage} alt="Certificate of Completion"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartLearningSection;