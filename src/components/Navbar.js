import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import '../../Style/Navbar.css'; // Link to the updated CSS for styling

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [redirectPage, setRedirectPage] = useState('');
  const navigate = useNavigate(); // Initialize navigate instead of history

  // Check if the user is logged in (this is just a placeholder for actual logic)
  const isLoggedIn = false; // Update this logic based on your auth system

  const handleNavClick = (page) => {
    if (!isLoggedIn) {
      setRedirectPage(page);
      setShowModal(true);
    } else {
      navigate(`/${page}`); // Use navigate instead of history.push
    }
  };

  const handleLoginRedirect = () => {
    navigate('/login'); // Use navigate instead of history.push
    setShowModal(false);
  };

  const handleRegisterRedirect = () => {
    navigate('/register'); // Use navigate instead of history.push
    setShowModal(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">Finance Assistant</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
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
