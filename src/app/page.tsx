"use client"; // Add this line at the top

import Image from "next/image";
import axios from 'axios';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    age: '',
    sex: '',
    cp: '',
    trestbps: '',
    chol: '',
    fbs: '',
    restecg: '',
    thalach: '',
    exang: '',
    oldpeak: '',
    slope: '',
    ca: '',
    thal: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/predict', formData);
      console.log('Prediction Result:', response.data.result);
    } catch (error) {
      console.error('Error making prediction:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Heart Disease Prediction</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} style={styles.input} />
          
          {/* Radio buttons for sex */}
          <div style={styles.radioGroup}>
            <label>
              <input
                type="radio"
                name="sex"
                value="1"
                checked={formData.sex === '1'}
                onChange={handleChange}
                style={styles.radioInput}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="sex"
                value="2"
                checked={formData.sex === '2'}
                onChange={handleChange}
                style={styles.radioInput}
              />
              Female
            </label>
          </div>

          <input type="number" name="cp" placeholder="Chest Pain (cp)" value={formData.cp} onChange={handleChange} style={styles.input} />
          <input type="number" name="trestbps" placeholder="Resting Blood Pressure (trestbps)" value={formData.trestbps} onChange={handleChange} style={styles.input} />
          <input type="number" name="chol" placeholder="Cholesterol (chol)" value={formData.chol} onChange={handleChange} style={styles.input} />
          <input type="number" name="fbs" placeholder="Fasting Blood Sugar (fbs)" value={formData.fbs} onChange={handleChange} style={styles.input} />
          <input type="number" name="restecg" placeholder="Resting ECG (restecg)" value={formData.restecg} onChange={handleChange} style={styles.input} />
          <input type="number" name="thalach" placeholder="Max Heart Rate (thalach)" value={formData.thalach} onChange={handleChange} style={styles.input} />
          <input type="number" name="exang" placeholder="Exercise Induced Angina (exang)" value={formData.exang} onChange={handleChange} style={styles.input} />
          <input type="number" name="oldpeak" placeholder="Oldpeak" value={formData.oldpeak} onChange={handleChange} style={styles.input} />
          <input type="number" name="slope" placeholder="Slope" value={formData.slope} onChange={handleChange} style={styles.input} />
          <input type="number" name="ca" placeholder="Number of Major Vessels (ca)" value={formData.ca} onChange={handleChange} style={styles.input} />
          <input type="number" name="thal" placeholder="Thalassemia (thal)" value={formData.thal} onChange={handleChange} style={styles.input} />
          <button type="submit" style={styles.button}>Predict</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', 
    backgroundColor: '#f0f0f0',
  },
  card: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '400px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '0.75rem',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  radioGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
  radioInput: {
    marginRight: '0.5rem',
  }
};