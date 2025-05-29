import { useEffect, useCallback } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Link } from 'react-scroll';
import { ChevronDown } from 'lucide-react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';

const HeroSection = () => {
  const [text] = useTypewriter({
    words: ['Full Stack Developer', 'Robotic Process Automation ', 'Cloud'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-slate-900">
      {/* Particles Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            particles: {
              color: {
                value: "#14b8a6",
              },
              links: {
                color: "#14b8a6",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: {
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
          className="absolute inset-0"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
            Hi, I'm <span className="text-teal-500">Shivam</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-gray-300">
            <span className="text-teal-500">{text}</span>
            <Cursor cursorStyle="|" />
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about building innovative solutions and creating impactful software experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              View My Work
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-transparent hover:bg-teal-500/10 text-teal-500 border-2 border-teal-500 px-8 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      <Link
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-teal-500 hover:text-teal-400 transition-colors duration-300 z-10"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </Link>
    </section>
  );
};

export default HeroSection;