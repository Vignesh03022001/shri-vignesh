
import React, { useState } from 'react';
import { usePortfolio } from '../contexts/PortfolioContext';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProjectsSection: React.FC = () => {
  const portfolioData = usePortfolio();
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding bg-blue-50 dark:bg-portfolio-navy">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading">Projects</h2>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <Card 
              key={index}
              className={`bg-white dark:bg-portfolio-navy border-blue-100 dark:border-portfolio-lightNavy overflow-hidden transition-all duration-300 ${
                hoveredProject === index ? 'transform -translate-y-2 shadow-xl shadow-blue-100 dark:shadow-portfolio-navy/40' : 'shadow-md'
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-portfolio-navy dark:text-portfolio-lightestSlate">{project.title}</CardTitle>
                  <div className="flex space-x-3 text-portfolio-slate">
                    <a 
                      href={project.repoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-portfolio-highlight transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    {project.liveDemoLink && (
                      <a 
                        href={project.liveDemoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-portfolio-highlight transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="flex items-center text-sm text-portfolio-lightSlate mt-1">
                  <Calendar size={14} className="mr-1" />
                  <span>{project.timeline}</span>
                </div>
                <CardDescription className="text-portfolio-lightSlate mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologiesUsed.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-blue-100 dark:bg-portfolio-lightNavy/20 text-portfolio-lightNavy dark:text-portfolio-lightSlate">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
