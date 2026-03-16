import React, { useState, useReducer, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext"; 
import './PersonalityCheck.css';

// Initial State for the multi-step form
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
        currentStep: state.currentStep + 1, formData: 
        { ...state.formData, [`question_${state.currentStep}`]: state.response },
        response: "" 
      };

      case 'PREVIOUS_STEP':
  return {
    ...state,
    currentStep: state.currentStep - 1,
    response: state.formData[`question_${state.currentStep - 1}`] || ""
  };

    case 'START_SUBMIT':
      return { ...state, loading: true, formData: 
        { ...state.formData, [`question_${state.currentStep}`]: state.response } 
      };

    case 'SUBMIT_SUCCESS':
      return { ...state, loading: false, isFinished: true };

    case 'SUBMIT_ERROR':
      return { ...state, loading: false };
    default: return state;
  }
  }

const PersonalityCheck = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showWelcome, setShowWelcome] = useState(false); 
  const { token, user } = useContext(AuthContext); 
  const navigate = useNavigate();


  const totalSteps = 4;
  const questions = [
    "How familiar are you with gender-based violence (GBV)?",
    "Have you or anyone you know been affected by GBV?",
    "What are your primary goals for this roadmap?",
    "How do you prefer to receive support and information?"
  ];

  const handlePrevious = () => {
  if (state.currentStep > 1) {
    dispatch({ type: 'PREVIOUS_STEP' });
  }
  };

  // Handles moving to next step or submitting final responses
  const handleAction = async () => {
    if (state.currentStep < totalSteps) {
      dispatch({ type: 'NEXT_STEP' });
    } else {
      dispatch({ type: 'START_SUBMIT' });

  // Prepare final submission including last answer
      const finalData = { ...state.formData, [`question_${state.currentStep}`]: state.response };
      console.log("Submitting answers:", finalData);

      console.log("Token:", token);

    try {
      
    const res = await fetch('https://lumenra.onrender.com/api/auth/personality-check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
       },
      
      body: JSON.stringify({ answers: finalData }),
    });

    const data = await res.json();
    console.log("Status:", res.status);
    console.log("Response:", data);

    if (res.ok) {
        dispatch({ type: "SUBMIT_SUCCESS" });
      } else {
        console.error("Submission error:", data);
        dispatch({ type: "SUBMIT_ERROR" });
        alert("Failed to save profile.");
      }
    } catch (err) {
      console.error("Server error:", err);
      dispatch({ type: "SUBMIT_ERROR" });
      alert(`Failed to save profile: ${err.message || "Unknown error"}`);
    }   
    }};

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && state.response.trim() && !state.loading) {
      handleAction();
    }
  };

  // Success Screen shows "All done!" with Continue button
  if (state.isFinished && !showWelcome) {

  return (
    <div className="personality-container">
      <div className="personality-card finished-card">
        <h1>All done! Your roadmap is ready.</h1>
        <p>Your profile has been saved successfully.</p>
        <div className="card-footer">
          <button
            className="next-btn"
            onClick={() => setShowWelcome(true)} // moves to next stage
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

// Step 2: Welcome message / Navigate
if (showWelcome) {
  return (
    <div className="personality-container">
      <div className="personality-card finished-card">
        <h1>
          Welcome back, {user?.name || "Explorer"}!
        </h1>
        <div className="card-footer">
          <button
            className="next-btn"
            onClick={() => {
              if (token) {
                navigate("/dashboard"); // logged-in
              } else {
                navigate("/get-started"); // new users
              }
            }}
          >
            {token ? "Go to Dashboard" : "Get Started"}
          </button>
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
          <p>Step {state.currentStep} of {totalSteps}</p>
        </header>

    <div className="progress-track">
     <div className="progress-fill" 
        style={{ width: `${progressWidth}%` }}></div>
    </div>

    <div className="question-section">
      <label className="question-label">{questions[state.currentStep - 1]}</label>
        <input
        type="text"
        className="response-input"
        placeholder="Type your response here..."
        value={state.response}
        onChange={(e) => dispatch({ type: 'SET_RESPONSE', 
        payload: e.target.value })}
        onKeyDown={handleKeyDown}
        autoFocus/>
    </div>

    <footer className="card-footer">
           {state.currentStep > 1 && (
     <button
      className="prev-btn"
      onClick={handlePrevious}
      disabled={state.loading}
    >Previous
     </button>
   )}
    <button
      className="next-btn"
      onClick={handleAction }
      disabled={!state.response.trim() || state.loading}>
      {state.loading ? "Saving..." : state.currentStep === totalSteps ? "Finish" : "Next"}
      </button>
    </footer>
    </div>
    </div>
  );
};

export default PersonalityCheck;