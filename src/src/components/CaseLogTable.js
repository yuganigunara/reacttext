import React from 'react';
import './CaseLogTable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const CaseLogTable = () => {
  return (
    <div className="case-log-container">
      <div className="filter-row">
        <div className="search-container">
          <input type="text" placeholder="Search by Case ID..." className="search-input" />
          <FontAwesomeIcon icon={faSearch} className="search-icon-right" />
        </div>
      </div>

      <table className="case-log-table">
        <thead>
          <tr>
            <th>Case ID</th>
            <th>Status</th>
            <th>Account No</th>
            <th>Amount</th>
            <th>Remark</th>
            <th>Withdraw By</th>
            <th>Withdraw On</th>
            <th>Approved On</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>C001</td>
            <td>Pending Withdraw</td>
            <td>00000</td>
            <td>15,000</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>C002</td>
            <td>Withdraw</td>
            <td>00000</td>
            <td>15,000</td>
            <td>-</td>
            <td>Admin</td>
            <td>2025-06-03</td>
            <td>2025-06-04</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CaseLogTable;
