import React from 'react';
import UploadButton from './UploadButton';
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard({ user, files, onFileUpload }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    navigate('/');
  };

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="app-title">Health Vault</h2>
        <ul className="sidebar-menu">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/medical-records">Medical Records</Link></li>
          <li><Link to="/medications">Medications</Link></li>
          <li><Link to="/personal-info">Personal Info</Link></li>
          <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="dashboard-content">
        <header className="dashboard-header">
          <p className="welcome-msg">Welcome, {user.email}</p>
        </header>

        <UploadButton onFileUpload={onFileUpload} />

        <section className="uploaded-files-section">
          <h2>Uploaded Files:</h2>
          {files.length > 0 ? (
            <ul className="file-list">
              {files.map((file, index) => (
                <li key={index}>
                  <strong>{file.name}</strong> <br />
                  IPFS Hash: <code>{file.ipfsHash}</code>
                </li>
              ))}
            </ul>
          ) : (
            <p>No files uploaded yet.</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
