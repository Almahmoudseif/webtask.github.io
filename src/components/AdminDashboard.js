// src/AdminDashboard.js

import React from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <nav className="admin-navbar">
      <ul className="admin-navbar-list">
        <li className="admin-navbar-item"><a href="#home">Home</a></li>
        <li className="admin-navbar-item"><a href="#about">About</a></li>
        <li className="admin-navbar-item"><a href="#employee-registration">Employee Registration</a></li>
        <li className="admin-navbar-item"><a href="#leave-administration">Leave Administration</a></li>
        <li className="admin-navbar-item"><a href="#feedback">Feedback</a></li>
        <li className="admin-navbar-item"><a href="#logout">Logout</a></li>
      </ul>
    </nav>
  );
};

export default AdminDashboard;
