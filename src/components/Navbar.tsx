
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Improved navigation function for hash links
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    closeMobileMenu();
    
    if (location.pathname !== '/') {
      // If not on homepage, navigate to homepage with hash
      window.location.href = `/#${target}`;
      return;
    }
    
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      const element = document.getElementById(target);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-portfolio-background/90 backdrop-blur-lg shadow-md py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:grid md:grid-cols-3 items-center">
        <div className="flex items-center">
          <Link to="/" className="text-portfolio-accent text-2xl font-bold">
            Purnima<span className="text-portfolio-text">.K</span>
          </Link>
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center justify-center space-x-6 lg:space-x-8 col-span-1">
          {location.pathname === '/' ? (
            <>
              <a href="#home" className="text-portfolio-text hover:text-portfolio-accent transition-colors" onClick={(e) => handleNavigation(e, 'home')}>Home</a>
              <a href="#about" className="text-portfolio-text hover:text-portfolio-accent transition-colors" onClick={(e) => handleNavigation(e, 'about')}>About</a>
              <a href="#experience" className="text-portfolio-text hover:text-portfolio-accent transition-colors" onClick={(e) => handleNavigation(e, 'experience')}>Experience</a>
              <a href="#skills" className="text-portfolio-text hover:text-portfolio-accent transition-colors" onClick={(e) => handleNavigation(e, 'skills')}>Skills</a>
              <a href="#services" className="text-portfolio-text hover:text-portfolio-accent transition-colors" onClick={(e) => handleNavigation(e, 'services')}>Services</a>
              <a href="#projects" className="text-portfolio-text hover:text-portfolio-accent transition-colors" onClick={(e) => handleNavigation(e, 'projects')}>Projects</a>
              <a href="#certificates" className="text-portfolio-text hover:text-portfolio-accent transition-colors" onClick={(e) => handleNavigation(e, 'certificates')}>Certificates</a>
              <a href="#blogs" className="text-portfolio-text hover:text-portfolio-accent transition-colors" onClick={(e) => handleNavigation(e, 'blogs')}>Blogs</a>
            </>
          ) : (
            <>
              <Link to="/" className="text-portfolio-text hover:text-portfolio-accent transition-colors">Home</Link>
              <a href="/#about" className="text-portfolio-text hover:text-portfolio-accent transition-colors" onClick={(e) => { e.preventDefault(); window.location.href = '/#about'; }}>About</a>
              <a href="/#experience" className="text-portfolio-text hover:text-portfolio-accent transition-colors" onClick={(e) => { e.preventDefault(); window.location.href = '/#experience'; }}>Experience</a>
              <a href="/#skills" className="text-portfolio-text hover:text-portfolio-accent transition-colors" onClick={(e) => { e.preventDefault(); window.location.href = '/#skills'; }}>Skills</a>
              <a href="/#services" className="text-portfolio-text hover:text-portfolio-accent transition-colors" onClick={(e) => { e.preventDefault(); window.location.href = '/#services'; }}>Services</a>
              <a href="/#projects" className="text-portfolio-text hover:text-portfolio-accent transition-colors" onClick={(e) => { e.preventDefault(); window.location.href = '/#projects'; }}>Projects</a>
              <a href="/#certificates" className="text-portfolio-text hover:text-portfolio-accent transition-colors" onClick={(e) => { e.preventDefault(); window.location.href = '/#certificates'; }}>Certificates</a>
              <a href="/#blogs" className="text-portfolio-text hover:text-portfolio-accent transition-colors" onClick={(e) => { e.preventDefault(); window.location.href = '/#blogs'; }}>Blogs</a>
              <Link to="/blogs" className="text-portfolio-text hover:text-portfolio-accent transition-colors">All Blogs</Link>
            </>
          )}
        </div>
        
        {/* Contact button - Right aligned */}
        <div className="hidden md:flex justify-end">
          {location.pathname === '/' ? (
            <a href="#contact" className="button-primary" onClick={(e) => handleNavigation(e, 'contact')}>Contact Me</a>
          ) : (
            <Link to="/#contact" className="button-primary">Contact Me</Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-portfolio-text hover:text-portfolio-accent absolute top-5 right-4"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-portfolio-background shadow-lg py-4 animate-fade-in">
            <div className="flex flex-col space-y-4 px-4">
              {location.pathname === '/' ? (
                <>
                  <a href="#home" className="text-portfolio-text hover:text-portfolio-accent transition-colors py-2" onClick={(e) => handleNavigation(e, 'home')}>Home</a>
                  <a href="#about" className="text-portfolio-text hover:text-portfolio-accent transition-colors py-2" onClick={(e) => handleNavigation(e, 'about')}>About</a>
                  <a href="#experience" className="text-portfolio-text hover:text-portfolio-accent transition-colors py-2" onClick={(e) => handleNavigation(e, 'experience')}>Experience</a>
                  <a href="#skills" className="text-portfolio-text hover:text-portfolio-accent transition-colors py-2" onClick={(e) => handleNavigation(e, 'skills')}>Skills</a>
                  <a href="#services" className="text-portfolio-text hover:text-portfolio-accent transition-colors py-2" onClick={(e) => handleNavigation(e, 'services')}>Services</a>
                  <a href="#projects" className="text-portfolio-text hover:text-portfolio-accent transition-colors py-2" onClick={(e) => handleNavigation(e, 'projects')}>Projects</a>
                  <a href="#certificates" className="text-portfolio-text hover:text-portfolio-accent transition-colors py-2" onClick={(e) => handleNavigation(e, 'certificates')}>Certificates</a>
                  <a href="#blogs" className="text-portfolio-text hover:text-portfolio-accent transition-colors py-2" onClick={(e) => handleNavigation(e, 'blogs')}>Blogs</a>
                  <a href="#contact" className="button-primary inline-block text-center" onClick={(e) => handleNavigation(e, 'contact')}>Contact Me</a>
                </>
              ) : (
                <>
                  <Link to="/" className="text-portfolio-text hover:text-portfolio-accent transition-colors py-2" onClick={closeMobileMenu}>Home</Link>
                  <a href="/#about" className="text-portfolio-text hover:text-portfolio-accent transition-colors py-2" onClick={(e) => { e.preventDefault(); window.location.href = '/#about'; closeMobileMenu(); }}>About</a>
                  <a href="/#experience" className="text-portfolio-text hover:text-portfolio-accent transition-colors py-2" onClick={(e) => { e.preventDefault(); window.location.href = '/#experience'; closeMobileMenu(); }}>Experience</a>
                  <a href="/#skills" className="text-portfolio-text hover:text-portfolio-accent transition-colors py-2" onClick={(e) => { e.preventDefault(); window.location.href = '/#skills'; closeMobileMenu(); }}>Skills</a>
                  <a href="/#services" className="text-portfolio-text hover:text-portfolio-accent transition-colors py-2" onClick={(e) => { e.preventDefault(); window.location.href = '/#services'; closeMobileMenu(); }}>Services</a>
                  <a href="/#projects" className="text-portfolio-text hover:text-portfolio-accent transition-colors py-2" onClick={(e) => { e.preventDefault(); window.location.href = '/#projects'; closeMobileMenu(); }}>Projects</a>
                  <a href="/#certificates" className="text-portfolio-text hover:text-portfolio-accent transition-colors py-2" onClick={(e) => { e.preventDefault(); window.location.href = '/#certificates'; closeMobileMenu(); }}>Certificates</a>
                  <a href="/#blogs" className="text-portfolio-text hover:text-portfolio-accent transition-colors py-2" onClick={(e) => { e.preventDefault(); window.location.href = '/#blogs'; closeMobileMenu(); }}>Blogs</a>
                  <Link to="/blogs" className="text-portfolio-text hover:text-portfolio-accent transition-colors py-2" onClick={closeMobileMenu}>All Blogs</Link>
                  <Link to="/#contact" className="button-primary inline-block text-center" onClick={closeMobileMenu}>Contact Me</Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
