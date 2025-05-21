import React from 'react';
import './Register.css';

function Register() {
    return (
        <div className="page-container">
            <h2 className="page-heading">Register</h2>
            <form className="form">
                <input className="input" type="text" placeholder="Full Name" />
                <input className="input" type="email" placeholder="Email" />
                <input className="input" type="password" placeholder="Password" />
                <button className="btn" type="submit">Create Account</button>
            </form>
        </div>
    );
}

export default Register;