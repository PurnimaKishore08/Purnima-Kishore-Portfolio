import { useEffect, useRef } from 'react';
const AboutSection = () => {
  const educationRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, {
      threshold: 0.1
    });
    const educationItems = educationRef.current?.querySelectorAll('.education-item');
    educationItems?.forEach(item => {
      observer.observe(item);
    });
    return () => {
      educationItems?.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);
  return <section id="about" className="section bg-gradient-portfolio">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-lg mb-6">I'm Purnima Kishore, an aspiring AI/ML engineer from Delhi with a foundational background in Electronics and Communication Engineering. Currently pursuing a Bachelor of Technology in Artificial Intelligence and Machine Learning at Maharaja Agrasen Institute of Technology, I am driven by a deep curiosity for emerging technologies and their real-world impact.

I thrive on exploring data, building intelligent systems, and developing practical, scalable solutions. My experience spans across data science, embedded systems, and speech AI—equipping me with a unique interdisciplinary perspective to solve complex problems. Whether it’s crafting predictive models, working with microcontrollers, or building speech-enabled interfaces, I enjoy working at the intersection of innovation and impact.

I’m passionate about contributing to meaningful tech that bridges the gap between cutting-edge research and real-world applications, and I’m always eager to learn, collaborate, and build solutions that matter.</p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-portfolio-container rounded-lg p-4 flex flex-col items-center">
                <span className="text-3xl font-bold text-portfolio-accent">2+</span>
                <span className="text-portfolio-text-muted">Years Experience</span>
              </div>
              <div className="bg-portfolio-container rounded-lg p-4 flex flex-col items-center">
                <span className="text-3xl font-bold text-portfolio-accent">10+</span>
                <span className="text-portfolio-text-muted">Projects</span>
              </div>
              <div className="bg-portfolio-container rounded-lg p-4 flex flex-col items-center">
                <span className="text-3xl font-bold text-portfolio-accent">4+</span>
                <span className="text-portfolio-text-muted">Internships</span>
              </div>
            </div>
          </div>
          
          <div ref={educationRef}>
            <h3 className="text-2xl font-semibold mb-6">Education Timeline</h3>
            
            <div className="space-y-6">
              <div className="education-item opacity-0 relative pl-6 border-l-2 border-portfolio-accent pb-6">
                <div className="absolute w-4 h-4 bg-portfolio-accent rounded-full -left-2.5"></div>
                <div className="card">
                  <h4 className="text-xl font-semibold text-portfolio-accent">B.Tech in Artificial Intelligence and Machine Learning</h4>
                  <p className="text-portfolio-text-muted">2023–2026</p>
                  <p className="mt-2">Maharaja Agrasen Institute of Technology, Delhi</p>
                </div>
              </div>
              
              <div className="education-item opacity-0 relative pl-6 border-l-2 border-portfolio-accent pb-6">
                <div className="absolute w-4 h-4 bg-portfolio-accent rounded-full -left-2.5"></div>
                <div className="card">
                  <h4 className="text-xl font-semibold text-portfolio-accent">Diploma in Electronics & Communication Engineering</h4>
                  <p className="text-portfolio-text-muted">2020–2023</p>
                  <p className="mt-2">Pusa Institute of Technology, Delhi</p>
                  <p className="text-sm italic mt-1">77.51%</p>
                </div>
              </div>
              
              <div className="education-item opacity-0 relative pl-6 border-l-2 border-portfolio-accent">
                <div className="absolute w-4 h-4 bg-portfolio-accent rounded-full -left-2.5"></div>
                <div className="card">
                  <h4 className="text-xl font-semibold text-portfolio-accent">Secondary School</h4>
                  <p className="text-portfolio-text-muted">2019</p>
                  <p className="mt-2">Govt. Sarvo. Co-ed Vidalaya, Rohini, Delhi (CBSE)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;