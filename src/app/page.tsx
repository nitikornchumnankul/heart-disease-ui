"use client";

import axios from 'axios';
import { useState } from 'react';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Link from 'next/link';

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

  const [predictionResult, setPredictionResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formattedData = {
      age: Number(formData.age),
      sex: Number(formData.sex),
      cp: Number(formData.cp),
      trestbps: Number(formData.trestbps),
      chol: Number(formData.chol),
      fbs: Number(formData.fbs),
      restecg: Number(formData.restecg),
      thalach: Number(formData.thalach),
      exang: Number(formData.exang),
      oldpeak: parseFloat(formData.oldpeak),
      slope: Number(formData.slope),
      ca: Number(formData.ca),
      thal: Number(formData.thal)
    };

    try {
      const response = await axios.post('http://119.59.103.209:8000/predict', formattedData, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      setPredictionResult(response.data.prediction);
    } catch (error) {
      console.error('Error making prediction:', error);
      setPredictionResult('Error: Failed to fetch prediction');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        {/* Left panel with yellow background */}
        <div style={styles.leftPanel}>
          <div style={styles.imageContainer}>
            <div style={styles.imageWrapper}>
              <Image
                src="/hp.png"
                alt="heart"
                width={450}
                height={400}
                style={styles.image}
              />
            </div>
            <h1 style={styles.welcomeText}>Welcome Monica</h1>
          </div>
        </div>

        {/* Right panel with form */}
        <div style={styles.rightPanel}>
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
              <button type="submit" style={styles.button} disabled={loading}>
                {loading ? "Predicting..." : "Predict"}
              </button>
            </form><br />
            <Link href="/Login" style={styles.button}>
              Go to Login Page
            </Link>
            {/* Conditionally display the prediction result */}
            {predictionResult && (
              <div style={styles.result}>
                <h3>Prediction Result:</h3>
                <p>{predictionResult}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  leftPanel: {
    backgroundColor: '#ffeb3b',
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '20px',
  },
  rightPanel: {
    backgroundColor: '#b2ebf2',
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '400px',
    textAlign: 'center',
  },
  imageContainer: {
    textAlign: 'center',
  },
  imageWrapper: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '50px',
    display: 'inline-block',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  image: {
    borderRadius: '30px',
    backgroundColor: '#b2ebf2',
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
  },
  result: {
    marginTop: '1rem',
    padding: '1rem',
    backgroundColor: '#e0ffe0',
    borderRadius: '8px',
    border: '1px solid #0070f3',
  },
  welcomeText: {
    fontSize: '35px',
    fontWeight: 'bold',
    marginTop: '20px',
    color: '#000',
  },
};
