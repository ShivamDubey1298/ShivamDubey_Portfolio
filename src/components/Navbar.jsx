import { Link } from 'react-scroll';
import { Menu, X, Code, FileDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on scroll if open
  useEffect(() => {
    if (!isOpen) return;
    const closeMenuOnScroll = () => setIsOpen(false);
    window.addEventListener('scroll', closeMenuOnScroll);
    return () => window.removeEventListener('scroll', closeMenuOnScroll);
  }, [isOpen]);

  const handleResumeDownload = () => {
    // Replace with your actual resume PDF URL
    const resumeUrl = 'https://drive.google.com/file/d/1qCYYQ_vK9yfAhUzjW-VK8RPjuCCixczw/view?usp=sharing';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Shivam_Dubey_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Code className={`h-6 w-6 mr-2 ${scrolled ? 'text-teal-600 dark:text-teal-400' : 'text-white'}`} />
            <span className={`font-bold text-xl ${scrolled ? 'text-gray-800 dark:text-white' : 'text-white'}`}>Shivam Dubey</span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {['Home', 'About', 'Projects', 'Contact'].map((link) => (
              <Link
                key={link}
                to={link.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`font-medium cursor-pointer transition-colors duration-300 ${
                  scrolled ? 'text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400' 
                  : 'text-white/90 hover:text-white'
                }`}
              >
                {link}
              </Link>
            ))}
            
            <button
              onClick={handleResumeDownload}
              className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
            >
              <FileDown className="h-4 w-4 mr-2" />
              Resume
            </button>
            
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsOpen(true)}
              className={`${scrolled ? 'text-gray-600 dark:text-gray-400' : 'text-white'} hover:text-teal-400 transition-colors`}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 flex flex-col">
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-800">
            <span className="font-bold text-xl text-white flex items-center">
              <Code className="h-6 w-6 mr-2 text-teal-400" />
              Shivam Dubey
            </span>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-teal-400 transition-colors p-2 rounded-lg"
                aria-label="Close menu"
              >
                <X className="h-7 w-7" />
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center space-y-6 px-6">
            {['Home', 'About', 'Projects', 'Contact'].map((link) => (
              <Link
                key={link}
                to={link.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-semibold text-white hover:text-teal-400 transition-colors"
              >
                {link}
              </Link>
            ))}
            <button
              onClick={handleResumeDownload}
              className="flex items-center mt-8 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-lg font-medium"
            >
              <FileDown className="h-5 w-5 mr-2" />
              Download Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;