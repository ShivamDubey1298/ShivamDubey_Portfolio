import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            project.type === 'Professional' 
              ? 'bg-teal-500 text-white' 
              : 'bg-purple-500 text-white'
          }`}>
            {project.type}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        
        <div className="mb-4">
          <span className="text-teal-400 font-semibold">Role:</span>
          <span className="text-gray-300 ml-2">{project.role}</span>
        </div>

        <div className="mb-4">
          <span className="text-teal-400 font-semibold">Tech Stack:</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.techStack.map((tech) => (
              <span 
                key={tech} 
                className="px-2 py-1 bg-gray-700 text-gray-300 rounded-md text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center text-teal-400 hover:text-teal-300 transition-colors"
          >
            {isExpanded ? (
              <>
                <span className="mr-2">Show Less</span>
                <ChevronUp className="w-5 h-5" />
              </>
            ) : (
              <>
                <span className="mr-2">Show More</span>
                <ChevronDown className="w-5 h-5" />
              </>
            )}
          </button>

          {isExpanded && (
            <div className="mt-4 space-y-4">
              <div>
                <h4 className="text-teal-400 font-semibold mb-2">Full Description:</h4>
                <p className="text-gray-300">{project.fullDescription}</p>
              </div>
              
              <div>
                <h4 className="text-teal-400 font-semibold mb-2">Key Achievements:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {project.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-end space-x-4 mt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-teal-400 transition-colors"
            >
              <Github className="w-5 h-5 mr-1" />
              <span>Code</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-teal-400 transition-colors"
            >
              <ExternalLink className="w-5 h-5 mr-1" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;