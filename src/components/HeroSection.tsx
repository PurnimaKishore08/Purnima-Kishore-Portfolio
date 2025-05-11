
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple particle animation
    if (!particlesRef.current) return;
    const canvas = document.createElement('canvas');
    particlesRef.current.appendChild(canvas);
    canvas.width = particlesRef.current.offsetWidth;
    canvas.height = particlesRef.current.offsetHeight;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;
    
    const particles: { x: number; y: number; radius: number; vx: number; vy: number }[] = [];
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: Math.random() * 0.2 - 0.1,
        vy: Math.random() * 0.2 - 0.1
      });
    }
    
    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(0, 188, 212, 0.2)';
      ctx.beginPath();
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0 || p.x > canvas.width) p.vx = -p.vx;
        if (p.y < 0 || p.y > canvas.height) p.vy = -p.vy;
      }
      
      ctx.fill();
      
      // Draw connections between nearby particles
      ctx.strokeStyle = 'rgba(0, 188, 212, 0.1)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(drawParticles);
    }
    
    drawParticles();
    
    // Cleanup
    return () => {
      if (particlesRef.current) {
        particlesRef.current.removeChild(canvas);
      }
    };
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex items-center pt-20">
      <div className="particles-container" ref={particlesRef}></div>
      <div className="container mx-auto px-4 py-16 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="block">Hi, I'm</span>
              <span className="text-gradient">Purnima Kishore</span>
            </h1>
            <p className="text-xl md:text-2xl text-portfolio-text-muted mb-6">
              AI/ML Enthusiast | Data-Driven Innovator | Engineer in the Making
            </p>
            <p className="text-lg md:text-xl mb-8 max-w-lg">
              Passionate about exploring data and building intelligent systems to bridge the gap between emerging technologies and real-world applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="button-primary">Explore My Work</a>
              <a href="#contact" className="button-outline">Contact Me</a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center animate-fade-in animate-delay-300">
            <div className="relative">
              <div className="bg-portfolio-container rounded-full w-72 h-72 md:w-80 md:h-80 overflow-hidden border-4 border-portfolio-accent shadow-xl">
                {/* Profile picture */}
                <img 
                  src="https://i.postimg.cc/0QBTbJPR/Whats-App-Image-2025-05-11-at-1-04-52-AM.jpg" 
                  alt="Purnima Kishore" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className = 'w-full h-full flex items-center justify-center bg-portfolio-container text-portfolio-accent';
                      fallback.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-32 h-32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      `;
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
              
              {/* Tech icons floating around */}
              <div className="absolute -top-4 right-4 bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-2xl">⚛️</span>
              </div>
              <div className="absolute bottom-4 -left-4 bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
                <span className="text-2xl">🤖</span>
              </div>
              <div className="absolute top-1/2 -right-6 bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                <span className="text-2xl">🧠</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
