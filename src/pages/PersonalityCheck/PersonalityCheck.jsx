import React, { useReducer } from 'react';
import { useNavigate } from "react-router-dom";
import './PersonalityCheck.css';

const initialState = {
  currentStep: 1,
  response: "",
  formData: {},
  loading: false,
  isFinished: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_RESPONSE':
      return { ...state, response: action.payload };
    case 'NEXT_STEP':
      return {
        ...state,
        currentStep: state.currentStep + 1,
        formData: { ...state.formData, [`question_${state.currentStep}`]: state.response },
        response: "" // Reset input for next question
      };
    case 'START_SUBMIT':
      return { 
        ...state, 
        loading: true, 
        formData: { ...state.formData, [`question_${state.currentStep}`]: state.response } 
      };
    case 'SUBMIT_SUCCESS':
      return { ...initialState, isFinished: true };
    case 'SUBMIT_ERROR':
      return { ...state, loading: false };
    default:
      return state;
  }
}

const PersonalityCheck = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const totalSteps = 4;
  const questions = [
    "How familiar are you with gender-based violence (GBV)?",
    "Have you or anyone you know been affected by GBV?",
    "What are your primary goals for this roadmap?",
    "How do you prefer to receive support and information?"
  ];

  const handleAction = async () => {
    if (state.currentStep < totalSteps) {
      dispatch({ type: 'NEXT_STEP' });
    } else {
      // Final submission
      dispatch({ type: 'START_SUBMIT' });

      const finalData = { 
        answers: { ...state.formData, [`question_${state.currentStep}`]: state.response } 
      };

      try {
        const res = await fetch("https://lumenra.onrender.com/api/auth/personality-check", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(finalData),
        });

        const data = await res.json();

        if (res.ok && data.message === "Personality profile saved") {
          dispatch({ type: 'SUBMIT_SUCCESS' });
        } else {
          dispatch({ type: 'SUBMIT_ERROR' });
          alert(data.message || "Submission failed");
        }

      } catch (err) {
        console.log(err);
        dispatch({ type: 'SUBMIT_ERROR' });
        alert("Server error. Please try again later.");
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && state.response.trim() && !state.loading) {
      handleAction();
    }
  };

  if (state.isFinished) {
    return (
      <div className="personality-container">
        <div className="personality-card finished-card">
          <h1>All done! Your roadmap is ready.</h1>
          <p>Sign up or log in to continue and access your personalized roadmap.</p>
          <div className="card-footer">
            <button className="secondary-btn" onClick={() => navigate("/login")}>Login</button>
            <button className="next-btn" onClick={() => navigate("/signup")}>Sign Up</button>
          </div>
        </div>
      </div>
    );
  }

  const progressWidth = (state.currentStep / totalSteps) * 100;

  return (
    <div className="personality-container">
      <div className="personality-card">
        <header className="card-header">
          <h1>Personality Check</h1>
          <p>Let's understand your goals to create a personalized roadmap</p>
        </header>

        <div className="step-indicator">
          <span className="step-text">Step {state.currentStep} Of {totalSteps}</span>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progressWidth}%` }}></div>
          </div>
        </div>

        <div className="question-section">
          <label className="question-label">{questions[state.currentStep - 1]}</label>
          <input 
            type="text" 
            className="response-input"
            placeholder="Type your response here"
            value={state.response}
            onChange={(e) => dispatch({ type: 'SET_RESPONSE', payload: e.target.value })}
            onKeyDown={handleKeyDown}
          />
        </div>

        <footer className="card-footer">
          <button 
            className="next-btn" 
            onClick={handleAction}
            disabled={!state.response.trim() || state.loading}
          >
            {state.loading ? "Saving..." : state.currentStep === totalSteps ? "Finish" : "Next"}
          </button>
        </footer>
      </div>
    </div>
  );
};

export default PersonalityCheck;