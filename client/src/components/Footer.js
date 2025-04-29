import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Ethiopian Aero-Astro. All rights reserved.</p>
        {/* Add any other footer content here, like social media links, contact info, etc. */}
      </div>
    </footer>
  );
}

export default Footer;