import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Clock, Users, PieChart, UserCheck, Shield } from 'lucide-react';

const BusinessSolutions = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const benefits = [
    {
      icon: <Search size={24} />,
      title: "AI-Powered Talent Screening",
      description: "Automate initial candidate assessments with intelligent screening that evaluates technical skills, problem-solving abilities, and cultural fit."
    },
    {
      icon: <Clock size={24} />,
      title: "Reduced Time-to-Hire",
      description: "Cut your recruitment timeline by up to 50% by streamlining assessments and eliminating manual evaluation processes."
    },
    {
      icon: <UserCheck size={24} />,
      title: "Quality Candidate Matching",
      description: "Identify candidates with the right skill profile for your specific needs using our advanced matching algorithms."
    },
    {
      icon: <PieChart size={24} />,
      title: "Comprehensive Analytics",
      description: "Access detailed reports on candidate performance, team evaluation metrics, and hiring process efficiency."
    },
    {
      icon: <Users size={24} />,
      title: "Collaborative Hiring",
      description: "Enable your entire team to participate in the assessment process with shared dashboards and evaluation tools."
    },
    {
      icon: <Shield size={24} />,
      title: "Bias Reduction",
      description: "Implement objective, skill-based assessments that help minimize unconscious bias in your hiring process."
    }
  ];

  return (
    <section id="business" ref={containerRef} className="section-padding relative overflow-hidden bg-background/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-xs uppercase tracking-wider font-medium inline-block mb-6">
              For Businesses
            </span>
            
            <h2 className="text-3xl md:text-4xl font-medium mb-6 gradient-text">
              Streamline Your <br />Recruitment Process
            </h2>
            
            <p className="text-foreground/70 mb-8">
              Proba's B2B solutions help companies identify and evaluate top talent efficiently through AI-driven 
              assessments, coding challenges, and structured interviews.
            </p>
            
            <div className="bg-primary/5 p-6 rounded-xl border border-primary/10 mb-8">
              <div className="flex items-start mb-4">
                <div className="mr-4 mt-1 text-accent">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Reduce Hiring Costs</h3>
                  <p className="text-sm text-foreground/70">By up to 40% through automation and precision targeting</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-accent">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Improve Quality of Hire</h3>
                  <p className="text-sm text-foreground/70">87% of companies report better candidate matching and retention</p>
                </div>
              </div>
            </div>
            
            <motion.button 
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium transition-all duration-300 button-highlight overflow-hidden relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10">Request Enterprise Demo</span>
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4 text-accent">
                  {benefit.icon}
                </div>
                <h3 className="font-medium mb-2">{benefit.title}</h3>
                <p className="text-sm text-foreground/70">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSolutions;
