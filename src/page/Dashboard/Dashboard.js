import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
};

export default Dashboard;
