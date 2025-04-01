
import React from 'react';
import { usePortfolio } from '../contexts/PortfolioContext';
import { MapPin, Phone, Mail, Linkedin, GitHub, Twitter } from 'lucide-react';

const ContactSection: React.FC = () => {
  const portfolioData = usePortfolio();

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading text-portfolio-lightestSlate">Get In Touch</h2>
        
        <div className="mt-10 flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <p className="text-lg text-portfolio-lightSlate mb-6">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
              I'll try my best to get back to you!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-portfolio-highlight mt-1 mr-3" size={20} />
                <span className="text-portfolio-lightSlate">{portfolioData.contact.address}</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-portfolio-highlight mr-3" size={20} />
                <span className="text-portfolio-lightSlate">{portfolioData.contact.phone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-portfolio-highlight mr-3" size={20} />
                <a 
                  href={`mailto:${portfolioData.contact.email}`} 
                  className="text-portfolio-lightSlate hover:text-portfolio-highlight transition-colors"
                >
                  {portfolioData.contact.email}
                </a>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-portfolio-lightestSlate">Connect</h3>
              <div className="flex space-x-5">
                <a 
                  href="#" 
                  className="text-portfolio-lightSlate hover:text-portfolio-highlight transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
                <a 
                  href="#" 
                  className="text-portfolio-lightSlate hover:text-portfolio-highlight transition-colors"
                  aria-label="GitHub"
                >
                  <GitHub size={22} />
                </a>
                <a 
                  href="#" 
                  className="text-portfolio-lightSlate hover:text-portfolio-highlight transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={22} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 bg-white dark:bg-portfolio-navy p-6 rounded-lg shadow-md">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-portfolio-lightestSlate mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 rounded border border-slate-300 dark:border-portfolio-lightNavy bg-white dark:bg-portfolio-lightNavy text-portfolio-lightestSlate focus:outline-none focus:ring-2 focus:ring-portfolio-highlight"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-portfolio-lightestSlate mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 rounded border border-slate-300 dark:border-portfolio-lightNavy bg-white dark:bg-portfolio-lightNavy text-portfolio-lightestSlate focus:outline-none focus:ring-2 focus:ring-portfolio-highlight"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-portfolio-lightestSlate mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-2 rounded border border-slate-300 dark:border-portfolio-lightNavy bg-white dark:bg-portfolio-lightNavy text-portfolio-lightestSlate focus:outline-none focus:ring-2 focus:ring-portfolio-highlight"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="px-6 py-3 bg-portfolio-highlight text-black font-medium rounded hover:bg-portfolio-highlight/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
