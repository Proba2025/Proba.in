import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import InfiniteScroll from "./InfiniteScroll";

const technologies = [
  "Mock Interviews",
  "Coding Challenges",
  "Skill Assessment",
  "AI Feedback",
  "Career Preparation",
  "Technical Screening",
  "Algorithmic Problems",
  "System Design",
  "Behavioral Questions",
  "Data Structures",
  "Performance Analytics",
  "Adaptive Learning",
];

const testimonials = [
  {
    quote:
      "Proba's AI mock interviews helped me overcome my anxiety and prepare for tough questions. I landed my dream job at Google after just 3 weeks of practice.",
    author: "Alex Chen",
    role: "Software Engineer",
  },
  {
    quote:
      "The coding challenges and real-time feedback identified gaps in my knowledge that I didn't even know existed. The platform adapted to my skill level perfectly.",
    author: "Sarah Johnson",
    role: "Full Stack Developer",
  },
  {
    quote:
      "As a hiring manager, Proba has transformed our recruitment process. We've cut time-to-hire by 60% while improving the quality of our technical hires.",
    author: "Michael Rodriguez",
    role: "Engineering Director",
  },
  {
    quote:
      "After failing three technical interviews, I turned to Proba. The personalized learning path and adaptive challenges helped me secure multiple offers in just two months.",
    author: "Priya Sharma",
    role: "Data Scientist",
  },
];

const Testimonials = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  return (
    <section
      id="testimonials"
      ref={containerRef}
      className="section-padding relative overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="px-4 py-2 rounded-full bg-accent/5 text-accent text-xs uppercase tracking-wider font-medium inline-block mb-6"
          >
            Success Stories
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-medium mb-6"
          >
            Transforming Careers and Hiring
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass p-8 rounded-2xl hover-scale relative group"
            >
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/20 via-primary/20 to-accent/20 blur-sm"></div>
              <div className="relative">
                <div className="mb-6">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-accent"
                  >
                    <path
                      d="M9.5 13C9.5 13 10 13 10 12.5V11.5C10 10.5 9 9.5 7.5 9.5C6.8 9.5 6.1 9.8 5.7 10.2C5.4 10.5 5 10.9 5 11.5C5 11.8 5.3 12 5.5 12H6C7 12 7 13 7 13M16.5 13C16.5 13 17 13 17 12.5V11.5C17 10.5 16 9.5 14.5 9.5C13.8 9.5 13.1 9.8 12.7 10.2C12.4 10.5 12 10.9 12 11.5C12 11.8 12.3 12 12.5 12H13C14 12 14 13 14 13M8 17H16M19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-lg mb-6">{item.quote}</p>
                <div>
                  <p className="font-medium">{item.author}</p>
                  <p className="text-sm text-foreground/60">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <InfiniteScroll items={technologies} />
        <InfiniteScroll items={technologies} direction="right" speed="slow" />
      </div>
    </section>
  );
};

export default Testimonials;
