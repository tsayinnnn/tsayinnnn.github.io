// src/components/ProjectCard.jsx

import { motion } from 'framer-motion';
import './ProjectCard.css'; // We will create this CSS file next

// Define animation variants for a staggered fade-in effect
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.2 // This will animate children one after the other
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// The reusable card component
function ProjectCard({ brand, title, subtitle, imageUrl, altText }) {
  return (
    <motion.div
      className="project-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }} // Animate when 40% of the card is in view
    >
      {/* Left Column: Text Content */}
      <motion.div className="card-content" variants={childVariants}>
        <div className="card-text">
          <p className="brand-name">
            {/* Using spans to color the "linetype" text */}
            <span>line</span><span>type</span>
          </p>
          <h3 className="card-title">{title}</h3>
          <p className="card-subtitle">{subtitle}</p>
        </div>
      </motion.div>

      {/* Right Column: Image */}
      <motion.div className="card-image" variants={childVariants}>
        <img src={imageUrl} alt={altText} />
      </motion.div>
    </motion.div>
  );
}

export default ProjectCard;