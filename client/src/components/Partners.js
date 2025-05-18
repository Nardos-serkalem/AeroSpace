import React from 'react';
import './Partners.css';

function Partners() {
  return (
    <div className="partners">
      <div className="partners-container">
        <h1>Our Partners</h1>
        <div className="partners-grid">
          <div className="partner-card">
            <div className="partner-logo">
              {/* Add partner logo here */}
              <div className="logo-placeholder"></div>
            </div>
            <h3>Space Research Institute</h3>
            <p>Leading space research and development partner</p>
          </div>

          <div className="partner-card">
            <div className="partner-logo">
              <div className="logo-placeholder"></div>
            </div>
            <h3>African Space Agency</h3>
            <p>Continental space program collaboration</p>
          </div>

          <div className="partner-card">
            <div className="partner-logo">
              <div className="logo-placeholder"></div>
            </div>
            <h3>Global Aerospace Solutions</h3>
            <p>International aerospace technology partner</p>
          </div>

          <div className="partner-card">
            <div className="partner-logo">
              <div className="logo-placeholder"></div>
            </div>
            <h3>Tech Universities Network</h3>
            <p>Academic and research collaboration network</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;