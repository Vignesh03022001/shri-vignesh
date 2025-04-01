
import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../contexts/PortfolioContext';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const portfolioData = usePortfolio();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for header height
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-portfolio-navy/95 shadow-md dark:bg-portfolio-navy/95 backdrop-blur-sm' 
          : 'bg-portfolio-navy/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-portfolio-highlight font-bold text-xl">
          {portfolioData.name.split(' ')[0]} <span className="text-portfolio-lightestSlate">.dev</span>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-portfolio-lightestSlate hover:text-portfolio-highlight transition-colors"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button onClick={() => scrollToSection('about')} className="nav-link text-portfolio-lightestSlate">About</button>
          <button onClick={() => scrollToSection('experience')} className="nav-link text-portfolio-lightestSlate">Experience</button>
          <button onClick={() => scrollToSection('education')} className="nav-link text-portfolio-lightestSlate">Education</button>
          <button onClick={() => scrollToSection('skills')} className="nav-link text-portfolio-lightestSlate">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="nav-link text-portfolio-lightestSlate">Projects</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link text-portfolio-lightestSlate">Contact</button>
        </nav>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-portfolio-navy pt-20 px-4 z-40 flex flex-col items-center">
          <nav className="flex flex-col items-center space-y-6 text-lg w-full">
            <button onClick={() => scrollToSection('about')} className="nav-link text-portfolio-lightestSlate w-full text-center py-3">About</button>
            <button onClick={() => scrollToSection('experience')} className="nav-link text-portfolio-lightestSlate w-full text-center py-3">Experience</button>
            <button onClick={() => scrollToSection('education')} className="nav-link text-portfolio-lightestSlate w-full text-center py-3">Education</button>
            <button onClick={() => scrollToSection('skills')} className="nav-link text-portfolio-lightestSlate w-full text-center py-3">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link text-portfolio-lightestSlate w-full text-center py-3">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link text-portfolio-lightestSlate w-full text-center py-3">Contact</button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
