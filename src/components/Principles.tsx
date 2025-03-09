
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import AnimatedText from './AnimatedText';
import FloatingElements from './FloatingElements';

const principles = [
  {
    title: "AI-Powered Learning",
    description: "Advanced algorithms that adapt to your unique learning style and pace"
  },
  {
    title: "Personalized Feedback",
    description: "Detailed insights that highlight strengths and improvement areas"
  },
  {
    title: "Adaptive Challenges",
    description: "Content that evolves based on your performance and skill level"
  },
  {
    title: "Objective Assessment",
    description: "Bias-free evaluation for fair and accurate skill measurement"
  },
  {
    title: "Continuous Improvement",
    description: "Systems that consistently enhance based on latest research"
  },
  {
    title: "Real-world Scenarios",
    description: "Practical challenges that mirror actual workplace situations"
  },
  {
    title: "Data-driven Insights",
    description: "Analytics that reveal patterns and progress trajectories"
  },
  {
    title: "Industry Relevance",
    description: "Content aligned with current market demands and trends"
  },
  {
    title: "Skill Advancement",
    description: "Progressive difficulty that builds competency systematically"
  },
  {
    title: "Bias Reduction",
    description: "Techniques that minimize unconscious preference in evaluations"
  }
];

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const PrincipleCard = ({ principle, index }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  
  const y = useParallax(scrollYProgress, 50);
  
  const colors = [
    "from-blue-400/30 to-indigo-500/30",
    "from-purple-400/30 to-pink-500/30",
    "from-amber-300/30 to-orange-500/30",
    "from-emerald-400/30 to-teal-500/30",
    "from-rose-400/30 to-red-500/30",
  ];
  
  const colorIndex = index % colors.length;
  
  return (
    <motion.div
      ref={cardRef}
      style={{ y }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className="glass p-6 rounded-xl flex flex-col hover-scale"
    >
      <div className="w-8 h-8 rounded-full bg-gradient-to-br flex items-center justify-center mb-4">
        <span className={`text-white font-medium`}>{index + 1}</span>
      </div>
      <h3 className="font-medium mb-2">{principle.title}</h3>
      <p className="text-sm text-foreground/70">{principle.description}</p>
      <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${colors[colorIndex]} rounded-xl opacity-30`}></div>
    </motion.div>
  );
};

const Principles = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  return (
    <section ref={containerRef} id="principles" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-background/20 to-background pointer-events-none" />
      <FloatingElements count={6} className="bg-primary/10 dark:bg-primary/20" />
      
      <motion.div 
        style={{ y }}
        className="container mx-auto px-6 md:px-12 relative"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-6 flex justify-center"
          >
            <span className="px-4 py-2 rounded-full bg-accent/5 text-accent text-xs uppercase tracking-wider font-medium">
              Our Principles
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-medium mb-8 text-center"
          >
            <AnimatedText text="The Proba Advantage" className="gradient-text" />
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto"
          >
            <AnimatedText text="Our core principles guide everything we do, ensuring you receive the most effective preparation experience possible." />
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {principles.map((principle, index) => (
            <PrincipleCard key={index} principle={principle} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Principles;
