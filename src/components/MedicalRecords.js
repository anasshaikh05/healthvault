import React, { useState } from 'react';
import './MedicalRecords.css'; // Optional CSS file for styling

function MedicalRecords() {
  const [records, setRecords] = useState([]);
  const [form, setForm] = useState({ date: '', doctor: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.date && form.doctor && form.description) {
      setRecords([...records, form]);
      setForm({ date: '', doctor: '', description: '' });
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <div className="medical-records-container">
      <h2>Medical Records</h2>
      <form onSubmit={handleSubmit} className="record-form">
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="doctor"
          placeholder="Doctor's Name"
          value={form.doctor}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description / Diagnosis"
          value={form.description}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Record</button>
      </form>

      <div className="records-list">
        {records.length === 0 ? (
          <p>No records yet.</p>
        ) : (
          <ul>
            {records.map((record, index) => (
              <li key={index}>
                <strong>{record.date}</strong> – Dr. {record.doctor}<br />
                <span>{record.description}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default MedicalRecords;
