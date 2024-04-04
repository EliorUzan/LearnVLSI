import React from 'react';
import '../css/css_vars.css'
import '../css/Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <a href="contact-us" className="contact-btn">Contact Us</a>
      <p>&copy; {new Date().getFullYear()} Career and Success</p>
    </div>
  );
};

export default Footer;
