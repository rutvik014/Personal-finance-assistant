import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/HomePage.css'; // Importing the corresponding CSS file for styling

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="overlay">
        <div className="content">
          <h1 className="title">Welcome to Personal Finance Assistant</h1>
          <p className="subtitle">Take control of your finances with ease and clarity!</p>
          <div className="button-group">
            <Link to="/login" className="btn btn-primary btn-animated">Login</Link>
            <Link to="/register" className="btn btn-secondary btn-animated">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
