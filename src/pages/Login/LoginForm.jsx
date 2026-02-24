import { useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../utils/routes';
import './LoginForm.css';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="login-form">
      <div className="form-group">
        <label>Email</label>
        <div className="input-field-wrapper">
          <span className="input-icon-left"></span>
          <input type="email" placeholder="Enter your email" />
        </div>
      </div>

      <div className="form-group">
        <label>Password</label>
        <div className="input-field-wrapper">
          <span className="input-icon-left"></span>
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder="Enter your password" 
          />
          <span 
            className="input-icon-right" 
            onClick={() => setShowPassword(!showPassword)}
          >
          </span>
        </div>
       {/* inside LoginForm.jsx */}
<div className="forgot-password-box">
  <Link to={routes.ForgotPassword} className="forgot-password-link">
    Forgotten your password?
  </Link>
</div>
      </div>

      <button type="submit" className="btn-sign-in">Sign in</button>
    </form>
  );
};

export default LoginForm;