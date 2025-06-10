import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import PortfolioSection from '../components/home/PortfolioSection';
import CtaSection from '../components/home/CtaSection';
import About from '../components/home/AboutSection';
import CoreValuesSection from '../components/home/CoreValuesSection';
import TechCompetenceSection from '../components/home/TechCompetenceSection';


const HomePage: React.FC = () => {
  useEffect(() => {
    // Update page title
    document.title = 'AITI - Innovative Technology Services';
  }, []);

  return (
    <>
      <HeroSection />
      <About />
      <CoreValuesSection />
      <ServicesSection />
      <TechCompetenceSection />
      <PortfolioSection />
      <CtaSection />
    </>
  );
};

export default HomePage;