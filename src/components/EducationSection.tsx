
import React from 'react';
import { usePortfolio } from '../contexts/PortfolioContext';
import { GraduationCap, Calendar } from 'lucide-react';

const EducationSection: React.FC = () => {
  const portfolioData = usePortfolio();

  return (
    <section id="education" className="section-padding bg-gray-50 dark:bg-portfolio-lightNavy">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading text-portfolio-lightestSlate">Education</h2>
        
        <div className="mt-10 space-y-8">
          {portfolioData.education.map((edu, index) => (
            <div key={index} className="bg-white dark:bg-portfolio-navy p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <GraduationCap className="text-portfolio-highlight" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-portfolio-lightestSlate">{edu.degree}</h3>
                  <h4 className="text-lg font-medium text-portfolio-highlight mt-1">{edu.institution}</h4>
                  <div className="flex items-center text-sm text-portfolio-lightSlate mt-2">
                    <Calendar size={14} className="mr-1" />
                    <span>{edu.studyDuration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
