import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const GetInTouchSection = () => {
  return (
    <section id="contact" className="w-full min-h-screen py-10 sm:py-12 md:py-16 lg:py-20 bg-gray-900">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Get In <span className="text-teal-400">Touch</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-2">
            Feel free to reach out to me for any opportunities or just to say hello!
          </p>
        </div>

        {/* Contact Cards Container */}
        <div className="w-full max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {/* Contact Information Card */}
            <div className="bg-gray-800 rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-4 sm:mb-5 md:mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a 
                  href="mailto:sd19776n@pace.edu" 
                  className="flex items-center space-x-3 sm:space-x-4 p-3 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-lg text-gray-300 hover:text-teal-400 break-all">
                    sd19776n@pace.edu
                  </span>
                </a>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="bg-gray-800 rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-4 sm:mb-5 md:mb-6">
                Connect With Me
              </h3>
              <div className="space-y-4">
                <a 
                  href="https://www.linkedin.com/in/dubeshivam"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 sm:space-x-4 p-3 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-lg text-gray-300 hover:text-teal-400">
                    LinkedIn
                  </span>
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