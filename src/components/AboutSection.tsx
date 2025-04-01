
import React from 'react';
import { usePortfolio } from '../contexts/PortfolioContext';
import { MapPin, Phone, Mail } from 'lucide-react';

const AboutSection: React.FC = () => {
  const portfolioData = usePortfolio();

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-portfolio-lightNavy">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading">About Me</h2>
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <div className="md:w-2/3">
            <p className="text-lg mb-6 text-portfolio-lightSlate">
              {portfolioData.aboutMe}
            </p>
            <p className="text-portfolio-lightSlate">
              I'm passionate about creating efficient, scalable solutions and continuously learning
              new technologies to improve my craft.
            </p>
          </div>
          <div className="md:w-1/3 bg-white dark:bg-portfolio-navy p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-portfolio-navy dark:text-portfolio-lightestSlate">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-portfolio-highlight mt-1 mr-2" size={18} />
                <span className="text-portfolio-lightSlate">{portfolioData.contact.address}</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-portfolio-highlight mr-2" size={18} />
                <span className="text-portfolio-lightSlate">{portfolioData.contact.phone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-portfolio-highlight mr-2" size={18} />
                <span className="text-portfolio-lightSlate">{portfolioData.contact.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
