import React from "react";
import QuizSection from "../Quiz/QuizSection";
import "./dashboard.css";



const Button = ({ children, onClick, className }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

const StatusCard = ({ title, value }) => {
  return (
    <div className="status-card">
      <div>
        <p className="status-title">{title}</p>
        <h3 className="status-value">{value}</h3>
      </div>
      <div className="status-icon" />
    </div>
  );
};

const FooterLink = ({ text }) => <a href="#">{text}</a>;



const Dashboard = () => {
  return (
    <div className="dashboard">

    
      <nav className="navbar">
        <div className="logo">LUMEN-RA</div>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Toolkit</a>
          <a href="#">Progress</a>
        </div>

        <div className="nav-actions">
          <Button className="outline-btn">Log out</Button>
          <Button className="primary-btn">Let’s Chat</Button>
        </div>
      </nav>

      
      <section className="welcome">
        <h1>Welcome back, Ibrahim!</h1>
        <p>Ready to be a safe person women can talk to</p>
      </section>

      
      <section className="status-section">
        <StatusCard title="Account status" value="Free" />
        <StatusCard title="Assessment" value="Pending" />
        <StatusCard title="Daily Motivation" value="Pending" />
      </section>

      
      <section className="daily-tip">
        <h3>Daily Tip</h3>
        <p>Focus on respecting her physical boundary</p>
      </section>

     
      <div className="start-btn-wrapper">
        <Button className="start-btn">Start Personality Check</Button>
      </div>

       <section> 
        <QuizSection />
       </section>
      
      <section className="personality-check">
        <h2>Personality Check</h2>
        <p className="subtitle">
          Let’s understand your goal so as to create a personalized roadmap
        </p>

        <div className="progress">
          <span>Step 1 of 4</span>
          <div className="progress-bar">
            <div className="progress-fill" />
          </div>
        </div>

        <div className="question">
          <label>How familiar are you with gender-based violence (GBV)?</label>
          <input
            type="text"
            placeholder="Type your response here"
          />
        </div>

        <div className="next-btn-wrapper">
          <Button className="primary-btn">Next</Button>
        </div>
      </section>

      
    </div>
  );
};

export default Dashboard;