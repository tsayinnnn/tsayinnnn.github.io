import './Section.css';
import { motion } from 'framer-motion'; 
import './Projects.css';


function Projects() {
  return (
    <section id="projects" className="section">
      <div className="software" style={{ background: "#964E50" }}>
        <h2 className="works-title">WORKS</h2>
        <div className="works-categories">
          <p>SOFTWARE DESIGN</p>
          <p>SOFTWARE DEVELOPMENT</p>
          <p>BRANDING</p>
          <p>GRAPHIC DESIGN</p>
        </div>
      </div>

   

    </section>
  );
}

export default Projects;