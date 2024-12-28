import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaRegEye, FaRegEyeSlash } from 'react-icons/fa'; // Icon imports
import '../Style/RegisterPage.css'; // Make sure you create and link a custom CSS for styles

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log('Registered', { email, password });
    } else {
      console.log('Passwords do not match');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email"><FaEnvelope /> Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password"><FaLock /> Password</label>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Enter your password"
                required
              />
              <button type="button" className="password-toggle" onClick={togglePasswordVisibility}>
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword"><FaLock /> Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-control"
              placeholder="Confirm your password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
