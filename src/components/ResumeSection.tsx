
import { motion } from "framer-motion";
import { FileText, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResumeSection = () => {
  return (
    <section id="resume" className="section bg-portfolio-background py-16">
      <div className="container mx-auto">
        <motion.div 
          className="flex flex-col items-center justify-center gap-8" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="section-title">Resume</h2>
          
          <div className="max-w-2xl text-center">
            <p className="text-lg mb-8 text-portfolio-text-muted">
              Download my resume to learn more about my experience, skills, and projects in AI/ML and software development.
            </p>
            
            <div className="card max-w-md mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-portfolio-accent/20 rounded-full flex items-center justify-center">
                  <FileText className="w-8 h-8 text-portfolio-accent" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">Purnima Kishore</h3>
              <p className="text-portfolio-text-muted mb-6">AI/ML Engineer Resume</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://drive.google.com/file/d/1IpNPipy72Qh3ZxBC3y3DhkWJHrXlRzcR/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="button-primary flex items-center justify-center gap-2"
                >
                  <ExternalLink size={16} />
                  View Resume
                </a>
                
                <a 
                  href="https://drive.google.com/uc?export=download&id=1IpNPipy72Qh3ZxBC3y3DhkWJHrXlRzcR" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="button-outline flex items-center justify-center gap-2"
                >
                  <Download size={16} />
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
