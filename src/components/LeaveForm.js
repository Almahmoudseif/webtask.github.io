// LeaveForm.js
import React from 'react';

const LeaveForm = () => {
    return (
        <form className="leave-form">
            <div>
                <label htmlFor="employeeName">Employee Name:</label>
                <input type="text" id="employeeName" name="employeeName" required />
            </div>
            <div>
                <label htmlFor="leaveType">Leave Type:</label>
                <select id="leaveType" name="leaveType" required>
                    <option value="sick">Sick Leave</option>
                    <option value="vacation">Vacation</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div>
                <label htmlFor="startDate">Start Date:</label>
                <input type="date" id="startDate" name="startDate" required />
            </div>
            <div>
                <label htmlFor="endDate">End Date:</label>
                <input type="date" id="endDate" name="endDate" required />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default LeaveForm;
