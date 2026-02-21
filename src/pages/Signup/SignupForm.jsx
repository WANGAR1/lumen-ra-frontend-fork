import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'; // adjust path if needed

const SignupForm = () => {
  const navigate = useNavigate();
  const { register } = useContext(AuthContext); // get register from context

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');

    const res = await register(
      formData.username,
      formData.email,
      formData.password
    );

    setIsSubmitting(false);

    if (res.ok) {
      setSuccessMessage('Registration successful! 🎉');

      setFormData({
        username: '',
        email: '',
        password: ''
      });

      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } else {
      setErrorMessage(res.error || 'Registration failed');
    }
  };

  return (
    <div className="signup-form-container">
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit} className="signup-form">
        <label htmlFor="username">FullName:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>

      {successMessage && (
        <p style={{ color: 'green', marginTop: '12px', textAlign: 'center' }}>
          {successMessage}
        </p>
      )}

      {errorMessage && (
        <p style={{ color: 'red', marginTop: '12px', textAlign: 'center' }}>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default SignupForm;