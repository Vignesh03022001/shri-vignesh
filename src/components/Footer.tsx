
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-portfolio-navy py-6 border-t border-slate-200 dark:border-portfolio-lightNavy">
      <div className="container mx-auto px-4 text-center">
        <p className="text-portfolio-lightSlate">
          © {currentYear} {" "}
          <span className="text-portfolio-highlight">Shri Vignesh P</span>. All rights reserved.
        </p>
        <p className="text-portfolio-lightSlate text-sm mt-2">
          Built with React, Tailwind CSS, and ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
