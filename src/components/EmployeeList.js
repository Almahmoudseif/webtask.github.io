import React from 'react';
import { BrowserRouter as router,Route,Routes,Link } from 'react-router-dom';

const EmployeeList = ({ employees }) => {
    return (
        <div>
            <h2>Employee List</h2>
            <ul>
                {employees.map((employee, index) => (
                    <li key={index}>
                        {employee.name} - {employee.email} - {employee.position} - {employee.department}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;
