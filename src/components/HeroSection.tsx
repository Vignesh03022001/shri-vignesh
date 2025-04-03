
import React from 'react';
import { usePortfolio } from '../contexts/PortfolioContext';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const portfolioData = usePortfolio();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto staggered-animation">
        <h3 className="text-portfolio-navy font-mono mb-4">Hi, my name is</h3>
        <h1 className="text-3xl md:text-6xl font-bold mb-2 text-portfolio-navy break-words">
          {portfolioData.name}
        </h1>
        <h2 className="text-xl md:text-4xl font-bold mb-6 text-portfolio-slate break-words">
          {portfolioData.designation}
        </h2>
        <p className="text-base md:text-xl mb-8 text-portfolio-navy max-w-full break-words hyphens-auto">
          {portfolioData.aboutMe}
        </p>
        <div className="flex space-x-4">
          <Button 
            className="bg-transparent border border-portfolio-highlight text-portfolio-highlight hover:bg-portfolio-highlight/10 transition-colors px-4 py-3 md:px-6 md:py-4 text-sm md:text-base"
            onClick={scrollToAbout}
          >
            Learn More About Me
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToAbout}
          className="text-portfolio-highlight hover:text-portfolio-highlight/80 transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
