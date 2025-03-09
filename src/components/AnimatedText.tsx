
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  animated?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = "", 
  once = true,
  animated = true
}) => {
  // Split text into words
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i }
    })
  };
  
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };
  
  if (!animated) {
    return <span className={className}>{text}</span>;
  }
  
  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-1"
          variants={child}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
