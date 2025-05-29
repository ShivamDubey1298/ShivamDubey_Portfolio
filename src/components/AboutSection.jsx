import React from 'react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const AboutSection = () => {
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [isBachelorOpen, setIsBachelorOpen] = useState(false);

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-3 text-center text-white">
          About <span className="text-teal-400">Me</span>
        </h2>
        {/* <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto text-lg">
          Get to know more about my background and expertise.
        </p> */}

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Photo and Education Section */}
            <div className="md:w-1/3">
              <div className="rounded-lg overflow-hidden shadow-xl mb-8">
                <img 
                  src="https://raw.githubusercontent.com/ShivamDubey1298/ShivamDubey_Portfolio/main/SHivam.jpg" 
                  alt="Shivam Dubey"
                  className="w-full h-auto"
                />
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
                <h3 className="text-2xl font-semibold mb-6 text-white">Education</h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-teal-500 pl-4 py-2">
                    <h4 className="text-xl font-medium text-white">Master's in Computer Science</h4>
                    <p className="text-gray-400">Pace University • New York, USA • 2023 - 2025</p>
                    <div className="mt-4">
                      <div 
                        className="flex items-center cursor-pointer"
                        onClick={() => setIsEducationOpen(!isEducationOpen)}
                      >
                        <h5 className="font-medium text-gray-300">Subjects Studied</h5>
                        <ChevronDown className={`ml-2 h-5 w-5 transition-transform ${isEducationOpen ? 'rotate-180' : ''}`} />
                      </div>
                      <div className={`mt-2 transition-all ${isEducationOpen ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
                        <ul className="list-disc ml-4 text-gray-400">
                          <li>Advanced Algorithms</li>
                          <li>Parallel Computing</li>
                          <li>Machine Learning</li>
                          <li>Cloud Computing</li>
                          <li>Distributed Systems</li>
                          <li>AI Ethics</li>
                          <li>Deep Learning</li>
                          <li>Advanced Database Management</li>
                          <li>Software Engineering Methodologies</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-2 border-gray-600 pl-4 py-2">
                    <h4 className="text-xl font-medium text-white">Bachelor's in Computer Science & Engineering</h4>
                    <p className="text-gray-400">Rajiv Gandhi Proudyogiki Vishwavidyalaya • India • 2016 - 2020</p>
                    <div className="mt-4">
                      <div 
                        className="flex items-center cursor-pointer"
                        onClick={() => setIsBachelorOpen(!isBachelorOpen)}
                      >
                        <h5 className="font-medium text-gray-300">Subjects Studied</h5>
                        <ChevronDown className={`ml-2 h-5 w-5 transition-transform ${isBachelorOpen ? 'rotate-180' : ''}`} />
                      </div>
                      <div className={`mt-2 transition-all ${isBachelorOpen ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
                        <ul className="list-disc ml-4 text-gray-400">
                          <li>Data Structures and Algorithms</li>
                          <li>Operating Systems</li>
                          <li>Computer Networks</li>
                          <li>Database Management Systems</li>
                          <li>Software Engineering</li>
                          <li>Web Development</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Text and Skills Section */}
            <div className="md:w-2/3">
              <div className="bg-gray-800 rounded-lg p-8 shadow-xl mb-12">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a passionate Software Engineer and Computer Science graduate student at Pace University with 3+ years of professional experience building scalable backend systems and dynamic full-stack applications. I specialize in microservice architectures using Spring Boot and modern frontend frameworks like React.js to deliver robust, user-centric solutions.

                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                At Zensar Technologies, I developed enterprise-grade software across domains like fintech and utility mapping, optimized deployments using Docker and Jenkins, and led cross-functional teams to improve product quality and performance. My academic and professional journey includes work with Java, Python, PostgreSQL, AWS, MongoDB, and a wide range of frameworks and tools across the development stack.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                Beyond software engineering, I'm deeply interested in the potential of Large Language Models (LLMs) and Generative AI. I actively explore how these technologies can be integrated into real-world platforms to enhance automation, content generation, and intelligent decision-making. This passion led to the creation of StudyMate, a live academic project that uses LLM APIs for quiz generation and adaptive learning.
                I'm constantly learning and adapting to new technologies to stay at the forefront of the industry.
                </p>
              </div>

              <h3 className="text-3xl font-bold mb-8 text-white">
                Technical <span className="text-teal-400">Skills</span>
              </h3>

              <div className="space-y-8">
                {/* Programming Languages */}
                <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
                  <h4 className="text-xl font-semibold mb-6 text-teal-400">Programming Languages</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="Java" className="w-8 h-8" />
                      <span className="text-gray-300">Java</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" className="w-8 h-8" />
                      <span className="text-gray-300">Python</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-8 h-8" />
                      <span className="text-gray-300">JavaScript</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-8 h-8" />
                      <span className="text-gray-300">TypeScript</span>
                    </div>
                  </div>
                </div>

                {/* Cloud & Frameworks */}
                <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
                  <h4 className="text-xl font-semibold mb-6 text-teal-400">Cloud & Frameworks</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg" alt="Spring" className="w-8 h-8" />
                      <span className="text-gray-300">Spring Boot</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" className="w-8 h-8" />
                      <span className="text-gray-300">React</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" className="w-8 h-8" />
                      <span className="text-gray-300">AWS</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" alt="Docker" className="w-8 h-8" />
                      <span className="text-gray-300">Docker</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg" alt="Jenkins" className="w-8 h-8" />
                      <span className="text-gray-300">Jenkins</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" className="w-8 h-8" />
                      <span className="text-gray-300">Kubernetes</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg">
                      <img src="https://cdn.worldvectorlogo.com/logos/uipath-3.svg" alt="UiPath" className="w-8 h-8" />
                      <span className="text-gray-300">UiPath</span>
                    </div>
                  </div>
                </div>

                {/* Databases & Tools */}
                <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
                  <h4 className="text-xl font-semibold mb-6 text-teal-400">Databases & Tools</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-8 h-8" />
                      <span className="text-gray-300">PostgreSQL</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-8 h-8" />
                      <span className="text-gray-300">MongoDB</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg" alt="Oracle" className="w-8 h-8" />
                      <span className="text-gray-300">Oracle</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" alt="MySQL" className="w-8 h-8" />
                      <span className="text-gray-300">MySQL</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="Git" className="w-8 h-8" />
                      <span className="text-gray-300">Git</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg">
                      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jira/jira-original.svg" alt="JIRA" className="w-8 h-8" />
                      <span className="text-gray-300">JIRA</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg">
                      <img src="https://cdn.worldvectorlogo.com/logos/tableau-software.svg" alt="Tableau" className="w-8 h-8" />
                      <span className="text-gray-300">Tableau</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg">
                      <img src="https://cdn.worldvectorlogo.com/logos/power-bi.svg" alt="Power BI" className="w-8 h-8" />
                      <span className="text-gray-300">Power BI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;