
import React from 'react';
import { usePortfolio } from '../contexts/PortfolioContext';
import { Check } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const portfolioData = usePortfolio();

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading text-portfolio-lightestSlate">Skills & Technologies</h2>
        
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {portfolioData.techAndTools.map((skill, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-portfolio-navy rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow flex items-center group"
              >
                <div className="w-10 h-10 rounded-full bg-portfolio-highlight/10 flex items-center justify-center mr-3 group-hover:bg-portfolio-highlight/20 transition-colors">
                  <Check className="text-portfolio-highlight" size={18} />
                </div>
                <span className="text-portfolio-lightestSlate font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
