
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Only show once scrolled a bit
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
      style={{ 
        scaleX,
        background: "linear-gradient(to right, var(--accent), var(--primary))",
        opacity: isVisible ? 1 : 0
      }}
      transition={{ opacity: { duration: 0.3 } }}
    />
  );
};

export default ScrollProgress;
