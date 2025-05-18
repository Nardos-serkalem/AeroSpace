import React from 'react';
import './Courses.css';

function Courses() {
  return (
    <div className="courses">
      <div className="courses-container">
        <h1>Our Courses</h1>
        <div className="courses-grid">
          <div className="course-card">
            <h3>Introduction to Aerospace Engineering</h3>
            <p>Learn the fundamentals of aerospace engineering, including aerodynamics and flight mechanics.</p>
            <button className="enroll-button">Learn More</button>
          </div>

          <div className="course-card">
            <h3>Space Systems Engineering</h3>
            <p>Study spacecraft design, orbital mechanics, and space mission planning.</p>
            <button className="enroll-button">Learn More</button>
          </div>

          <div className="course-card">
            <h3>Aviation Technology</h3>
            <p>Explore modern aviation systems, navigation, and aircraft design principles.</p>
            <button className="enroll-button">Learn More</button>
          </div>

          <div className="course-card">
            <h3>Satellite Technology</h3>
            <p>Understand satellite systems, remote sensing, and space communications.</p>
            <button className="enroll-button">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;