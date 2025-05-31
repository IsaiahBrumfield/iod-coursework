import React, { useState } from 'react'; // ✅ Make sure useState is imported
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.css';
import Navbar from './Navbar';
import Footer from './Footer';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [token, setToken] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/auth/login', { // Replace with your backend route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log({data})
        // setToken(data.token); // Save token, or use it for auth
        setError('');
        alert('Login successful');
        // Optional: Redirect user or store token in localStorage
        // localStorage.setItem('token', data.token);
        navigate('/home');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Something went wrong');
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-page-container">
        <h2 className="login-page-heading">Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // ✅ Fix onChange
            required
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // ✅ Add password input handling
            required
          />
          <button className="btn" type="submit">
            Login
          </button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {token && <p style={{ color: 'green' }}>Logged in!</p>}

        <p className="register-link">
          Dont have an account? <Link to="/register">Create Account</Link>
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Login;
