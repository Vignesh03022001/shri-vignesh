
import React from 'react';
import { usePortfolio } from '../contexts/PortfolioContext';
import { Award, Calendar } from 'lucide-react';

const CertificationsSection: React.FC = () => {
  const portfolioData = usePortfolio();

  if (!portfolioData.certifications || portfolioData.certifications.length === 0) {
    return null;
  }

  return (
    <section id="certifications" className="section-padding bg-gray-50 dark:bg-portfolio-lightNavy">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading">Certifications</h2>
        
        <div className="mt-10 space-y-8">
          {portfolioData.certifications.map((cert, index) => (
            <div key={index} className="bg-white dark:bg-portfolio-navy p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Award className="text-portfolio-highlight" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-portfolio-navy dark:text-portfolio-lightestSlate">{cert.title}</h3>
                  <div className="flex items-center text-sm text-portfolio-lightSlate mt-2">
                    <Calendar size={14} className="mr-1" />
                    <span>{cert.timeline}</span>
                  </div>
                  <p className="mt-2 text-portfolio-lightSlate">{cert.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
