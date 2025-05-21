import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="page-container">
      <h2 className="page-heading">Login</h2>
      <form className="form">
        <input className="input" type="email" placeholder="Email" />
        <input className="input" type="password" placeholder="Password" />
        <button className="btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;