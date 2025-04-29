import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-page">
      <h2>Login</h2>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Login</button>
        <p>Don't have an account? <a href="#signup">Sign Up</a></p>
      </form>
    </div>
  );
}

export default Login;