import React from 'react';
import '../App.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Project One</h3>
          <p>My first project which I worked after an inspiration.</p>
        </div>
        <div className="project-item">
          <h3>Project Two</h3>
          <p>Another awesome project but still incomplete.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
