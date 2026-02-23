import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/lOGO.svg';
import './OTPVerification.css';

export default function OTPVerification() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const navigate = useNavigate();

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) element.nextSibling.focus();
  };

  return (
    <div className="otp-container">
      <div className="otp-card">
        <button className="back-button" onClick={() => navigate(-1)}>
          <ArrowLeft size={20} />
        </button>

        <div className="logo-section">
          <img src={logo} alt="Lumen-Ra Logo" className="brand-logo" />
        </div>

        <h1 className="welcome-heading">Verify OTP</h1>
        <p className="welcome-subtitle">Enter the 4-digit code sent to your email</p>

        <div className="otp-input-group">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={data}
              onChange={e => handleChange(e.target, index)}
              onFocus={e => e.target.select()}
              className="otp-field"
            />
          ))}
        </div>

        <button className="verify-button">Verify Code</button>

        <p className="resend-text">
          Didn't receive the code? <span className="resend-link">Resend</span>
        </p>
      </div>
    </div>
  );
}