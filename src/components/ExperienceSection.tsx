
import { useEffect, useRef } from 'react';

const ExperienceSection = () => {
  const experienceRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in');
            }, index * 100);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const experienceItems = experienceRef.current?.querySelectorAll('.experience-item');
    experienceItems?.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      experienceItems?.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="experience" className="section">
      <div className="container mx-auto">
        <h2 className="section-title">Experience</h2>
        
        <div className="max-w-3xl mx-auto mt-12" ref={experienceRef}>
          <div className="experience-item opacity-0 flex flex-col md:flex-row gap-6 mb-12 relative">
            <div className="flex-shrink-0 w-full md:w-32 font-medium text-portfolio-accent">
              Jun–Jul 2024
            </div>
            <div className="flex-grow">
              <div className="card">
                <h3 className="text-xl font-semibold">Intern</h3>
                <p className="text-portfolio-accent mb-2">Kurious Learning Labs</p>
                <p className="text-portfolio-text-muted">
                  Worked on AI/ML projects focused on educational technology and learning systems.
                </p>
              </div>
            </div>
          </div>
          
          <div className="experience-item opacity-0 flex flex-col md:flex-row gap-6 mb-12">
            <div className="flex-shrink-0 w-full md:w-32 font-medium text-portfolio-accent">
              Jun–Aug 2023
            </div>
            <div className="flex-grow">
              <div className="card">
                <h3 className="text-xl font-semibold">Diploma Trainee Engineer</h3>
                <p className="text-portfolio-accent mb-2">Sudhir Power Ltd.</p>
                <p className="text-portfolio-text-muted">
                  Assisted in electronic systems implementation and maintenance, gaining hands-on industry experience.
                </p>
              </div>
            </div>
          </div>
          
          <div className="experience-item opacity-0 flex flex-col md:flex-row gap-6 mb-12">
            <div className="flex-shrink-0 w-full md:w-32 font-medium text-portfolio-accent">
              Jul–Aug 2022
            </div>
            <div className="flex-grow">
              <div className="card">
                <h3 className="text-xl font-semibold">Intern</h3>
                <p className="text-portfolio-accent mb-2">DMRC</p>
                <p className="text-portfolio-text-muted">
                  Worked on communication systems and electronic infrastructure within the Delhi Metro Rail Corporation.
                </p>
              </div>
            </div>
          </div>
          
          <div className="experience-item opacity-0 flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0 w-full md:w-32 font-medium text-portfolio-accent">
              Jun–Jul 2022
            </div>
            <div className="flex-grow">
              <div className="card">
                <h3 className="text-xl font-semibold">Intern</h3>
                <p className="text-portfolio-accent mb-2">Central Electronics Ltd.</p>
                <p className="text-portfolio-text-muted">
                  Contributed to electronics projects and gained experience in manufacturing and testing processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
