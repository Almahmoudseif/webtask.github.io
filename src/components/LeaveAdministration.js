// LeaveAdministration.js
import React from 'react';
import LeaveForm from './LeaveForm';
import './LeaveAdministration.css';

const LeaveAdministration = () => {
    return (
        <div className="leave-admin-container">
            <h3>Leave Administration</h3>
            <p>Manage employee leaves here.</p>
            <LeaveForm />
        </div>
    );
};

export default LeaveAdministration;
