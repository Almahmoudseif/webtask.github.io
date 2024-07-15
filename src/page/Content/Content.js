import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Analytics from '../Analytics/Analytics';
import Settings from '../Settings/Settings';
import './Content.css';

const Content = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default Content;
