
// src/Login.js
import React, { useState } from 'react';
import './App.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in as ${username}`);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label className="input-label">Username</label>
          <input
            className="login-input"
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label className="input-label">Password</label>
          <div className="password-wrapper">
            <input
              className="login-input"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>

          <button className="login-button" type="submit">Login</button>

          <p className="signup-text">
            Don’t have an account? <a href="#" className="signup-link">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
