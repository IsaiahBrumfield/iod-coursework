import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import Navbar from './Navbar';
import Footer from './Footer';

function Register() {
    const navigate = useNavigate(); // <-- Hook for navigation

  // State hooks to track form input
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      const response = await fetch('http://localhost:3001/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('User registered successfully');
        setError('');
        // Optionally reset form
        setFullName('');
        setEmail('');
        setPassword('');

        setTimeout(() => {
            navigate('/login');
        }, 1000);
      } else {
        setError(data.message || 'Registration failed');
        setSuccess('');
      }
    } catch (err) {
      setError('Something went wrong');
      setSuccess('');
    }
  };

  return (
    <>
      <Navbar />
      <div className="register-page-container">
        <h2 className="register-page-heading">Register</h2>
        <form className="form" onSubmit={handleRegister}>
          <input
            className="input"
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="btn" type="submit">
            Create Account
          </button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
      </div>
      <Footer />
    </>
  );
}

export default Register;
