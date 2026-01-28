import React from 'react';

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1 className="login-title">Diabetes Risk Classification System</h1>
            <p className="login-subtitle">Sign in to your account</p>
          </div>

          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Enter your email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="Enter your password"
              />
            </div>

            <button type="submit" className="btn-login">
              Continue
            </button>
          </form>

          <div className="login-footer">
            <p className="footer-text">
              Already have an account? <a href="#" className="footer-link">Sign in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;