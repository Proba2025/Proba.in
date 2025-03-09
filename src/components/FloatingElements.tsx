
import React from 'react';
import { motion } from 'framer-motion';

interface FloatingElementsProps {
  count?: number;
  className?: string;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ 
  count = 12,
  className = "bg-accent/20 dark:bg-accent/30" 
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, index) => {
        // Generate random positions and sizes
        const size = Math.random() * 80 + 20;
        const left = `${Math.random() * 100}%`;
        const top = `${Math.random() * 100}%`;
        const delay = Math.random() * 5;
        const duration = Math.random() * 15 + 15;
        
        return (
          <motion.div
            key={index}
            className={`absolute rounded-full blur-xl opacity-30 ${className}`}
            style={{
              width: size,
              height: size,
              left,
              top,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 40 - 20, 0],
              scale: [1, 1.05, 0.95, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingElements;
