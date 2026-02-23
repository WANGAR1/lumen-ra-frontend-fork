import LoginForm from './LoginForm';
import './Login.css';
import logo from '../../assets/LOGO.svg';

const Login = () => {
  return (
    <div className="login-page-wrapper">
      <div className="login-card">
        
        <div className="logo-container">
          <img src={logo} alt="Lumen-Ra" style={{ width: '120px' }} />
        </div>

        <h1 className="welcome-title">Welcome back</h1>
        <p className="welcome-subtitle">
          Sign in to continue your Lumen-Ra journey
        </p>

        <LoginForm />

        <p className="signup-prompt">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>

        <div className="social-divider">
          <span>Or continue with</span>
        </div>

        <div className="social-buttons">
          <button className="social-btn" type="button">
            {/* Apple SVG */}
            <svg width="20" height="20" viewBox="0 0 384 512">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
            </svg>
          </button>

          <button className="social-btn" type="button">
            {/* Google SVG */}
            <svg width="20" height="20" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Login;