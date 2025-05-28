import React, { useState } from 'react';
import './Medications.css'; // Optional for styling

function Medications() {
  const [currentMedications, setCurrentMedications] = useState([]);
  const [allergies, setAllergies] = useState([]);

  const [medForm, setMedForm] = useState({ name: '', dosage: '', purpose: '' });
  const [allergyForm, setAllergyForm] = useState({ name: '', reaction: '' });

  const handleMedChange = (e) => {
    const { name, value } = e.target;
    setMedForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAllergyChange = (e) => {
    const { name, value } = e.target;
    setAllergyForm((prev) => ({ ...prev, [name]: value }));
  };

  const addMedication = (e) => {
    e.preventDefault();
    if (medForm.name && medForm.dosage && medForm.purpose) {
      setCurrentMedications([...currentMedications, medForm]);
      setMedForm({ name: '', dosage: '', purpose: '' });
    } else {
      alert("Please fill all medication fields.");
    }
  };

  const addAllergy = (e) => {
    e.preventDefault();
    if (allergyForm.name && allergyForm.reaction) {
      setAllergies([...allergies, allergyForm]);
      setAllergyForm({ name: '', reaction: '' });
    } else {
      alert("Please fill all allergy fields.");
    }
  };

  return (
    <div className="medications-container">
      <h2>Medications</h2>

      <form onSubmit={addMedication} className="med-form">
        <h3>Add Medication</h3>
        <input
          type="text"
          name="name"
          placeholder="Medicine Name"
          value={medForm.name}
          onChange={handleMedChange}
          required
        />
        <input
          type="text"
          name="dosage"
          placeholder="Dosage (e.g. 5mg)"
          value={medForm.dosage}
          onChange={handleMedChange}
          required
        />
        <input
          type="text"
          name="purpose"
          placeholder="Purpose"
          value={medForm.purpose}
          onChange={handleMedChange}
          required
        />
        <button type="submit">Add Medication</button>
      </form>

      <form onSubmit={addAllergy} className="allergy-form">
        <h3>Add Allergy</h3>
        <input
          type="text"
          name="name"
          placeholder="Medicine Name"
          value={allergyForm.name}
          onChange={handleAllergyChange}
          required
        />
        <input
          type="text"
          name="reaction"
          placeholder="Reaction (e.g. Rash, Breathing issue)"
          value={allergyForm.reaction}
          onChange={handleAllergyChange}
          required
        />
        <button type="submit">Add Allergy</button>
      </form>

      <section>
        <h3>Current Medications</h3>
        {currentMedications.length === 0 ? (
          <p>No medications added.</p>
        ) : (
          <ul>
            {currentMedications.map((med, index) => (
              <li key={index}>
                <strong>{med.name}</strong> – {med.dosage} – {med.purpose}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h3>Allergic Medications</h3>
        {allergies.length === 0 ? (
          <p>No allergy records.</p>
        ) : (
          <ul>
            {allergies.map((allergy, index) => (
              <li key={index}>
                <strong>{allergy.name}</strong> – Reaction: {allergy.reaction}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default Medications;
