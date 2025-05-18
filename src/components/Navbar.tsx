
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-portfolio-background/90 backdrop-blur-lg shadow-md py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-portfolio-accent text-2xl font-bold">Purnima<span className="text-portfolio-text">.K</span></Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/#home" className="text-portfolio-text hover:text-portfolio-accent transition-colors">Home</Link>
          <Link to="/#about" className="text-portfolio-text hover:text-portfolio-accent transition-colors">About</Link>
          <Link to="/#experience" className="text-portfolio-text hover:text-portfolio-accent transition-colors">Experience</Link>
          <Link to="/#skills" className="text-portfolio-text hover:text-portfolio-accent transition-colors">Skills</Link>
          <Link to="/#services" className="text-portfolio-text hover:text-portfolio-accent transition-colors">Services</Link>
          <Link to="/#projects" className="text-portfolio-text hover:text-portfolio-accent transition-colors">Projects</Link>
          <Link to="/#certificates" className="text-portfolio-text hover:text-portfolio-accent transition-colors">Certificates</Link>
          <Link to="/blogs" className="text-portfolio-text hover:text-portfolio-accent transition-colors">Blogs</Link>
          <Link to="/#contact" className="button-primary">Contact Me</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-portfolio-text hover:text-portfolio-accent"
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
              <Link 
                to="/#home" 
                className="text-portfolio-text hover:text-portfolio-accent transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/#about" 
                className="text-portfolio-text hover:text-portfolio-accent transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/#experience" 
                className="text-portfolio-text hover:text-portfolio-accent transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Experience
              </Link>
              <Link 
                to="/#skills" 
                className="text-portfolio-text hover:text-portfolio-accent transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Skills
              </Link>
              <Link 
                to="/#services" 
                className="text-portfolio-text hover:text-portfolio-accent transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/#projects" 
                className="text-portfolio-text hover:text-portfolio-accent transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                to="/#certificates" 
                className="text-portfolio-text hover:text-portfolio-accent transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Certificates
              </Link>
              <Link 
                to="/blogs" 
                className="text-portfolio-text hover:text-portfolio-accent transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blogs
              </Link>
              <Link 
                to="/#contact" 
                className="button-primary inline-block text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Me
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
