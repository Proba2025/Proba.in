
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Code, BrainCircuit, GraduationCap, TrendingUp } from 'lucide-react';
import FloatingElements from './FloatingElements';
import AnimatedText from './AnimatedText';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  
  const staggerItems = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  // Mouse follow effect
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="pt-28 md:pt-32 overflow-hidden relative min-h-screen flex items-center gradient-bg-1">
      {/* Enhanced background elements */}
      <FloatingElements count={8} />
      
      {/* Mouse follow gradient */}
      <motion.div 
        className="fixed w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none hidden md:block"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 50,
          mass: 0.5
        }}
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          zIndex: 0
        }}
      />
      
      <motion.div 
        style={{ opacity, scale, y }}
        className="container mx-auto px-6 md:px-12 relative z-10"
      >
        <motion.div
          variants={staggerItems}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center max-w-5xl mx-auto"
        >
          <motion.div 
            variants={itemVariants}
            className="mb-6"
          >
            <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-xs uppercase tracking-wider font-medium">
              AI-Powered Testing Platform
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight md:leading-tight lg:leading-tight mb-6"
          >
            <AnimatedText 
              text="Elevate Your" 
              className="gradient-text block"
            />
            <span className="text-shimmer block">Career</span>
            <AnimatedText 
              text="Through Advanced AI" 
              className="gradient-text block"
            />
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-10"
          >
            <AnimatedText 
              text="Revolutionize mock tests, interviews, and coding challenges with Proba's intelligent AI system providing real-time feedback and adaptive learning."
            />
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button 
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:shadow-lg transition-all duration-300 button-highlight relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10">Start Free Trial</span>
              <motion.div 
                className="absolute inset-0 rounded-full opacity-0 hover:opacity-100"
                style={{
                  background: "linear-gradient(45deg, var(--accent), var(--primary))",
                  filter: "blur(8px)",
                  zIndex: -1
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            
            <motion.button 
              className="px-8 py-3 rounded-full glass-button text-sm font-medium relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Schedule Demo
              <motion.div 
                className="absolute inset-0 bg-white/10 dark:bg-white/5 -z-10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto"
        >
          {[
            { icon: <BrainCircuit size={24} />, text: "AI-Driven Assessments" },
            { icon: <Code size={24} />, text: "Coding Challenges" },
            { icon: <GraduationCap size={24} />, text: "Mock Interviews" },
            { icon: <TrendingUp size={24} />, text: "Performance Analytics" }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(var(--accent-rgb), 0.2)"
              }}
              className="glass p-4 rounded-xl flex flex-col items-center text-center"
            >
              <motion.div 
                className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-3"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <span className="text-accent">{item.icon}</span>
              </motion.div>
              <p className="text-sm font-medium">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
};

export default Hero;
