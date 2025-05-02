import React from 'react';
import './AboutUs.css';
import motionVideo from '../assets/videos/backgroundd.mp4'; // Update filename

function AboutUs() {
  return (
    <section id="about" className="about-us-section">
      <h2>About Us</h2>
      <div className="about-us-content">
        <div className="about-text">
          <p>
            The African Aeronautics and Astronautics Center (AAAC) is a leading hub for aerospace innovation in Africa, focused on advancing space science, aviation technology, and research. We aim to build local capacity through collaboration, education, and sustainable development, driving Africa’s presence in global aeronautics and astronautics.
          </p>
        </div>
        <div className="about-image">
          <video
            src={motionVideo}
            autoPlay
            loop
            muted
            playsInline
            className="motion-video"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
