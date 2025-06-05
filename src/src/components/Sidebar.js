// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faFileAlt, faListAlt, faGavel, faHandshake, faEnvelope, faExclamationTriangle, faBalanceScale, faHistory } from '@fortawesome/free-solid-svg-icons';

const sltLogo = require('../assets/SLT logo.png');

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Main Menu Section */}
      <div className="menu-section">
        <button>
          <FontAwesomeIcon icon={faPlus} className="button-icon" /> Register
        </button>
        <button>
          <FontAwesomeIcon icon={faFileAlt} className="button-icon" /> Distribute
        </button>
        <button>
          <FontAwesomeIcon icon={faListAlt} className="button-icon" /> Case List
        </button>
        <button>
          <FontAwesomeIcon icon={faGavel} className="button-icon" /> DRC
        </button>
        <button>
          <FontAwesomeIcon icon={faHandshake} className="button-icon" /> Settlement
        </button>
        <button>
          <FontAwesomeIcon icon={faEnvelope} className="button-icon" /> Letter Of Demand
        </button>
        <button>
          <FontAwesomeIcon icon={faExclamationTriangle} className="button-icon" /> Dispute
        </button>
        <button>
          <FontAwesomeIcon icon={faBalanceScale} className="button-icon" /> Litigation
        </button>
        <button>
          <FontAwesomeIcon icon={faHistory} className="button-icon" /> Logs
        </button>
      </div>

      <div className="logo-container">
        <div className="logo-placeholder">SLT Mobitel</div>
        <img src={sltLogo} alt="SLT Mobitel Logo" className="slt-logo" />
      </div>
    </div>
  );
};

export default Sidebar;
