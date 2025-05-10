
const ServiceCard = ({ 
  title, 
  description, 
  icon 
}: { 
  title: string; 
  description: string; 
  icon: string 
}) => {
  return (
    <div className="card hover:shadow-xl transition-all group">
      <div className="text-4xl mb-5 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-portfolio-accent">{title}</h3>
      <p className="text-portfolio-text-muted">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Basic Web Development",
      description: "Custom websites with responsive design, ensuring optimal performance across all devices.",
      icon: "🌐"
    },
    {
      title: "Database Support & Integration",
      description: "Database design, optimization, and integration with existing systems and applications.",
      icon: "🗄️"
    },
    {
      title: "AI/ML Project Development",
      description: "Custom machine learning solutions and AI integrations tailored to specific business needs.",
      icon: "🤖"
    },
    {
      title: "Embedded Systems Prototyping",
      description: "Design and development of embedded systems for IoT and automation applications.",
      icon: "📱"
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <h2 className="section-title">Services</h2>
        <p className="text-lg mb-8 max-w-3xl">
          I offer a range of services leveraging my technical skills and experience to help bring your ideas to life.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {services.map((service, index) => (
            <div 
              key={index}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <ServiceCard 
                title={service.title} 
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
