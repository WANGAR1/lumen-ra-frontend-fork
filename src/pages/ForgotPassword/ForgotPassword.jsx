import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Mail } from 'lucide-react';
import { AuthContext } from '../../context/AuthContext';
import routes from '../../utils/routes';
import logoSvg from '../../assets/LOGO.svg';
import illustration from '../../assets/undraw_forgot-password_nttj 1 (1).svg';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const { forgotPassword, loading } = useContext(AuthContext);
  const [status, setStatus] = useState({ type: '', msg: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', msg: '' });

    const result = await forgotPassword(email);
    if (result.ok) {
      setStatus({ type: 'success', msg: result.data.message || "Code sent!" });
      setTimeout(() => {
        navigate(routes.OTPVerification, { state: { email } });
      }, 1500);
    } else {
      setStatus({ type: 'error', msg: result.error });
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <button className="back-button" onClick={() => navigate(-1)}><ChevronLeft size={24} /></button>
        <div className="logo-section">
          <img src={logoSvg} alt="Logo" className="logo-img" style={{height: '40px'}} />
          <div className="lumen-ra-logo">LUMEN-RA</div>
        </div>
        <div className="illustration-wrapper">
          <img src={illustration} alt="illustration" className="forgot-illustration" style={{width: '100%', maxHeight: '150px'}} />
        </div>
        <h2 className="page-title">Enter Email Address</h2>
        {status.msg && <div className={`status-message ${status.type}`}>{status.msg}</div>}
        <form onSubmit={handleSubmit} className="forgot-form">
          <div className="input-group">
            <label>Email</label>
            <div className="input-wrapper">
              <Mail className="input-icon" size={20} />
              <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
          </div>
          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default ForgotPassword;