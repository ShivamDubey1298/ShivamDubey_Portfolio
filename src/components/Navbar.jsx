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
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-gray-600 dark:text-gray-400' : 'text-white'} hover:text-teal-400 transition-colors`}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden fixed inset-x-0 top-[72px] bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 transform ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          {['Home', 'About', 'Projects', 'Contact'].map((link) => (
            <Link
              key={link}
              to={link.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-gray-800 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 border-b border-gray-200 dark:border-gray-700"
            >
              {link}
            </Link>
          ))}
          <button
            onClick={handleResumeDownload}
            className="flex items-center mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors w-full justify-center"
          >
            <FileDown className="h-4 w-4 mr-2" />
            Download Resume
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;