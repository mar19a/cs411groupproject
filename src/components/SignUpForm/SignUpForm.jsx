import React from 'react';
import './SignUpForm.css';
import { FaRegTimesCircle } from 'react-icons/fa';

const SignUpForm = ({ onClose }) => {
  return (
    <div className="signup-form-wrapper">
      <div className="signup-form">
        <button className="close-button" onClick={onClose}>
          <FaRegTimesCircle />
        </button>
        <h2>Sign Up</h2>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">Sign Up</button>
      </div>
    </div>
  );
};

export default SignUpForm;