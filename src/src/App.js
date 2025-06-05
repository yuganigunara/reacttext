// src/App.js
import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/header';
import CaseLogTable from './components/CaseLogTable';
import drsLogo from './assets/DRS logo .png'; // Import the logo
import profileDropdown from './assets/Profile Drop down.png'; // Import the profile dropdown image
import vectorIcon from './assets/Vector (9).png'; // Import the vector icon

function App() {
  return (
    <div className="app-container">
      <div className="top-navbar">
        <div className="logo-section">
          <img src={drsLogo} alt="DRP System" className="drs-logo" />
        </div>
        <nav className="nav-bar">
          <div className="nav-right-group">
            <div className="left-icon-section">
              <img src={vectorIcon} alt="Menu" className="vector-icon" />
            </div>
            <div className="profile-section">
              <img src={profileDropdown} alt="Profile" className="profile-dropdown" />
            </div>
          </div>
        </nav>
      </div>
      <div className="content-wrapper">
        <Sidebar />
        <div className="main-content">
          <Header />
          <CaseLogTable />
        </div>
      </div>
    </div>
  );
}

export default App;

