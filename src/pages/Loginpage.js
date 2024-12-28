import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/LoginPage.css'; // Import custom CSS for styling

const LoginPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "user@example.com" && password === "password") {
      setIsLoggedIn(true);
      navigate('/'); // Redirect to home page after login
    } else {
      alert('Invalid login credentials');
    }

    console.log('Login', { email, password });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-title">Welcome Back!</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <button type="submit" className="submit-btn">Log In</button>
        </form>
        <div className="footer-links">
          <a href="/register" className="link">Don't have an account? Sign up</a>
          <a href="#" className="link">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
