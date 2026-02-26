import React, { useReducer } from 'react';
import { Link } from 'react-router-dom'; // for linking to Signup/Login
import './PersonalityCheck.css';

const initialState = {
  currentStep: 1,
  response: "",
  formData: {},
  loading: false,
  isFinished: false
};

// Reducer to handle form state
function reducer(state, action) {
  switch (action.type) {
    case 'SET_RESPONSE':
      return { ...state, response: action.payload };
    case 'NEXT_STEP':
      return {
        ...state,
        currentStep: state.currentStep + 1,
        formData: { ...state.formData, [`question_${state.currentStep}`]: state.response },
        response: "" // reset input for next question
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
  const totalSteps = 4;
  const questions = [
    "How familiar are you with gender-based violence (GBV)?",
    "Have you or anyone you know been affected by GBV?",
    "What are your primary goals for this roadmap?",
    "How do you prefer to receive support and information?"
  ];

  // Handles moving to next step or submitting final responses
  const handleAction = async () => {
    if (state.currentStep < totalSteps) {
      dispatch({ type: 'NEXT_STEP' });
    } else {
      dispatch({ type: 'START_SUBMIT' });

      // Prepare final submission including last answer
      const finalData = { ...state.formData, [`question_${state.currentStep}`]: state.response };

      try {
        const res = await fetch('/api/auth/personality-check', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ answers: finalData }),
        });

        if (res.ok) dispatch({ type: 'SUBMIT_SUCCESS' });
        else dispatch({ type: 'SUBMIT_ERROR' });
      } catch (err) {
        console.error(err);
        dispatch({ type: 'SUBMIT_ERROR' });
        alert("Server error. Please try again later.");
      }
    }
  };

  // Final message after completing all steps
  if (state.isFinished) {
    return (
      <div className="personality-card finished-card">
        <h1>All done! Your personalized roadmap is ready.</h1>
        <p>
          To access all learning modules and start your journey, please{' '}
          <Link to="/signup"><strong>Sign Up</strong></Link> or{' '}
          <Link to="/login"><strong>Log In</strong></Link>.
        </p>
      </div>
    );
  }

  const progressWidth = (state.currentStep / totalSteps) * 100;

  return (
    <div className="personality-container">
      <div className="personality-card">
        <header className="card-header">
          <h1>Personality Check</h1>
          <p>Let's understand your goal so we can create a personalised roadmap</p>
        </header>

        <div className="step-indicator">
          <span className="step-text">Step {state.currentStep} of {totalSteps}</span>
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