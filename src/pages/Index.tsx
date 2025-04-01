
import React from 'react';
import { PortfolioProvider } from '../contexts/PortfolioContext';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <PortfolioProvider>
      <div className="bg-white dark:bg-portfolio-navy min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <EducationSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </PortfolioProvider>
  );
};

export default Index;
