import React from 'react';
import './Progress.css';

// Assuming toolkitModules is passed as a prop from your parent component or context
const Progress = ({ toolkitModules = [] }) => {
  
  // Calculate stats based on toolkit data
  const totalModules = toolkitModules.length;
  const completedModules = toolkitModules.filter(m => m.status === 'completed').length;
  const progressPercentage = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0;
  
  // Example logic for quiz average (replace with your actual data keys)
  const quizAverage = 90; 

  return (
    <div className="progress-container">
      <header className="progress-header">
        <h1>Your Progress</h1>
        <p>Track your learning journey and achievements</p>
      </header>

      {/* Summary Cards */}
      <div className="stats-grid">
        <div className="stat-card main-stat">
          <div className="stat-label">Overall Progress</div>
          <div className="stat-value">{progressPercentage}%</div>
          <div className="stat-sub">{completedModules} of {totalModules} milestones completed</div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }}></div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-label">Quiz Average</div>
          <div className="stat-value">{quizAverage}%</div>
          <p className="stat-desc">Excellent performance across your completed quizzes</p>
        </div>

        <div className="stat-card">
          <div className="stat-label">Time Invested</div>
          <div className="stat-value">3.5</div>
          <p className="stat-desc">Hours of learning completed</p>
        </div>
      </div>

      {/* Learning Journey - Mapped from Toolkit */}
      <section className="journey-section">
        <h3>Learning Journey</h3>
        <div className="timeline">
          {toolkitModules.map((module, index) => (
            <div key={module.id || index} className={`timeline-item ${module.status}`}>
              <div className="timeline-dot">
                {module.status === 'completed' ? '✓' : index + 1}
              </div>
              <div className="timeline-content">
                <h4>{module.title}</h4>
                <p>{module.description}</p>
              </div>
              <div className={`status-tag ${module.status}`}>
                {module.status === 'in-progress' ? 'Active' : module.status}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Results Section */}
      <section className="results-card">
        <h3>Quiz Results</h3>
        {toolkitModules.filter(m => m.score).map((m) => (
          <div className="result-row" key={m.id}>
            <div className="score-badge">{m.score}</div>
            <div className="result-info">
              <strong>{m.title}</strong>
              <span>Completed on {m.completedDate}</span>
            </div>
            <div className="check-icon">✓</div>
          </div>
        ))}
      </section>

      {/* Certificate Call to Action */}
      <section className="certificate-footer">
        <div className="cert-icon-wrapper">🎓</div>
        <h3>Certificate of Completion</h3>
        <p>Complete all modules to earn your Digital Allyship Certification</p>
        <div className="cert-preview-placeholder">
            Your certificate will appear here once you complete all modules
        </div>
        <button className="preview-btn" disabled={progressPercentage < 100}>
            Preview Certificate
        </button>
      </section>
    </div>
  );
};

export default Progress;