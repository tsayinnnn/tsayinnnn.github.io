import './Section.css';
import { motion } from 'framer-motion'; 
import './Projects.css';


function Projects() {
  return (
    <section id="projects" className="section">
      <div class="stats-bar">
        <div class="stat-item">
          <p class="stat-number">7</p>
          <p class="stat-description">Years in Graphic design</p>
        </div>
        <div class="stat-item">
          <p class="stat-number">4</p>
          <p class="stat-description">Years of experience in UI/UX design</p>
        </div>
        <div class="stat-item">
          <p class="stat-number">24</p>
          <p class="stat-description">UI projects completed</p>
        </div>
        <div class="stat-item">
          <p class="stat-number">7</p>
          <p class="stat-description">Sectors of Products and Businesses</p>
        </div>
      </div>
        <h2>Projects</h2>

    </section>
  );
}

export default Projects;