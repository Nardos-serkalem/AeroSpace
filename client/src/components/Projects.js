import React from 'react';
import './Projects.css';
import aeronauticalImage from '../assets/images/img1.jpg'; // Adjust path to your image
import astronauticalImage from '../assets/images/img2.jpg'; // Adjust path to your image


function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Our Projects</h2>
      <div className="project-list">
        {/* Project 1: Aeronautical */}
        <div className="project-item">
          <img src={aeronauticalImage} alt="Aeronautical Project" className="project-image" />
          <h3>Project Title 1 (Aeronautical)</h3>
          <p>Brief description of the aeronautical project.</p>
          {/* Add more details or links */}
        </div>

        {/* Project 2: Astronautical */}
        <div className="project-item">
          <img src={astronauticalImage} alt="Astronautical Project" className="project-image" />
          <h3>Project Title 2 (Astronautical)</h3>
          <p>Details about the astronautical project.</p>
          {/* Add more details or links */}
        </div>

        {/* Add more project items */}
      </div>
    </section>
  );
}

export default Projects;
