import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Health Vault</h2>
      <ul>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/medical-records"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Medical Records
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/medications"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Medications
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/personal-info"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Personal Info
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

