
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 md:mb-0"
          >
            <span className="text-xl font-medium tracking-tight">Vision.</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-12 mb-8 md:mb-0"
          >
            {['Products', 'Features', 'Pricing', 'About'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm text-foreground/80 hover:text-foreground transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex space-x-6"
          >
            {['Twitter', 'Instagram', 'LinkedIn'].map((social) => (
              <a 
                key={social} 
                href="#"
                className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-200"
              >
                {social}
              </a>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-foreground/60 mb-4 md:mb-0">
            © 2023 Vision. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            {['Terms', 'Privacy', 'Cookies'].map((item) => (
              <a 
                key={item} 
                href="#"
                className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
