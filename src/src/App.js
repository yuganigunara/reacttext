// src/App.js
import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/header';
import CaseLogTable from './components/CaseLogTable';
import drsLogo from './assets/DRS logo .png'; // Import the logo

function App() {
  return (
    <div className="app-container">
      <div className="top-navbar">
        <div className="logo-section">
          <img src={drsLogo} alt="DRP System" className="drs-logo" />
        </div>
        <nav className="nav-bar">
          
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

