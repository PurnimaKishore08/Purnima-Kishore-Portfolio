
import { useState } from 'react';
import { Button } from './ui/button';
import { FileText, ExternalLink } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! I\'ll get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Clear status after some time
      setTimeout(() => {
        setSubmitStatus({
          type: null,
          message: ''
        });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section">
      <div className="container mx-auto">
        <h2 className="section-title">Contact Me</h2>
        <p className="text-lg mb-8 max-w-3xl">
          Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="animate-slide-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-portfolio-container border border-portfolio-background/20 focus:border-portfolio-accent focus:outline-none focus:ring-1 focus:ring-portfolio-accent transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-portfolio-container border border-portfolio-background/20 focus:border-portfolio-accent focus:outline-none focus:ring-1 focus:ring-portfolio-accent transition-colors"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 rounded-lg bg-portfolio-container border border-portfolio-background/20 focus:border-portfolio-accent focus:outline-none focus:ring-1 focus:ring-portfolio-accent transition-colors"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="button-primary w-full flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : 'Send Message'}
              </button>
              
              {submitStatus.type && (
                <div 
                  className={`p-3 rounded-lg ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-500/20 text-green-200' 
                      : 'bg-red-500/20 text-red-200'
                  } animate-fade-in`}
                >
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
          
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
                
                {/* Resume Download Button */}
                <div className="flex items-start space-x-4 pt-4 border-t border-portfolio-background/20">
                  <div className="text-portfolio-accent text-xl">📄</div>
                  <div>
                    <h4 className="font-medium">Resume</h4>
                    <div className="mt-2">
                      <a 
                        href="https://drive.google.com/file/d/1L1YKhwV1uFGak2HlTexc6gDvMCjdcXQl/view?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 button-outline text-sm px-4 py-2"
                      >
                        <FileText size={16} />
                        <span>Download Resume</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
