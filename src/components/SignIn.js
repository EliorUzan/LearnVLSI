import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import '../css/css_vars.css'
import '../css/SignIn.css'

const SignIn = () => {
  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form className="signin-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <input type="checkbox" id="remember-me" name="remember-me" />
          <label htmlFor="remember-me">Remember Me</label>
        </div>
        <div className="form-group">
          <button type="submit">Sign In</button>
        </div>
      </form>
      <div className="social-login">
        <button className="linkedin-btn">Sign In with LinkedIn</button>
        <button className="google-btn">Sign In with Google</button>
      </div>
      <div className="forgot-password">
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
      <div className="register">
        <p>Don't have an account yet? <Link to="/register" className="register-link">Register Here</Link></p>
      </div>
      {/* Add CAPTCHA here */}
    </div>
  );
};

export default SignIn;
