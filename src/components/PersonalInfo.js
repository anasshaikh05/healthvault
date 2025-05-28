import React, { useState } from 'react';
import './PersonalInfo.css'; // Optional styling

function PersonalInfo() {
  const [info, setInfo] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    bloodGroup: '',
    contactNumber: '',
    emergencyContact: '',
    address: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="personal-info-container">
      <h2>Personal Information</h2>
      <form onSubmit={handleSubmit} className="personal-info-form">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={info.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="dateOfBirth"
          value={info.dateOfBirth}
          onChange={handleChange}
          required
        />
        <select name="gender" value={info.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <input
          type="text"
          name="bloodGroup"
          placeholder="Blood Group (e.g. A+)"
          value={info.bloodGroup}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="contactNumber"
          placeholder="Contact Number"
          value={info.contactNumber}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="emergencyContact"
          placeholder="Emergency Contact"
          value={info.emergencyContact}
          onChange={handleChange}
        />
        <textarea
          name="address"
          placeholder="Address"
          value={info.address}
          onChange={handleChange}
        />
        <button type="submit">Save Info</button>
      </form>

      {submitted && (
        <div className="personal-info-summary">
          <h3>Saved Information</h3>
          <p><strong>Name:</strong> {info.fullName}</p>
          <p><strong>Date of Birth:</strong> {info.dateOfBirth}</p>
          <p><strong>Gender:</strong> {info.gender}</p>
          <p><strong>Blood Group:</strong> {info.bloodGroup}</p>
          <p><strong>Contact:</strong> {info.contactNumber}</p>
          <p><strong>Emergency Contact:</strong> {info.emergencyContact}</p>
          <p><strong>Address:</strong> {info.address}</p>
        </div>
      )}
    </div>
  );
}

export default PersonalInfo;
