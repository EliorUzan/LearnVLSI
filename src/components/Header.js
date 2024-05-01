import React from 'react';
import { Link } from 'react-router-dom';
import '../css/css_vars.css'
import '../css/Header.css'
import logoImg from '../navbar_logo.png';

const Header = ({ authenticated, fullName, onSettingsClick }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/" className="logo">
          <img src={logoImg} alt="Logo" className="logo-img" />
        </Link>
      </div>
      <div className="rest-of-the-buttons">
        <div className="dropdown">
          <button className="dropbtn">Interview Questions</button>
          <div className="dropdown-content">
            <Link to="/questions/vlsi/physical-design">Physical Design</Link>
            <Link to="/questions/vlsi/design-verification">Design and Verification</Link>
            <Link to="/questions/vlsi/vlsi-general">VLSI General</Link>
          </div>
        </div>
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
            <Link to="/logic-design-role">Logic Design</Link>
            <Link to="/verification-role">Verification</Link>
            <Link to="/physical-design-role">Physical Design</Link>
            <Link to="/more-roles">More</Link>
          </div>
        </div>
        <Link to="/about-us">About Us</Link>
      </div>
      {authenticated ? (
        <button onClick={onSettingsClick} className="settings-btn">
          Welcome {fullName}
        </button>
      ) : (
        <Link to="/signin" className="sign-in-btn">
          Sign In
        </Link>
      )}
    </div>
  );
};

export default Header;