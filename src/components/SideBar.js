import React, { useState } from 'react';
import './Sidebar.css';
import Home from './Home';
import About from './About';
import EmployeeRegistration from './EmployeeRegistration';
import LeaveAdministration from './LeaveAdministration';
import Feedback from './Feedback';
import Logout from './Logout';

const Sidebar = () => {
    const [activeComponent, setActiveComponent] = useState('Home');
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const handleToggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const renderComponent = () => {
        switch (activeComponent) {
            case 'Home':
                return <Home />;
            case 'About':
                return <About />;
            case 'EmployeeRegistration':
                return <EmployeeRegistration />;
            case 'LeaveAdministration':
                return <LeaveAdministration />;
            case 'Feedback':
                return <Feedback />;
            case 'Logout':
                return <Logout />;
            default:
                return <Home />;
        }
    };

    return (
        <div className="main-container">
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={handleToggleSidebar}>×</button>
                <button 
                    className={`sidebar-link ${activeComponent === 'Home' ? 'active' : ''}`} 
                    onClick={() => setActiveComponent('Home')}
                >Home</button>
                <button 
                    className={`sidebar-link ${activeComponent === 'About' ? 'active' : ''}`} 
                    onClick={() => setActiveComponent('About')}
                >About</button>
                <button 
                    className={`sidebar-link ${activeComponent === 'EmployeeRegistration' ? 'active' : ''}`} 
                    onClick={() => setActiveComponent('EmployeeRegistration')}
                >Employee Registration</button>
                <button 
                    className={`sidebar-link ${activeComponent === 'LeaveAdministration' ? 'active' : ''}`} 
                    onClick={() => setActiveComponent('LeaveAdministration')}
                >Leave Administration</button>
                <button 
                    className={`sidebar-link ${activeComponent === 'Feedback' ? 'active' : ''}`} 
                    onClick={() => setActiveComponent('Feedback')}
                >Feedback</button>
                <button 
                    className={`sidebar-link ${activeComponent === 'Logout' ? 'active' : ''}`} 
                    onClick={() => setActiveComponent('Logout')}
                >Logout</button>
            </div>
            <div className="content">
                <button className="open-btn" onClick={handleToggleSidebar}>☰</button>
                <div className="dashboard-container">
                    <h2>Admin Dashboard</h2>
                    <div className="dashboard-content">
                        {renderComponent()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
