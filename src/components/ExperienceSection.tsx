
import React from 'react';
import { usePortfolio } from '../contexts/PortfolioContext';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const portfolioData = usePortfolio();

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading text-portfolio-lightestSlate">Work Experience</h2>
        
        <div className="relative mt-10">
          <div className="timeline-connector"></div>
          
          {portfolioData.experience.map((exp, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row mb-10 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="md:w-1/2 flex justify-center md:justify-end md:pr-8 pb-4 md:pb-0">
                <div className={`w-full md:max-w-xs ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}>
                  <div className="relative">
                    <span className="absolute top-1 left-4 md:left-auto md:right-0 md:translate-x-1/2 w-3 h-3 rounded-full bg-portfolio-highlight"></span>
                  </div>
                  <h3 className="text-xl font-bold text-portfolio-lightestSlate mt-2">{exp.jobTitle}</h3>
                  <h4 className="text-lg font-medium text-portfolio-highlight">{exp.companyName}</h4>
                  <div className="flex items-center text-sm text-portfolio-lightSlate mt-1 mb-2">
                    <Calendar size={14} className="mr-1" />
                    <span>{exp.workDuration}</span>
                  </div>
                  <div className="flex items-center text-sm text-portfolio-lightSlate mb-4">
                    <MapPin size={14} className="mr-1" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-8">
                <div className="bg-white dark:bg-portfolio-navy p-4 rounded-lg shadow-md">
                  <ul className="list-disc list-inside text-portfolio-lightSlate space-y-2">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
