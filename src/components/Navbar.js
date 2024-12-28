import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom';
import '../Style/Navbar.css';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [redirectPage, setRedirectPage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const isLoggedIn = false;

  const handleNavClick = (page) => {
    if (!isLoggedIn) {
      setRedirectPage(page);
      setShowModal(true);
    } else {
      navigate(`/${page}`);
    }
  };

  const handleLoginRedirect = () => {
    navigate('/login');
    setShowModal(false);
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
    setShowModal(false);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">Finance Assistant</Link>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => handleNavClick('')}>Home</Link>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={() => handleNavClick('expense-tracker')}>Expense Tracker</span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={() => handleNavClick('budget-manager')}>Budget Manager</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Modal for login or register */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Please Log In or Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You need to be logged in to access this page. Would you like to log in or register?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleLoginRedirect}>
            Log In
          </Button>
          <Button variant="success" onClick={handleRegisterRedirect}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </nav>
  );
};

export default Navbar;
