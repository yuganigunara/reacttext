// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Import the Vector images for buttons
import registerIcon from '../assets/Vector (2).png';
import distributeIcon from '../assets/Vector (3).png';
import caseListIcon from '../assets/Vector (4).png';
import drcIcon from '../assets/Vector (5).png';
import settlementIcon from '../assets/Vector (6).png';
import disputeIcon from '../assets/Vector (7).png';
import litigationIcon from '../assets/Vector (8).png';
import logsIcon from '../assets/Mask group.png';
const sltLogo = require('../assets/SLT logo.png');

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Main Menu Section */}
      <div className="menu-section">
        <button>
          <img src={registerIcon} alt="Register" className="custom-icon" /> Register
        </button>
        <button>
          <img src={distributeIcon} alt="Distribute" className="custom-icon" /> Distribute
        </button>
        <button>
          <img src={caseListIcon} alt="Case List" className="custom-icon" /> Case List
        </button>
        <button>
          <img src={drcIcon} alt="DRC" className="custom-icon" /> DRC
        </button>
        <button>
          <img src={settlementIcon} alt="Settlement" className="custom-icon" /> Settlement
        </button>
        <button>
          <FontAwesomeIcon icon={faEnvelope} className="button-icon" /> Letter Of Demand
        </button>
        <button>
          <img src={disputeIcon} alt="Dispute" className="custom-icon" /> Dispute
        </button>
        <button>
          <img src={litigationIcon} alt="Litigation" className="custom-icon" /> Litigation
        </button>
        <button>
          <img src={logsIcon} alt="Logs" className="custom-icon" /> Logs
        </button>
      </div>

      <div className="logo-container">
        <img src={sltLogo} alt="SLT Mobitel Logo" className="slt-logo" />
      </div>
    </div>
  );
};

export default Sidebar;
