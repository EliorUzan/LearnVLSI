import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link for routing
import axios from 'axios'; // Import Axios for HTTP requests
import '../css/css_vars.css';
import '../css/SignIn.css';

const SignIn = ({ onSignIn }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInError, setSignInError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', {
        email: email,
        password: password,
      });
      console.log('Sign In Response:', response.data); // Log the response from the server
      if (response.data.ok) {
        onSignIn(response.data); // Pass full name to the parent component
        navigate('/');
      } else {
        setSignInError('Unsuccessful Sign In');
      }
    } catch (error) {
      console.error('Error signing in:', error);
      setSignInError('Error Signing-in. Please try again.');
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form className="signin-form" onSubmit={handleSignIn}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <div className="form-group">
          <button type="submit">Sign In</button>
        </div>
        {signInError && <span className="error-message">{signInError}</span>}
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
