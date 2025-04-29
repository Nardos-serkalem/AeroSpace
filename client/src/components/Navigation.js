import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="main-navigation">
      <div className="logo">Ethiopian Aero-Astro</div>
      <ul className="desktop-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#projects">Projects</a></li>
        <li className="auth-links">
          <a href="#login">Login</a>
          <a href="#signup">Sign Up</a>
        </li>
      </ul>
      {/* Add mobile menu here later */}
    </nav>
  );
}

export default Navigation;