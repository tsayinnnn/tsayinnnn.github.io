import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

// The slider images
const sliderImages = [
  '/src/assets/apps/9.png',
  '/src/assets/apps/10.png',
  '/src/assets/apps/11.png',
  '/src/assets/apps/12.png',
  '/src/assets/apps/13.png',
  '/src/assets/apps/14.png',
  '/src/assets/apps/15.png',
  '/src/assets/apps/16.png',
  '/src/assets/apps/17.png',
  '/src/assets/apps/18.png',  

];

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderWrapperRef = useRef(null);

  // --- DRAG AND TAP NAVIGATION LOGIC ---
  const handleDragEnd = (event, info) => {
    // A simple threshold to decide if the swipe is significant enough
    const swipeThreshold = 50; 
    if (info.offset.x < -swipeThreshold) {
      // Swiped left, go to next slide
      setCurrentIndex((p) => (p + 1) % sliderImages.length);
    } else if (info.offset.x > swipeThreshold) {
      // Swiped right, go to previous slide
      setCurrentIndex((p) => (p - 1 + sliderImages.length) % sliderImages.length);
    }
  };
  
  const handleTap = (event) => {
    // Get the bounding box of the slider wrapper
    const bounds = sliderWrapperRef.current.getBoundingClientRect();
    // Check if the tap was on the right or left half
    if (event.clientX > bounds.left + bounds.width / 2) {
      setCurrentIndex((p) => (p + 1) % sliderImages.length);
    } else {
      setCurrentIndex((p) => (p - 1 + sliderImages.length) % sliderImages.length);
    }
  };

  // --- ANIMATION VARIANTS ---
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="projects" className="projects-container">
      {/* Part 1: WORKS Header */}
      <div className="works-header">
        <h2 className="works-title">WORKS</h2>
        <div className="works-categories">
          <p>SOFTWARE DESIGN</p>
          <p>SOFTWARE DEVELOPMENT</p>
          <p>BRANDING</p>
          <p>GRAPHIC DESIGN</p>
        </div>
      </div>

      {/* Part 2: Feature Section with Slider */}
      <motion.div
        className="feature-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {/* Left Column: Text Content */}
        <motion.div className="feature-text" variants={fadeIn}>
          <h3>
            SOFTWARE DESIGN<br />AND DEVELOPMENT
          </h3>
          <p>
            Engineering gives an application its mind. Design gives it a face and a voice. Below are the conversations I've started.
          </p>
        </motion.div>

        {/* Right Column: Image Slider */}
        <motion.div className="feature-slider-container" variants={fadeIn} ref={sliderWrapperRef}>
          <motion.div
            className="feature-slider"
            drag="x" // Enable horizontal dragging
            dragConstraints={{ right: 0, left: 0 }} // Keep it from being dragged out of view
            dragElastic={0.1} // A little bit of "give" at the edges
            onDragEnd={handleDragEnd}
            onTap={handleTap}
            // Animate the slider based on the current index
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {sliderImages.map((image, index) => (
              <img key={index} src={image} alt={`Portfolio work ${index + 1}`} />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Projects;