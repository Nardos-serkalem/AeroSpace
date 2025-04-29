import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import logo from '../assets/images/astroo.png';

function Navigation() {
  return (
    <nav className="main-navigation">
     <div className="logo">
        <Link to="/">
          <img src={logo} alt="Your Logo" className="logo-image" />
        </Link>
        </div>
      <ul className="desktop-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li className="auth-links">
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
      {/* Add mobile menu here later */}
    </nav>
  );
}

export default Navigation;