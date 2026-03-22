import React from "react";
import "./QuizSection.css";

const QuizSection = ({ onStartQuiz }) => {
  return (
    <section className="quiz-section">
      
      <div className="quiz-left">
        <h2>
          10x Your Confidence to <span>Support Women</span> with Practical Skills
        </h2>

        <p>
          Get self-paced scenario simulations that directly support gender
          equality by addressing behavioral and social drivers of inequality.
        </p>

        <button className="small-quiz-btn">Take a Quiz</button>

        <div className="daily-tip">
          <h4>Daily Tip</h4>
          <p>Focus on respecting her physical boundary</p>
        </div>

        <button className="start-quiz-btn" onClick={onStartQuiz}>
          Start Quiz
        </button>
      </div>

      <div className="quiz-right">
        <div className="stats-card">
          <div className="stat">120k+ <span>Allies</span></div>
          <div className="stat">5% <span>Positive Feedback</span></div>
          <div className="stat">70% <span>Trauma Awareness</span></div>
        </div>
      </div>

    </section>
  );
};

export default QuizSection;
