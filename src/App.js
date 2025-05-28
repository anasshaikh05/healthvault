// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { auth } from './firebase'; // <-- make sure this is set up
import Signup from './components/Signup';
import Terms from './components/Terms';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import MedicalRecords from './components/MedicalRecords';
import Medications from './components/Medications';
import PersonalInfo from './components/PersonalInfo';
import './App.css';
import './components/Login.css';
import './components/Signup.css';

function App() {
  const [user, setUser] = useState(null);      // Current logged-in user
  const [loading, setLoading] = useState(true); // While checking auth
  const [files, setFiles] = useState([]);      // Uploaded files

  // Firebase auth listener
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleFileUpload = (newFile) => {
    setFiles((prev) => [...prev, newFile]);
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        {!user ? (
          <>
            <Route path="/" element={<Login onLogin={setUser} />} />
            <Route path="/signup" element={<Signup onSignup={setUser} />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route
              path="/dashboard"
              element={
                <div className="main-layout">
                  <Sidebar />
                  <Dashboard user={user} files={files} onFileUpload={handleFileUpload} />
                </div>
              }
            />
            <Route
              path="/medical-records"
              element={
                <div className="main-layout">
                  <Sidebar />
                  <MedicalRecords />
                </div>
              }
            />
            <Route
              path="/medications"
              element={
                <div className="main-layout">
                  <Sidebar />
                  <Medications />
                </div>
              }
            />
            <Route
              path="/personal-info"
              element={
                <div className="main-layout">
                  <Sidebar />
                  <PersonalInfo />
                </div>
              }
            />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
