
import React from 'react';
import { motion } from 'framer-motion';

const Cta = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="glass rounded-3xl overflow-hidden relative"
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/5 dark:from-accent/30 dark:to-primary/10 pointer-events-none" />
          
          {/* Animated particles */}
          {Array.from({ length: 8 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-2 h-2 rounded-full bg-accent/30 dark:bg-accent/50"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.2, 0.7, 0.2],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
          
          <div className="px-8 py-16 md:px-16 md:py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 gradient-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Ready to transform your career or hiring process?
              </motion.h2>
              
              <motion.p 
                className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Join Proba today and leverage the power of AI to ace your interviews, master coding challenges, 
                or find the perfect candidates for your team.
              </motion.p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.button 
                  className="px-8 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium transition-all duration-300 button-highlight relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="relative z-10">Start Free Trial</span>
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.button>
                
                <motion.button 
                  className="px-8 py-3 rounded-full glass-button text-sm font-medium relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="relative z-10">Schedule Demo</span>
                  <motion.span 
                    className="absolute inset-0 bg-white/20 dark:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
