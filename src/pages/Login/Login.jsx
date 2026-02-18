import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import './Login.css';

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo-section">
          <div className="logo">LUMEN-RA</div>
        </div>
        
        <h1 className="welcome-heading">Welcome Back</h1>
        <p className="welcome-subtitle">Sign in to continue your Lumen-Ra journey</p>
        
        <LoginForm />
        
        <p className="signup-link-section">
          Don't have an account? <Link to="/signup" className="signup-link">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
