// src/components/Terms.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Terms = () => {
  const [terms, setTerms] = useState('');

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const res = await axios.get('http://localhost:5000/terms');
        setTerms(res.data.message);
      } catch (error) {
        setTerms('Error loading terms and conditions.');
      }
    };
    fetchTerms();
  }, []);

  return (
    <div>
      <h2>Terms and Conditions</h2>
      <p>{terms}</p>
    </div>
  );
};

export default Terms;

