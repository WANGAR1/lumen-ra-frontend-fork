import React, { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { Lock, Eye, EyeOff, ChevronLeft } from 'lucide-react';
import routes from '../../utils/routes';
import './ResetPassword.css';

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { resetPassword, loading } = useContext(AuthContext);

  // ✅ Retrieve the data passed from OTPVerification
  const email = location.state?.email;
  const otp = location.state?.otp;

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [status, setStatus] = useState({ type: '', msg: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', msg: '' });

    if (password !== confirmPassword) {
      return setStatus({ type: 'error', msg: "Passwords do not match" });
    }

    // ✅ Sends all three required fields to the backend
    const result = await resetPassword(email, otp, password);

    if (result.ok) {
      setStatus({ type: 'success', msg: "Password reset successful!" });
      setTimeout(() => {
        navigate(routes.Login); // Redirect to login
      }, 2000);
    } else {
      setStatus({ type: 'error', msg: result.error });
    }
  };

  return (
    <div className="reset-container">
      <div className="reset-card">
        <button className="back-button" onClick={() => navigate(-1)}><ChevronLeft size={24} /></button>
        <div className="lumen-ra-logo">LUMEN-RA</div>
        <h2 className="page-title">New Password</h2>
        
        {status.msg && <div className={`status-message ${status.type}`}>{status.msg}</div>}

        <form onSubmit={handleSubmit} className="reset-form">
          <div className="input-group">
            <label>New Password</label>
            <div className="input-wrapper">
              <Lock size={20} />
              <input 
                type={showPass ? "text" : "password"} 
                placeholder="••••••••"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
              <button type="button" onClick={() => setShowPass(!showPass)} className="eye-btn">
                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <div className="input-wrapper">
              <Lock size={20} />
              <input 
                type="password" 
                placeholder="••••••••"
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                required 
              />
            </div>
          </div>

          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? "Updating..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;