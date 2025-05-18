import React from 'react';
import './DiscoverUs.css';

function DiscoverUs() {
  return (
    <div className="discover-us">
      <div className="discover-us-container">
        <h1>Discover Us</h1>
        <div className="discover-content">
          <section className="mission-section">
            <h2>Our Mission</h2>
            <p>Advancing aerospace innovation and education across Africa through cutting-edge research and collaboration.</p>
          </section>
          
          <section className="vision-section">
            <h2>Our Vision</h2>
            <p>To be Africa's leading center for aerospace technology and research, fostering the next generation of aerospace pioneers.</p>
          </section>

          <section className="values-section">
            <h2>Our Values</h2>
            <ul>
              <li>Innovation and Excellence</li>
              <li>Collaboration and Partnership</li>
              <li>Sustainability and Responsibility</li>
              <li>Education and Development</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default DiscoverUs;