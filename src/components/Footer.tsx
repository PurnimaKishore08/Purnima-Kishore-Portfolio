
import { ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-background py-10 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-portfolio-accent text-2xl font-bold">Purnima<span className="text-portfolio-text">.K</span></span>
            <p className="mt-2 text-portfolio-text-muted max-w-md">
              AI/ML specialist focused on creating intelligent solutions to real-world problems.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://linkedin.com/in/purnima-kishore-02a405215" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-portfolio-container flex items-center justify-center text-portfolio-text-muted hover:text-portfolio-accent transition-colors"
              >
                <span>in</span>
              </a>
              <a 
                href="https://leetcode.com/u/Purnimakishore08/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-portfolio-container flex items-center justify-center text-portfolio-text-muted hover:text-portfolio-accent transition-colors"
              >
                <span>🧩</span>
              </a>
              <a 
                href="mailto:purnimakishore003@gmail.com" 
                className="w-10 h-10 rounded-full bg-portfolio-container flex items-center justify-center text-portfolio-text-muted hover:text-portfolio-accent transition-colors"
              >
                <span>✉️</span>
              </a>
            </div>
            <p className="text-portfolio-text-muted text-sm">
              © {currentYear} Purnima Kishore. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-portfolio-container text-center text-sm text-portfolio-text-muted">
          <p>
            AI/ML Enthusiast | Data-Driven Innovator | Engineer in the Making
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
