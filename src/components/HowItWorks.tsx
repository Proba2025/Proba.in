
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, FileCheck, Brain, Award } from 'lucide-react';

const steps = [
  {
    icon: <Code className="text-primary" size={24} />,
    title: "Take AI-Powered Practice Tests",
    description: "Start with customized mock tests and coding challenges tailored to your target role or company."
  },
  {
    icon: <Brain className="text-accent" size={24} />,
    title: "Receive Real-Time Feedback",
    description: "Get instant, personalized insights on your performance with detailed analysis of your responses."
  },
  {
    icon: <FileCheck className="text-emerald-500" size={24} />,
    title: "Follow Your Learning Path",
    description: "Access an adaptive curriculum that evolves based on your strengths and areas that need improvement."
  },
  {
    icon: <Award className="text-amber-500" size={24} />,
    title: "Track Your Progress",
    description: "Monitor your growth with comprehensive analytics that showcase your improvement over time."
  },
  {
    icon: <Users className="text-purple-500" size={24} />,
    title: "Land Your Dream Role",
    description: "Enter interviews with confidence, fully prepared to showcase your skills and stand out from the competition."
  }
];

const HowItWorks = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-background/20 to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="px-4 py-2 rounded-full bg-accent/10 text-accent text-xs uppercase tracking-wider font-medium inline-block mb-6"
          >
            How It Works
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-medium mb-6 gradient-text"
          >
            Your Journey to Success
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-foreground/70"
          >
            From preparation to placement, Proba guides you through every step of your career advancement process.
          </motion.p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute hidden md:block top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-accent to-primary/50 transform -translate-x-1/2" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative flex flex-col md:flex-row items-center mb-12 last:mb-0"
            >
              <div className={`flex flex-1 ${index % 2 === 0 ? 'md:justify-end' : 'md:order-2'}`}>
                <div className={`${index % 2 === 0 ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'} max-w-md`}>
                  <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                  <p className="text-foreground/70">{step.description}</p>
                </div>
              </div>
              
              <div className="my-6 md:my-0 relative z-10">
                <motion.div 
                  className="w-14 h-14 rounded-full glass flex items-center justify-center border-4 border-background"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  {step.icon}
                </motion.div>
              </div>
              
              <div className={`flex-1 ${index % 2 !== 0 ? 'md:justify-end' : 'md:order-2'} hidden md:block`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
