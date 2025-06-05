// src/components/header.js
import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div>
      <div className="Header">
        <h1>Withdrawal Case Log</h1>
        <button className="add-btn">Add</button>
        <div className="filter-bar">
          <input type="text" placeholder="Enter Account No" />
          <input type="text" placeholder="Status" />
          <input type="date" />
          <button className="filter-btn">Filter</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
