import React, { useRef, useEffect } from 'react'; 
import './Home.css';
import { motion } from 'framer-motion';

function Home() {
  const blurBoxRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!blurBoxRef.current) return;

      const scrollY = window.scrollY;
      const animationEnd = window.innerHeight * 1;

      let scrollProgress = scrollY / animationEnd;
      scrollProgress = Math.max(0, Math.min(1, scrollProgress)); 
      const moveDistance = -0.20 * window.innerWidth; 
      const newXPosition = scrollProgress * moveDistance;

      blurBoxRef.current.style.transform = `translateY(-50%) translateX(${newXPosition}px)`;
    };

    window.addEventListener('scroll', handleScroll);

  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  return (
    <section id="home" className="homesection">
      {}
      <div className="blurbox" ref={blurBoxRef}></div>
      
      <div className="homecontent">
        <h1>CHARLENE</h1>
        <h1>FERNANDEZ</h1>
        <p>SOFTWARE DEVELOPER | GRAPHIC DESIGNER.</p>
      </div>
    </section>
  );
}

export default Home;