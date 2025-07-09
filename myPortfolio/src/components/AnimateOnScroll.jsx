import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
export default function AnimateOnScroll({ children, className }) {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const variants = {

    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 }, 
  };

  const transition = {
    duration: 0.5,
    delay: 0.25,
    ease: 'easeOut',
  };

  return (
    <div ref={ref} className={className}>
      <motion.div
        variants={variants}
        initial="hidden" 
        animate={isInView ? 'visible' : 'hidden'} 
        transition={transition}
      >
        {children}
      </motion.div>
    </div>
  );
}