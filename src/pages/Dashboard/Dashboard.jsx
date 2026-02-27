import React, { useContext } from "react"; // Added useContext
import { AuthContext } from "../../context/AuthContext"; // Import your context
import "./Dashboard.css";

const Dashboard = () => {
  // 1. Access the user details from the AuthProvider
  const { user } = useContext(AuthContext);

  return (
    <div className="dashboard">
      {/* Header */}
      <div className="welcome-card">
        {/* 2. Replaced 'Ibrahim' with dynamic name from login */}
        <h1>Welcome back, {user?.fullName || user?.name || "Explorer"}!</h1>
        <p>Continue your journey toward becoming a better ally</p>

        <div className="continue-card">
          <span>Continue where you left off</span>
          <h3>Module 2: Trauma Awareness</h3>
          <button>Resume Learning →</button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="stats-row">
        <div className="card">
          <h4>Overall Completion</h4>
          <h2>70%</h2>
          <div className="progress-circle">
            <span>70%</span>
          </div>
          <p>7 of 10 modules completed</p>
        </div>

        <div className="card">
          <h4>Confidence Score</h4>
          <h2>4.2/5</h2>
          <div className="bar">
            <div className="bar-fill" style={{ width: "84%" }}></div>
          </div>
          <p>+50% growth since start</p>
        </div>

        <div className="card">
          <h4>Active Badges</h4>
          <h2>8</h2>
          <div className="badges">
            <span>Active Listener</span>
            <span>Safe Responder</span>
            <span>Cultural Ally</span>
            <span>Trauma Aware</span>
            <span>Reflective</span>
          </div>
        </div>
      </div>

      {/* Knowledge Growth */}
      <div className="knowledge-card">
        <h2>Knowledge Growth</h2>
        <p>Compare your pre-assessment with current performance</p>

        <div className="donut"></div>
      </div>

      {/* Recent Modules */}
      <div className="recent">
        <div className="recent-header">
          <h2>Recent Modules</h2>
          <span>View All</span>
        </div>

        <div className="module-grid">
          <ModuleCard
            title="Introduction to Allyship"
            desc="Understanding the fundamentals of being an effective ally"
            time="45 min"
            lessons="5 lessons"
            progress={100}
            status="Completed"
          />

          <ModuleCard
            title="Trauma Awareness"
            desc="Recognizing and responding to trauma with sensitivity"
            time="60 min"
            lessons="6 lessons"
            progress={60}
            status="In Progress"
          />

          <ModuleCard
            title="Cultural Competency"
            desc="Building awareness and skills for cross-cultural engagement"
            time="50 min"
            lessons="7 lessons"
            progress={30}
            status="In Progress"
          />
        </div>
      </div>
    </div>
  );
};

const ModuleCard = ({ title, desc, time, lessons, progress, status }) => {
  return (
    <div className="module-card">
      <div className="module-top">
        <span className={`status ${status === "Completed" ? "done" : ""}`}>
          {status}
        </span>
      </div>

      <h3>{title}</h3>
      <p>{desc}</p>

      <div className="module-meta">
        <span>{time}</span>
        <span>{lessons}</span>
      </div>

      <div className="module-progress">
        <div
          className="module-progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <span className="percent">{progress}%</span>
    </div>
  );
};

export default Dashboard;