import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './EmployeeRegistration.css';

const EmployeeRegistration = ({ addEmployee }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        position: '',
        department: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(formData);
        navigate('/EmployeeList'); // Navigate to employee list
    };

    return (
        <div className="employee-registration">
            <h3>Employee Registration</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    Position:
                    <input type="text" name="position" value={formData.position} onChange={handleChange} required />
                </label>
                <label>
                    Department:
                    <input type="text" name="department" value={formData.department} onChange={handleChange} required />
                </label>
                <button type="submit" >Register</button>
                <p></p>
                {/* <P>list<Link to='/EmployeeList'>list</Link></P> */}
            </form>
            <p><a href='/'>LeaveAdministration</a></p>
        </div>
    );
};

export default EmployeeRegistration;
