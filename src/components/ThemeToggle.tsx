
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };
  
  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors overflow-hidden"
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      transition={spring}
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={theme}
            initial={{ y: -30, opacity: 0, rotate: -45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 30, opacity: 0, rotate: 45 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute"
          >
            {theme === 'dark' ? (
              <Sun size={18} className="text-yellow-300" />
            ) : (
              <Moon size={18} className="text-accent" />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Animated background effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={false}
        animate={{
          background: theme === 'dark' 
            ? "radial-gradient(circle, rgba(252,211,77,0.15) 0%, rgba(252,211,77,0) 70%)" 
            : "radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(139,92,246,0) 70%)"
        }}
      />
    </motion.button>
  );
};

export default ThemeToggle;
