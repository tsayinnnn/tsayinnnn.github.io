import React from 'react'; 
import './Home.css';
import { motion } from 'framer-motion';

function Home() {
  return (
    <section id="home" className="homesection">
      <div className="homecontent">
        <h1>CHARLENE FERNANDEZ</h1>
        <p>SOFTWARE DEVELOPER | GRAPHIC DESIGNER.</p>
      </div>
      <motion.div 
        className="PhoneImage"
        initial={{ scale: 0.5, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }}     
        transition={{ duration: 0.8, ease: "easeOut" }} 
      >
        <img src='/src/assets/phone.png' alt="phone" />
      </motion.div>
    </section>
  );
}

export default Home;