import { Heart, Code, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <Code className="h-6 w-6 text-teal-400 mr-2" />
              <span className="text-xl font-bold">Shivam Dubey</span>
            </div>
            <p className="text-gray-400 mt-2 text-sm">
              Full-Stack Software Engineer | Automation | Cloud Enthusiast
            </p>
          </div>

          <div className="flex space-x-8">
            <div>
              <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#home" 
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#projects" 
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.linkedin.com/in/dubeshivam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:sd19776n@pace.edu"
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Shivam Dubey. All rights reserved.
          </p>
          <p className="flex justify-center items-center mt-2 text-sm text-gray-500" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;