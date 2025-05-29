import { useState } from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Balance Transferred",
      type: "Professional",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Built scalable microservices and APIs to automate credit card balance transfer processing, reducing latency and improving system stability.",
      fullDescription: "Developed Spring Boot microservices for a leading financial platform, integrating balance transfer operations with other services and the UI layer. Followed Photon patterns and ensured system compliance. Added Kafka-based event processing for real-time updates and reliability. Collaborated cross-functionally to streamline deployments using Jenkins and private cloud (PCF).",
      techStack: ["Spring Boot", "JPA", "Maven", "Kafka", "Jenkins", "PCF", "JIRA", "REST API"],
      achievements: [
        "Reduced transaction processing latency by 45% with Kafka integration",
        "Improved system scalability by 30% using Photon-compliant REST APIs",
        "Increased deployment efficiency through Jenkins CI/CD pipeline automation",
      ],
      github: null,
      demo: null,
    },
    {
      id: 2,
      title: "SafeDig",
      type: "Professional",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Engineered backend services for a utility mapping tool, accelerating map request processing and improving QA reliability.",
      fullDescription: "Led backend development for SafeDig, handling user authentication, map data processing, and automated email-based uploads to Salesforce. Applied multithreading and asynchronous execution to increase throughput. Acted as UAT contact, resolving data discrepancies and collaborating with QA and product teams.",
      techStack: ["Spring Boot", "Multithreading", "Mail Services API", "Salesforce", "JIRA"],
      achievements: [
        "Improved processing speed by 80% with asynchronous API workflows",
        "Reduced post-release bugs by 30% through QA process enhancements",
        "Acted as lead technical contact during UAT, enabling faster client sign-offs",
      ],
      github: null,
      demo: null,
    },
    {
      id: 3,
      title: "Cisco PMO Dashboard",
      type: "Professional",
      role: "Jr. Software Engineer",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Developed dynamic dashboards for program management office (PMO) reporting with improved data accessibility and performance.",
      fullDescription: "Created interactive dashboards using React.js integrated with Spring Boot backend and PostgreSQL. Optimized SQL queries and schemas for better performance. Collaborated with QA teams to ensure end-to-end testing coverage using JUnit.",
      techStack: ["React.js", "Spring Boot", "PostgreSQL", "JUnit"],
      achievements: [
        "Reduced data query response time by 30% via optimized SQL and indexes",
        "Improved dashboard usability with modular React components",
        "Lowered production bugs by 20% through robust unit/integration testing",
      ],
      github: null,
      demo: null,
    },
    {
      id: 4,
      title: "Sales Forecasting for Retail Chain",
      type: "Academic",
      role: "Developer",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Built a time-series forecasting model to predict weekly sales across store locations using Python and historical transaction data.",
      fullDescription: "Developed a predictive analytics solution for a retail chain to forecast weekly sales trends across 10+ stores. Cleaned and joined multi-source datasets using SQL and Pandas. Performed feature engineering on promotional activity, holidays, and seasonal trends. Trained and evaluated models using ARIMA and Facebook Prophet, achieving high forecasting accuracy. Delivered a reporting dashboard and insights notebook for business use.",
      techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Prophet", "SQL", "Jupyter Notebook"],
      achievements: [
        "Increased forecast accuracy by 32% vs. baseline using optimized Prophet model",
        "Identified seasonal sales trends that led to better staffing and inventory decisions",
        "Enabled store managers to plan 4 weeks in advance with visual forecasting dashboards",
      ],
      github: "https://github.com/username/sales-forecasting",
      demo: "https://sales-forecast-demo.herokuapp.com",
    },
    {
      id: 5,
      title: "Netflix Movie Recommender System",
      type: "Academic",
      role: "Developer",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Built an NLP-powered movie recommendation system that analyzes user watch history and suggests personalized titles using a Netflix dataset.",
      fullDescription: "Designed and developed a hybrid movie recommendation engine leveraging NLP and deep learning models. Preprocessed and tokenized movie metadata and user viewing history using NLTK and TF-IDF. Applied Word2Vec embeddings to understand genre, theme, and plot similarity. Trained a neural network using Keras for collaborative filtering and ranking relevance. Delivered personalized recommendations through a Flask-based web interface.",
      techStack: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "Keras", "NLTK", "Word2Vec", "TF-IDF", "Flask", "Jupyter Notebook"],
      achievements: [
        "Improved recommendation precision by 38% using NLP-enhanced similarity scoring",
        "Trained a deep neural network that outperformed baseline collaborative filtering by 27%",
      ],
      github: "https://github.com/username/netflix-recommender",
      demo: "https://netflix-recommender-demo.herokuapp.com",
    },
    {
      id: 6,
      title: "RideEase",
      type: "Academic",
      role: "Full-Stack Developer",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "A ride-sharing platform with real-time tracking, bookings, and in-app messaging capabilities.",
      fullDescription: "RideEase is a comprehensive ride-sharing solution designed to connect drivers and passengers in real-time. The platform features an intuitive booking system, live location tracking, and an integrated messaging system for seamless communication between users.",
      techStack: ["React", "Node.js", "MongoDB", "Socket.io", "Google Maps API", "Express"],
      achievements: [
        "Implemented real-time location tracking using Google Maps API and Socket.io",
        "Designed and developed the responsive user interface using React",
        "Built a secure authentication and payment processing system",
      ],
      github: "https://github.com/username/rideease",
      demo: "https://rideease-demo.netlify.app",
    },
    {
      id: 7,
      title: "StudyMate",
      type: "Academic",
      role: "Backend Developer",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Dual-portal study & quiz platform using LLM APIs for generating AI-powered quizzes.",
      fullDescription: "StudyMate is an educational platform that offers separate portals for students and educators. The system leverages LLM APIs to generate custom quizzes based on learning materials, providing personalized learning experiences for students and valuable assessment tools for educators.",
      techStack: ["Python", "Django", "PostgreSQL", "OpenAI API", "React", "Docker"],
      achievements: [
        "Designed the backend architecture and API endpoints using Django REST framework",
        "Integrated OpenAI's API for intelligent quiz generation based on course materials",
        "Implemented a scoring algorithm that adapts to student performance",
      ],
      github: "https://github.com/username/studymate",
      demo: "https://studymate-app.herokuapp.com",
    },
    {
      id: 8,
      title: "Harvest Hub",
      type: "Academic",
      role: "Developer",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Cloud-hosted agricultural marketplace built with AWS EC2, connecting farmers directly to consumers.",
      fullDescription: "Harvest Hub is a cloud-based platform that enables farmers to list their products and connect directly with consumers. The marketplace eliminates intermediaries, ensuring fresher produce for consumers and better prices for farmers, while leveraging cloud infrastructure for reliability and scalability.",
      techStack: ["AWS EC2", "Node.js", "React", "MongoDB Atlas", "Express", "Stripe API"],
      achievements: [
        "Designed and implemented the cloud architecture on AWS",
        "Set up auto-scaling configurations to handle variable traffic loads",
        "Implemented secure payment processing with Stripe integration",
      ],
      github: "https://github.com/username/harvesthub",
      demo: "https://harvesthub.cloud",
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.type.toLowerCase() === filter.toLowerCase());

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-3 text-center text-white">
          My <span className="text-teal-400">Projects</span>
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto text-lg">
          A showcase of my recent work spanning various domains and technologies.
        </p>

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-gray-800 rounded-lg">
            <button
              className={`px-6 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
                filter === 'all' 
                  ? 'bg-teal-500 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            <button
              className={`px-6 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
                filter === 'academic' 
                  ? 'bg-teal-500 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
              onClick={() => setFilter('academic')}
            >
              Academic
            </button>
            <button
              className={`px-6 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
                filter === 'professional' 
                  ? 'bg-teal-500 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
              onClick={() => setFilter('professional')}
            >
              Professional
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;