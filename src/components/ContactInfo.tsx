
import { ExternalLink } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="animate-slide-in animate-delay-300">
      <div className="card h-full">
        <h3 className="text-xl font-semibold mb-6 text-portfolio-accent">Contact Information</h3>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="text-portfolio-accent text-xl">📧</div>
            <div>
              <h4 className="font-medium">Email</h4>
              <a 
                href="mailto:purnimakishore003@gmail.com" 
                className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors"
              >
                purnimakishore003@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="text-portfolio-accent text-xl">📍</div>
            <div>
              <h4 className="font-medium">Location</h4>
              <p className="text-portfolio-text-muted">Delhi, India</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="text-portfolio-accent text-xl">👩‍💻</div>
            <div>
              <h4 className="font-medium">GitHub</h4>
              <a 
                href="https://github.com/PurnimaKishore08" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors flex items-center gap-1"
              >
                github.com/PurnimaKishore08
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="text-portfolio-accent text-xl">👩‍💻</div>
            <div>
              <h4 className="font-medium">LinkedIn</h4>
              <a 
                href="https://linkedin.com/in/purnima-kishore-02a405215" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors"
              >
                linkedin.com/in/purnima-kishore-02a405215
              </a>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="text-portfolio-accent text-xl">🧩</div>
            <div>
              <h4 className="font-medium">LeetCode</h4>
              <a 
                href="https://leetcode.com/u/Purnimakishore08/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors flex items-center gap-1"
              >
                leetcode.com/u/Purnimakishore08/
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
