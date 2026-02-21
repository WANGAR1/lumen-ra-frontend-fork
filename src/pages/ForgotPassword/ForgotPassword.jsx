import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';
import routes from '../../utils/routes';

// Import your assets
import logoSvg from '../../assets/LOGO.svg'; // Ensure the filename matches exactly
import illustration from '../../assets/undraw_forgot-password_nttj 1 (1).svg'

const ForgotPassword = () => {
  const routerNavigate = useNavigate();

  const handleReset = () => {
    // Integration point for Xano password reset API
    console.log("Reset requested");
    routerNavigate(routes.Login);
  };

  return (
    <div className="forgot-page-container">
      <div className="forgot-content-card">
        
        {/* Logo Section using your SVG */}
        <div className="logo-section">
           <img 
             src={logoSvg} 
             alt="LUMEN-RA Logo" 
             className="brand-logo-svg" 
           />
        </div>

        {/* Illustration Section */}
        <div className="illustration-section">
           <img 
             src={illustration} 
             alt="Forgot Password Illustration" 
             className="main-graphic" 
           />
        </div>

        {/* Text Messaging */}
        <div className="message-section">
          <h1 className="forgot-title">Forgot Password?</h1>
          <p className="forgot-subtitle">We have you covered.</p>
        </div>

        {/* Action Button */}
        <div className="button-section">
          <button 
            className="reset-email-btn" 
            onClick={handleReset}
          >
            Reset via email
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default ForgotPassword;