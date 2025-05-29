import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const GetInTouchSection = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-3 text-center text-white">
          Get In <span className="text-teal-400">Touch</span>
        </h2>
        <p className="text-base sm:text-lg text-gray-300 text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
          Feel free to reach out to me for any opportunities or just to say hello!
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Contact Information */}
            <div className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white">Contact Information</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:sd19776n@pace.edu" 
                  className="flex items-center space-x-4 text-gray-300 hover:text-teal-400 transition-colors p-2 rounded-lg hover:bg-gray-700"
                >
                  <Mail className="w-6 h-6 text-teal-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base break-all">sd19776n@pace.edu</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white">Connect With Me</h3>
              <div className="space-y-4">
                <a 
                  href="https://www.linkedin.com/in/dubeshivam"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-300 hover:text-teal-400 transition-colors p-2 rounded-lg hover:bg-gray-700"
                >
                  <Linkedin className="w-6 h-6 flex-shrink-0" />
                  <span className="text-sm sm:text-base">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection; 