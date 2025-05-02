// client/src/components/Footer.js
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logoFooter from '../assets/images/your-logo.png'; // Import your logo

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-top">
        <div className="footer-logo-area">
          <Link to="/">
            <img src={logoFooter} alt="Your Footer Logo" className="logo-image-footer" />
          </Link>
          <p className="footer-definition">The African Aeronautics and Astronautics Center (AAAC) is a leading hub for aerospace innovation in Africa, focused on advancing space science, aviation technology, and research. We aim to build local capacity through collaboration, education, and sustainable development, driving Africa’s presence in global aeronautics and astronautics.</p> {/* Add your definition here */}
        </div>
        {/* You can add other top elements here if needed */}
      </div>
      <div className="footer-content">
        <div className="footer-column">
          <h3>About SGAC</h3>
          <ul>
            <li><Link to="/about/mission">Mission & Vision</Link></li>
            <li><Link to="/about/team">Our Team</Link></li>
            <li><Link to="/about/history">History</Link></li>
            {/* Add more "About" links */}
          </ul>
        </div>
        <div className="footer-column">
          <h3>Key Links</h3>
          <ul>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/scholarships">Online Courses</Link></li>
            <li><Link to="/vacancies">Vacancies</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/partnership">partnership</Link></li>
            <li><Link to="/Events"></Link>Events</li>
            {/* Add more key links */}
          </ul>
        </div>
        <div className="footer-column contact-info">
          <h3>Contact Us</h3>
          <p>6Kilo</p>
          <p>Addis Ababa, Ethiopia</p>
          <p>Email: <a href="mailto:info@Aeronautics and Astronautics Center.org">info@Aeronautics and Astronautics Center.org</a></p>
          <p>Web: <a href="https://African Aeronautics and Astronautics Center.org/" target="_blank" rel="noopener noreferrer">African Aeronautics and Astronautics Center.org</a></p>
        </div>
        {/* You can add more columns here for other categories */}
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} African Aeronautics and Astronautics Center | All Rights Reserved | <Link to="/privacy">Privacy Policy</Link> | <Link to="/terms">Terms & Conditions</Link></p>
      </div>
    </footer>
  );
}

export default Footer;