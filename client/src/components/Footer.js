import React from 'react';
import './Footer.css';
import logo from '../assets/images/your-logo.png'; // Adjust the path to your actual logo
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-top">
        {/* Column 1: Logo + Description */}
        <div className="footer-logo-area">
          <img src={logo} alt="AAAC Logo" className="logo-image-footer" />
          <p className="footer-definition">
            African Aeronautics and Astronautics Center – Driving innovation and development across Africa’s aerospace sector.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/news">News</a></li>
            <li><a href='/discover-us'>DiscoverUs</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li><a href="/publications">Publications</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/partners">Partners</a></li>
          </ul>
        </div>

        {/* Column 4: Contact Info + Social Media */}
        <div className="footer-column contact-info">
          <h3>Contact</h3>
          <p><a href="mailto:info@aaac.org">info@aaac.org</a></p>
          <p>Phone: +251 123 456 789</p>
          <p>Addis Ababa, Ethiopia</p>

          <div className="social-media-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 African Aeronautics and Astronautics Center. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
