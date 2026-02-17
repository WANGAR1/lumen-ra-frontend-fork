import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ onRegister }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call parent registration handler
    onRegister(formData);

    // Show success message
    setSuccessMessage('Registration successful! 🎉');

    // Clear form
    setFormData({
      username: '',
      email: '',
      password: ''
    });

    // Navigate after 2 seconds
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <div className="signup-form-container">
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit} className="signup-form">
        <label htmlFor="username">Username:</label>
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

        <button type="submit">Sign Up</button>
      </form>

      {successMessage && (
        <p style={{ color: 'green', marginTop: '12px', textAlign: 'center' }}>
          {successMessage}
        </p>
      )}
    </div>
  );
};

export default SignupForm; 
