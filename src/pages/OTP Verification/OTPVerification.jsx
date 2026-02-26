import React, { useState, useContext } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/LOGO.svg';
import { AuthContext } from '../../context/AuthContext';
import routes from '../../utils/routes';
import './OTPVerification.css';

export default function OTPVerification() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const { verifyOTP, forgotPassword, loading } = useContext(AuthContext);
  const [status, setStatus] = useState({ type: '', msg: '' });
  
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    const newOtp = [...otp.map((d, idx) => (idx === index ? element.value : d))];
    setOtp(newOtp);
    
    if (element.value !== "" && element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleVerify = async () => {
    const otpCode = otp.join('');
    const result = await verifyOTP(email, otpCode);
    if (result.ok) {
      setStatus({ type: 'success', msg: 'Verified!' });
      setTimeout(() => navigate(routes.ResetPassword, { state: { email, otp: otpCode } }), 1500);
    } else {
      setStatus({ type: 'error', msg: result.error });
    }
  };

  const handleResend = async () => {
    setStatus({ type: 'success', msg: 'Resending...' });
    const result = await forgotPassword(email);
    if (result.ok) setStatus({ type: 'success', msg: 'New code sent!' });
    else setStatus({ type: 'error', msg: result.error });
  };

  return (
    <div className="otp-container">
      <div className="otp-card">
        <button className="back-button" onClick={() => navigate(-1)}><ArrowLeft size={20} /></button>
        <div className="logo-section"><img src={logo} alt="Logo" className="brand-logo" /></div>
        <h1 className="welcome-heading">Verify OTP</h1>
        <p className="welcome-subtitle">Code sent to {email}</p>
        {status.msg && <div className={`status-message ${status.type}`}>{status.msg}</div>}
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
        <button className="verify-button" onClick={handleVerify} disabled={loading}>
          {loading ? "Verifying..." : "Verify Code"}
        </button>
        <p className="resend-text">
          Didn't receive the code? <span className="resend-link" onClick={handleResend} style={{cursor: 'pointer'}}>Resend</span>
        </p>
      </div>
    </div>
  );
}