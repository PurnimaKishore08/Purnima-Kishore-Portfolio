
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResumeSection = () => {
  return (
    <section id="resume" className="section bg-portfolio-background py-16">
      <div className="container mx-auto">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Resume
        </motion.h2>
        
        <motion.p 
          className="text-portfolio-text-muted text-center mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          View or download my detailed professional resume
        </motion.p>

        <motion.div 
          className="flex flex-col items-center justify-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-portfolio-container p-10 rounded-lg shadow-lg max-w-3xl w-full">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-portfolio-accent/10 p-6 rounded-full">
                <FileText size={60} className="text-portfolio-accent" />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">My Professional Resume</h3>
                <p className="text-portfolio-text-muted mb-4">
                  A comprehensive overview of my skills, experience, and educational background.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Button 
                    variant="outline" 
                    className="bg-portfolio-accent text-white hover:bg-portfolio-accent/80 border-none"
                    asChild
                  >
                    <a 
                      href="/resume.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <FileText size={16} /> View Resume
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white"
                    asChild
                  >
                    <a 
                      href="/resume.pdf" 
                      download="Purnima_Kishore_Resume.pdf"
                      className="inline-flex items-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 17v-11"></path>
                        <path d="m6 11 6 6 6-6"></path>
                        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2Z"></path>
                      </svg>
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
