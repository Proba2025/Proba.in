
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedText from './AnimatedText';

const stats = [
  { value: 93, label: "Improvement in Interview Performance", suffix: "%" },
  { value: 75, label: "Faster Hiring Process", suffix: "%" },
  { value: 40, label: "Candidates Prepared", suffix: "k+" },
  { value: 500, label: "Companies Trust Us", suffix: "+" }
];

const Counter = ({ from, to, duration = 2, delay = 0, suffix = "" }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  const [value, setValue] = React.useState(from);

  React.useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const updateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setValue(Math.floor(from + progress * (to - from)));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounter);
      }
    };

    const timeoutId = setTimeout(() => {
      animationFrame = requestAnimationFrame(updateCounter);
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrame);
    };
  }, [from, to, duration, isInView, delay]);

  return (
    <div ref={nodeRef} className="text-4xl md:text-5xl font-medium gradient-text inline-block">
      {isInView ? value : from}{suffix}
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-16 bg-accent/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      </div>
      
      {/* Animated patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-accent/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-center glass p-6 rounded-xl hover-scale"
            >
              <motion.div 
                className="mb-2"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: index * 0.1 + 0.2
                }}
                viewport={{ once: true }}
              >
                <Counter 
                  from={0} 
                  to={typeof stat.value === 'number' ? stat.value : parseInt(stat.value)} 
                  delay={index * 0.2} 
                  suffix={typeof stat.value === 'string' ? stat.value.replace(/[0-9]/g, '') : stat.suffix}
                />
              </motion.div>
              <p className="text-sm md:text-base text-foreground/70">
                <AnimatedText text={stat.label} />
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
