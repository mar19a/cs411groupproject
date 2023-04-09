import React from 'react';
import './LoginForm.css';
import { FaRegTimesCircle } from 'react-icons/fa';
const LoginForm = ({ onClose }) => {
  return (
    <div className="login-form-wrapper">
      <div className="login-form">
      <button className="close-button" onClick={onClose}>
          <FaRegTimesCircle />
        </button>
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Log In</button>
        </form>
        <div className="close-button-wrapper">
        </div>
      </div>
    </div>
  );
};

export default LoginForm;