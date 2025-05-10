
const SkillCategory = ({ 
  title, 
  skills, 
  icon 
}: { 
  title: string; 
  skills: string[]; 
  icon: string 
}) => {
  return (
    <div className="card hover:-translate-y-1 transition-all">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-portfolio-accent">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="bg-portfolio-background px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: "👨‍💻",
      skills: ["Java", "Python", "C++", "C"]
    },
    {
      title: "Web Development",
      icon: "🌐",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "AI/ML & Data Science",
      icon: "🧠",
      skills: ["Machine Learning", "Deep Learning", "AI Fundamentals"]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["MySQL", "Oracle", "MongoDB"]
    },
    {
      title: "Tools",
      icon: "🔧",
      skills: ["Microsoft Office Suite", "VS Code", "Git"]
    },
    {
      title: "Hardware Projects",
      icon: "🔌",
      skills: ["Delay Circuits", "RPS", "Embedded Systems"]
    }
  ];

  return (
    <section id="skills" className="section bg-gradient-portfolio">
      <div className="container mx-auto">
        <h2 className="section-title">Skills</h2>
        <p className="text-lg mb-8 max-w-3xl">
          My technical expertise spans across various domains from AI/ML to hardware systems development,
          allowing me to approach problems with a versatile and multidisciplinary perspective.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <SkillCategory 
                title={category.title} 
                skills={category.skills} 
                icon={category.icon} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
