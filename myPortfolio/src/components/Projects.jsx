import React, { useState, useRef, useEffect } from 'react';
import styles from './Projects.module.css';
const images = import.meta.glob('/src/assets/apps/*.png', { eager: true });

const projectImages = [
  '9.png', '10.png', '11.png', '12.png', '13.png',
  '14.png', '15.png', '16.png', '17.png', '18.png'
];

const Projects = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 1 + projectImages.length;

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleClick = (e) => {
     
      const rect = slider.getBoundingClientRect();
      const midPoint = rect.left + rect.width / 2;

 
      if (e.clientX > midPoint) {
        setCurrentIndex(prevIndex => Math.min(prevIndex + 1, totalSlides - 1));
      } 
      else {
        setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
      }
    };

    slider.addEventListener('click', handleClick);

    return () => {
      slider.removeEventListener('click', handleClick);
    };
  }, [totalSlides]); 
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    const slide = slider.children[currentIndex];
    if (slide) {
      const sliderWidth = slider.offsetWidth;
      const slideWidth = slide.offsetWidth;
      const slideLeft = slide.offsetLeft;
      
      const scrollToPosition = slideLeft - (sliderWidth / 2) + (slideWidth / 2);

      slider.scrollTo({
        left: scrollToPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]); 


  return (
    <section className={styles.worksSection} id="projects">
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>WORKS</h1>
          <div className={styles.categories}>
            <span>SOFTWARE DESIGN</span>
            <span>SOFTWARE DEVELOPMENT</span>
            <span>BRANDING</span>
            <span>GRAPHIC DESIGN</span>
          </div>
        </div>
      </div>
      
      <div className={styles.slider} ref={sliderRef}>
  
        <div className={`${styles.slide} ${styles.introSlide}`}>
          <div className={styles.introText}>
            <h2>SOFTWARE DESIGN AND DEVELOPMENT</h2>
            <p>
              Engineering gives an application its mind. Design gives it a face and a voice. Below are the conversations I've started.
            </p>
          </div>
        </div>
    
        {projectImages.map((imageName, index) => (
          <div key={index} className={styles.slide}>
            <div className={styles.imageWrapper}>
              <img src={images[`/src/assets/apps/${imageName}`].default} alt={`Project Example ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;