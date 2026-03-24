import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import routes from "../../utils/routes";
import "./Dashboard.css";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Dynamic Logic: If user has no data, default to 0/Empty
  const progress = user?.progress || 0;
  const modulesCompleted = user?.completedCount || 0;
  const confidenceScore = user?.confidence || 0;
  const badges = user?.badges || [];

  return (
    <div className="dashboard-wrapper">
      {/* Dynamic Header */}
      <header className="welcome-card">
        <div className="welcome-text">
          <h1>Welcome, {user?.fullName?.split(" ")[0] || "Explorer"}!</h1>
          <p>
            {progress > 0 
              ? "Your journey toward allyship is in motion." 
              : "Every great change begins with a single step. Start your first module below."}
          </p>
        </div>

        <div className="continue-card">
          <span>{progress > 0 ? "Pick up where you left off" : "Ready to begin?"}</span>
          <h3>{user?.currentModule || "Module 1: Understanding GBV"}</h3>
          <button onClick={() => navigate(routes.IntroGBV)}>
            {progress > 0 ? "Resume Learning →" : "Start Module 1 →"}
          </button>
        </div>
      </header>

      {/* Stats Row */}
      <section className="stats-row">
        {/* Completion Circle */}
        <div className="stat-card">
          <h4>Overall Completion</h4>
          <h2>{progress}%</h2>
          <div 
            className="progress-circle" 
            style={{ background: `conic-gradient(#1b6d7a ${progress}%, #e0eded 0)` }}
          >
            <div className="circle-inner">
              <span>{progress}%</span>
            </div>
          </div>
          <p>{modulesCompleted} of 10 modules done</p>
        </div>

        {/* Confidence Bar */}
        <div className="stat-card">
          <h4>Confidence Score</h4>
          <h2>{confidenceScore > 0 ? `${confidenceScore}/5` : "N/A"}</h2>
          <div className="bar-container">
            <div className="bar-fill" style={{ width: `${(confidenceScore / 5) * 100}%` }}></div>
          </div>
          <p>{confidenceScore > 0 ? "Growth since pre-assessment" : "Take the assessment to see growth"}</p>
        </div>

        {/* Badges Section */}
        <div className="stat-card">
          <h4>Active Badges</h4>
          <h2>{badges.length}</h2>
          <div className="badges-container">
            {badges.length > 0 ? (
              badges.map((badge, i) => <span key={i} className="badge-tag">{badge}</span>)
            ) : (
              <div className="empty-badges">No badges earned yet</div>
            )}
          </div>
        </div>
      </section>

      {/* Knowledge Growth Empty State */}
      <section className="knowledge-section">
        <h2>Knowledge Growth</h2>
        <div className={`chart-container ${progress === 0 ? "is-empty" : ""}`}>
          {progress > 0 ? (
            <div className="placeholder-chart">Chart Rendering...</div>
          ) : (
            <p>Visual data will appear here once you complete your first module.</p>
          )}
        </div>
      </section>

      {/* Recent Modules List */}
      <section className="recent-modules">
        <div className="section-header">
          <h2>Available Modules</h2>
          <Link to={routes.ModulesPage} className="view-all">View All</Link>
        </div>
        <div className="module-grid">
          <ModuleCard 
            title="Introduction to Allyship"
            status={progress >= 100 ? "Completed" : "Start"}
            percent={progress}
          />
          <ModuleCard title="Trauma Awareness" status="Locked" percent={0} />
          <ModuleCard title="Cultural Competency" status="Locked" percent={0} />
        </div>
      </section>
    </div>
  );
};

// Sub-component for Module Cards
const ModuleCard = ({ title, status, percent }) => (
  <div className={`module-card ${status === "Locked" ? "locked" : ""}`}>
    <span className={`status-tag ${status.toLowerCase()}`}>{status}</span>
    <h3>{title}</h3>
    <div className="mini-progress-bar">
      <div className="mini-fill" style={{ width: `${percent}%` }}></div>
    </div>
    <span className="mini-percent">{percent}% Complete</span>
  </div>
);

export default Dashboard;