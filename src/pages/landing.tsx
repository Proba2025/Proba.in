
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Stats from '../components/Stats';
import BusinessSolutions from '../components/BusinessSolutions';
import Principles from '../components/Principles';
import Testimonials from '../components/Testimonials';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <BusinessSolutions />
      <Principles />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  );
};

export default Index;
