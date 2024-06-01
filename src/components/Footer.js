import React from 'react';
import '../css/css_vars.css'
import '../css/Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <a href="contact-us" className="contact-btn">צרו קשר</a>
      <p>&copy; {new Date().getFullYear()} שם_בלוג</p>
    </div>
  );
};

export default Footer;
