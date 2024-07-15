// src/components/DepartmentStructure.js
import React from 'react';
import { useHistory } from 'react-router-dom';
import './DepartmentStructure.css'; // Create this CSS file for styling

const DepartmentStructure = () => {
    const history = useHistory();

    const navigateToLogin = () => {
        history.push('/login');
    };

    return (
        <div className="department-structure">
            <h1>Department Structure</h1>
            <p>/* Add your department structure details here */</p>
            <button onClick={navigateToLogin} className="login-button">Go to Login</button>
        </div>
    );
};

export default DepartmentStructure;
