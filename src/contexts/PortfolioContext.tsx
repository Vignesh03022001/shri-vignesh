
import React, { createContext, useContext, ReactNode } from 'react';
import { PortfolioData } from '../types';

// Initial portfolio data
const portfolioData: PortfolioData = {
  "name": "Shri Vignesh P",
  "designation": "Software Trainee",
  "contact": {
    "address": "1/104, Gandhi Nagar, Thirumandurai, Perambalur",
    "phone": "9232392933",
    "email": "user@gmail.com"
  },
  "aboutMe": "A passionate software developer with experience in Java and React.",
  "experience": [
    {
      "jobTitle": "SDE",
      "companyName": "Google",
      "location": "Bangalore, India",
      "workDuration": "Mar 2022 - Present",
      "description": [
        "Developed scalable web applications using React and Java.",
        "Optimized PostgreSQL queries for better performance."
      ]
    },
    {
      "jobTitle": "SDE Intern",
      "companyName": "Google",
      "location": "Bangalore, India",
      "workDuration": "Mar 2020 - Feb 2022",
      "description": [
        "Worked on frontend development with Angular.",
        "Assisted in backend API development."
      ]
    }
  ],
  "education": [
    {
      "degree": "Bachelor of Engineering in Computer Science",
      "institution": "XYZ University",
      "studyDuration": "2018 - 2022"
    }
  ],
  "techAndTools": [
    "Java",
    "React",
    "PostgreSQL",
    "Spring Boot",
    "Docker"
  ],
  "projects": [
    {
      "title": "Portfolio Website",
      "timeline": "Jan 2024",
      "technologiesUsed": [
        "React",
        "CSS",
        "Node.js"
      ],
      "description": "A personal portfolio showcasing my projects and skills.",
      "repoLink": "https://github.com/user/portfolio",
      "liveDemoLink": "https://user.github.io/portfolio"
    },
    {
      "title": "E-commerce Platform",
      "timeline": "Dec 2023",
      "technologiesUsed": [
        "Spring Boot",
        "PostgreSQL",
        "Angular"
      ],
      "description": "Developed an e-commerce platform with user authentication.",
      "repoLink": "https://github.com/user/ecommerce"
    }
  ]
};

// Create context
const PortfolioContext = createContext<PortfolioData | undefined>(undefined);

// Provider component
export const PortfolioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <PortfolioContext.Provider value={portfolioData}>
      {children}
    </PortfolioContext.Provider>
  );
};

// Hook for using the portfolio context
export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
