import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Our Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Project Title 1 (Aeronautical)</h3>
          <p>Brief description of the aeronautical project.</p>
          {/* Add more details or links */}
        </div>
        <div className="project-item">
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