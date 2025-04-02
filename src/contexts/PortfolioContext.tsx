
import React, { createContext, useContext, ReactNode } from 'react';
import { PortfolioData } from '../types';

// Initial portfolio data
const portfolioData: PortfolioData = {
  "name": "Shri Vignesh P",
  "designation": "Full Stack Developer",
  "contact": {
    "address": "Chennai, Tamil Nadu",
    "phone": "9500723392",
    "email": "shrivigneshprasanna@gmail.com",
    "linkedin": "http://linkedin.com/in/shri-vignesh-p-3503201b9",
    "github": "https://github.com/Vignesh03022001",
    "hackerrank": "https://www.hackerrank.com/profile/vignesh03022001"
  },
  "aboutMe": "Full Stack Developer experienced in Angular, PostgreSQL, and Java. Skilled in developing scalable web applications, REST APIs, and integrating third-party libraries.",
  "experience": [
    {
      "jobTitle": "Software Developer",
      "companyName": "Bahwan Cybertek (Fuel Trans)",
      "location": "Chennai, Tamil Nadu",
      "workDuration": "July 2023 - Present",
      "description": [
        "Developed and maintained Angular and Java front-end components for multiple web applications.",
        "Optimized PostgreSQL queries for efficient data retrieval and reporting.",
        "Resolved 20-30 application bugs, improving system stability.",
        "Created interactive dashboards using Apache E-Charts and Chart.js for data visualization."
      ]
    },
    {
      "jobTitle": "Software Intern",
      "companyName": "SidePash",
      "location": "",
      "workDuration": "May 2023 - June 2023",
      "description": [
        "Learned DevOps and DevSecOps principles, including security vulnerability scanning.",
        "Contributed to automated deployments on AWS EC2 using CI/CD pipelines."
      ]
    },
    {
      "jobTitle": "Software Intern",
      "companyName": "Habitate Technologies",
      "location": "Chennai, Tamil Nadu",
      "workDuration": "Feb 2023 - April 2023",
      "description": [
        "Worked on full-stack development using Vue.js, Java Spring Boot, and Redis.",
        "Integrated APIs with social media platforms using OAuth authentication.",
        "Implemented data sharding strategies for social media data management."
      ]
    }
  ],
  "education": [
    {
      "degree": "Bachelor of Engineering in Production",
      "institution": "MIT Campus, Anna University",
      "studyDuration": "Aug 2018 – July 2022"
    }
  ],
  "techAndTools": [
    "Angular",
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Next.js",
    "Java",
    "RESTEasy",
    "Maven",
    "JDBC",
    "PostgreSQL",
    "PL/pgSQL",
    "Oracle SQL",
    "Git",
    "SVN",
    "JIRA",
    "Apache Tomcat",
    "Linux",
    "Agile",
    "AWS",
    "CI/CD"
  ],
  "projects": [
    {
      "title": "Aviation Fueling Management",
      "timeline": "",
      "technologiesUsed": [
        "Angular",
        "Java",
        "PostgreSQL",
        "Apache Tomcat"
      ],
      "description": "Developed a full-stack application for aircraft fueling, transaction voucher generation, and fuel stock transfer tracking.",
      "repoLink": "#"
    },
    {
      "title": "Head Office System Management for Fueling",
      "timeline": "",
      "technologiesUsed": [
        "Angular",
        "PostgreSQL",
        "Apache E-Charts",
        "Chart.js"
      ],
      "description": "Built a sales performance and fuel stock monitoring system with interactive data visualizations.",
      "repoLink": "#"
    },
    {
      "title": "Fleet Management System",
      "timeline": "",
      "technologiesUsed": [
        "Angular"
      ],
      "description": "Developed a customer loyalty and vehicle management application for tracking fueling transactions.",
      "repoLink": "#"
    }
  ],
  "certifications": [
    {
      "title": "Full Stack Web Development (MERN)",
      "timeline": "Nov 2022 - Jan 2023",
      "description": "Gained hands-on experience in MERN stack development."
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
