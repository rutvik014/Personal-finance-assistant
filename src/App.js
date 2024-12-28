import React from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom'; // Ensure Router is imported correctly
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import BudgetManagerPage from './pages/BudgetManagerPage';
import ExpenseTrackerPage from './pages/ExpenseTrackerPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return (
    <Router> {/* Wrap the entire app with Router */}
      <NavbarWrapper /> {/* Wrapper component for conditional Navbar rendering */}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/expense-tracker" element={<ExpenseTrackerPage />} />
        <Route path="/budget-manager" element={<BudgetManagerPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

// New NavbarWrapper component to conditionally render Navbar
const NavbarWrapper = () => {
  const location = useLocation(); // useLocation is now inside Router context
  
  return (
    <>
      {/* Render Navbar only on the Home page */}
      {location.pathname === '/' && <Navbar />}
    </>
  );
};

export default App;