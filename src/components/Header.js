import React from 'react';
import { Link } from 'react-router-dom';
import '../css/css_vars.css'
import '../css/Header.css'
import logoImg from '../navbar_logo.png'; // Import the logo image

const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">
        {/* Your logo image or text goes here */}
        <Link to="/" className="logo">
            <img src={logoImg} alt="Logo" className="logo-img" />
            {/* <img src="the_img_tags_should_appear_as_above" alt="Logo" className="logo-img" /> */}
        </Link>
      </div>
      <div className="rest-of-the-buttons">
        <Link to="/interview-questions">Interview Questions</Link>
        <div className="dropdown">
          <button className="dropbtn">Companies</button>
          <div className="dropdown-content">
            <Link to="/nvidia">Nvidia</Link>
            <Link to="/google">Google</Link>
            <Link to="/intel">Intel</Link>
            <Link to="/marvel">Marvel</Link>
            <Link to="/aws">AWS</Link>
            <Link to="/broadcom">Broadcom</Link>
            <Link to="/cisco">Cisco</Link>
            <Link to="/more-companies">More</Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Roles in VLSI</button>
          <div className="dropdown-content">
            <Link to="/logic-design">Logic Design</Link>
            <Link to="/verification">Verification</Link>
            <Link to="/physical-design">Physical Design</Link>
            <Link to="/more-roles">More</Link>
          </div>
        </div>
        <Link to="/about-us">About Us</Link>
      </div>
      <Link to="/signin" className="sign-in-btn">Sign In</Link>
    </div>
  );
};

export default Header;
