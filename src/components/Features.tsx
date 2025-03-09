
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Code, BrainCircuit, MessageSquare, LineChart, Briefcase, Lightbulb } from 'lucide-react';

const featureItems = [
  {
    title: "AI Mock Interviews",
    description: "Practice with our AI interviewer that adapts to your responses and provides real-time feedback to improve your interview skills.",
    color: "from-blue-400/20 to-indigo-500/20 dark:from-blue-400/30 dark:to-indigo-500/30",
    icon: <MessageSquare className="text-blue-500" size={24} />
  },
  {
    title: "Adaptive Coding Challenges",
    description: "Tackle coding problems that automatically adjust difficulty based on your performance, ensuring optimal skill development.",
    color: "from-purple-400/20 to-pink-500/20 dark:from-purple-400/30 dark:to-pink-500/30",
    icon: <Code className="text-purple-500" size={24} />
  },
  {
    title: "Deep Performance Analytics",
    description: "Gain insights into your strengths and weaknesses with detailed metrics and personalized improvement recommendations.",
    color: "from-amber-300/20 to-orange-500/20 dark:from-amber-300/30 dark:to-orange-500/30",
    icon: <LineChart className="text-amber-500" size={24} />
  },
  {
    title: "B2B Hiring Solutions",
    description: "Streamline your recruitment process with AI-driven assessments to identify top talent efficiently and objectively.",
    color: "from-emerald-400/20 to-teal-500/20 dark:from-emerald-400/30 dark:to-teal-500/30",
    icon: <Briefcase className="text-emerald-500" size={24} />
  },
  {
    title: "Real-time AI Feedback",
    description: "Receive immediate, actionable insights on your performance to quickly identify areas for improvement.",
    color: "from-rose-400/20 to-red-500/20 dark:from-rose-400/30 dark:to-red-500/30",
    icon: <BrainCircuit className="text-rose-500" size={24} />
  },
  {
    title: "Personalized Learning Paths",
    description: "Follow customized preparation plans that adapt to your progress and focus on your specific career goals.",
    color: "from-cyan-400/20 to-blue-500/20 dark:from-cyan-400/30 dark:to-blue-500/30",
    icon: <Lightbulb className="text-cyan-500" size={24} />
  },
];

const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  
  return (
    <section id="features" ref={containerRef} className="section-padding relative gradient-bg-2">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="px-4 py-2 rounded-full bg-accent/10 text-accent text-xs uppercase tracking-wider font-medium inline-block mb-6"
          >
            Platform Features
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-medium mb-6 gradient-text"
          >
            Revolutionize Your Preparation
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-foreground/70"
          >
            Proba combines advanced AI with proven learning methodologies to help you master interviews, 
            coding challenges, and assessments for your dream career.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {featureItems.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -5 }}
              className="glass p-8 lg:p-10 rounded-2xl relative overflow-hidden"
            >
              {/* Gradient background */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-80",
                feature.color
              )} />
              
              <div className="relative z-10">
                <motion.div 
                  className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-medium mb-4">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
