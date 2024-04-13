import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link for routing
import axios from 'axios'; // Import Axios for HTTP requests
import '../css/css_vars.css';
import '../css/Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [registrationError, setRegistrationError] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordMatchError(false);
  };

  const handleRetypePasswordChange = (e) => {
    setRetypePassword(e.target.value);
    setPasswordMatchError(false);
  };

  const sendRegistrationData = async (registrationData) => {
    try {
      const response = await axios.post('http://localhost:3001/register', registrationData);
      console.log('Response from server:', response.data); // Log the response from the server
      if (response.data.ok) {
        navigate('/');
      } else {
        console.log(response.data.message);
        setRegistrationError(response.data.message); // Set the registration error message
      }
    } catch (error) {
      console.error('Error sending registration data:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== retypePassword) {
      setPasswordMatchError(true);
      return;
    }
    // Create the JSON object with registration details
    const registrationData = {
      email: document.getElementById('email').value,
      full_name: document.getElementById('fullname').value,
      password: password,
    };
    console.log(registrationData);
    // Send the registration data to the server
    await sendRegistrationData(registrationData);
  };

  return (
    <div className="registration-container">
      <h2>Register</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input type="text" id="fullname" name="fullname" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="retype-password">Retype Password</label>
          <input type="password" id="retype-password" name="retype-password" value={retypePassword} onChange={handleRetypePasswordChange} required />
          {passwordMatchError && <span className="password-match-error">Passwords do not match</span>}
        </div>
        <div className="form-group">
          <button type="submit" className="register-btn">Register</button>
        </div>
      </form>
      {registrationError && <div className="error-message">{registrationError}</div>}
      <div className="existing-account">
        <p>Already have an account? <Link to="/signin" className="signin-link">Sign In Here</Link></p>
      </div>
    </div>
  );
};

export default Register;
