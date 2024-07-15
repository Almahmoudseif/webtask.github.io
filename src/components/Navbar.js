// src/Navbar.js

import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#home">Home</a></li>
        <li className="navbar-item"><a href="#about">About</a></li>
        <li className="navbar-item"><a href="#admin-login">Admin Login</a></li>
        <li className="navbar-item"><a href="#user-login">User Login</a></li>
        <li className="navbar-item"><a href="#feedback">Feedback</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
