import { Mail, Linkedin } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="bg-slate-900 text-gray-400 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex gap-6 mb-4">
            <a
              href="https://www.linkedin.com/in/your-linkedin-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-teal-500 hover:text-teal-400 transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
              <span className="text-lg">LinkedIn</span>
            </a>
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-2 text-teal-500 hover:text-teal-400 transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
              <span className="text-lg">Email</span>
            </a>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} Shivam Dubey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection; 