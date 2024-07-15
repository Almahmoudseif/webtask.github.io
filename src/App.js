import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import Dashboard from './page/Dashboard/Dashboard';
import ApplyRequestForm from './page/ApplyRequestForm';
import LeaveAdministrationForm from './components/LeaveAdmistrationForm';
import EmployeeRegistrationForm from './components/EmployeeRegistrationForm';
import Navbar from './components/Navbar';
import AdminDashboard from './components/AdminDashboard';
import Sidebar from './components/SideBar';
import EmployeeRegistration from './components/EmployeeRegistration';
import Logout from './components/Logout';
import LeaveAdministration from './components/LeaveAdministration';
import LeaveForm from './components/LeaveForm';
import Notification from './components/Notification';
import Feedback from './components/Feedback';



function App() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='Dashboard' element={<Dashboard />} />
          <Route path='apply' element={<ApplyRequestForm />} />
          <Route path='LeaveAdministrationForm' element={<LeaveAdministrationForm />} />
          <Route path='EmployeeRegistrationForm' element={<EmployeeRegistrationForm />} />
          <Route path='Navbar' element={<Navbar />} />
          <Route path='AdminDashboard' element={<AdminDashboard />} />
          <Route path='Sidebar' element={<Sidebar />} />
          <Route path='EmployeeRegistration' element={<EmployeeRegistration addEmployee={addEmployee} />} />
          <Route path='Logout' element={<Logout />} />
          <Route path='LeaveAdministartion' element={<LeaveAdministration />} />
          <Route path='LeaveForm' element={<LeaveForm />} />
          <Route path='Notification' element={<Notification />} />
          <Route path='Feedback' element={<Feedback />} />
        
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
