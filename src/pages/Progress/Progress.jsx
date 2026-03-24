import React, { useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from 'react-router-dom';
import './Progress.css';

const Progress = ({ toolkitModules = [] }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Calculate dynamic stats
  const totalModules = toolkitModules.length || 10;
  const completedModules = toolkitModules.filter(m => m.status === 'completed').length;
  const progressPercentage = user?.progress || 0;
  const quizAverage = user?.confidence ? (user.confidence * 20) : 0; // Converting 5-point scale to %

  return (
    <div className="progress-page-wrapper">
      {/* --- Header / Welcome --- */}
      <header className="progress-welcome-card">
        <div className="welcome-content">
          <h1>Your Learning Journey</h1>
          <p>Every milestone reached is a step toward safer communities.</p>
        </div>
        <div className="overall-completion-stat">
          <div className="circle-progress" style={{ 
            background: `conic-gradient(#ffffff ${progressPercentage}%, rgba(255,255,255,0.2) 0)` 
          }}>
            <span>{progressPercentage}%</span>
          </div>
        </div>
      </header>

      {/* --- Stats Grid (Matching Dashboard Style) --- */}
      <div className="progress-stats-grid">
        <div className="prog-stat-card">
          <h4>Modules Completed</h4>
          <h2>{completedModules} / {totalModules}</h2>
          <div className="mini-bar"><div className="fill" style={{width: `${(completedModules/totalModules)*100}%`}}></div></div>
          <p>Target: 10 Modules</p>
        </div>

        <div className="prog-stat-card">
          <h4>Knowledge Score</h4>
          <h2>{quizAverage}%</h2>
          <div className="mini-bar"><div className="fill" style={{width: `${quizAverage}%`, background: '#f38d49'}}></div></div>
          <p>Based on {completedModules} quizzes</p>
        </div>

        <div className="prog-stat-card">
          <h4>Total Impact</h4>
          <h2>{user?.impactPoints || "0"}</h2>
          <div className="impact-badge">Ally Points</div>
          <p>Earned through engagement</p>
        </div>
      </div>

      {/* --- Learning Journey Timeline --- */}
      <div className="journey-layout">
        <section className="timeline-section">
          <h3 className="section-title">Milestones</h3>
          <div className="journey-timeline">
            {toolkitModules.length > 0 ? (
              toolkitModules.map((module, index) => (
                <div key={index} className={`timeline-node ${module.status}`}>
                  <div className="node-marker">{module.status === 'completed' ? '✓' : index + 1}</div>
                  <div className="node-info">
                    <h4>{module.title}</h4>
                    <p>{module.description}</p>
                  </div>
                  <span className={`node-status-tag ${module.status}`}>{module.status}</span>
                </div>
              ))
            ) : (
              <div className="empty-journey-state">
                <p>Start your first module to see your timeline appear.</p>
              </div>
            )}
          </div>
        </section>

        {/* --- Sidebar: Certificate Action --- */}
        <aside className="progress-sidebar">
          <div className="cert-cta-card">
            <div className="cert-icon">📜</div>
            <h3>Certification</h3>
            <p>Complete all modules to unlock your official Digital Allyship Certificate.</p>
            
            <div className={`cert-status-box ${progressPercentage === 100 ? 'unlocked' : 'locked'}`}>
              {progressPercentage === 100 ? "Ready to Download" : "Locked (Complete 100%)"}
            </div>

            <button 
              className="progress-action-btn" 
              disabled={progressPercentage < 100}
              onClick={() => navigate('/certificate')}
            >
              {progressPercentage === 100 ? "View Certificate" : "Resume Learning"}
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Progress;