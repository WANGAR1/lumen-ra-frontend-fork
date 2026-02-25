import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import routes from '../../utils/routes';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const { login, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const result = await login(email, password);
    
    if (result && result.ok) {
      // Use the exact route string or the routes utility
      navigate(routes.Dashboard || '/Dashboard'); 
    } else {
      alert(result?.error || "Login failed. Please check your credentials.");
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email</label>
        <div className="input-field-wrapper">
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
      </div>

      <div className="form-group">
        <label>Password</label>
        <div className="input-field-wrapper">
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder="Enter your password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span 
            className="input-icon-right" 
            onClick={() => setShowPassword(!showPassword)}
            style={{ cursor: 'pointer' }}
          >
          </span>
        </div>
        
        <div className="forgot-password-box">
          <Link to={routes.ForgotPassword} className="forgot-password-link">
            Forgotten your password?
          </Link>
        </div>
      </div>

      <button 
        type="submit" 
        className="btn-sign-in" 
        disabled={loading}
      >
        {loading ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
};

export default LoginForm;