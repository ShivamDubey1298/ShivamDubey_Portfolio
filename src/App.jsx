import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import TechTrendsSection from './components/TechTrendsSection';
import GetInTouchSection from './components/GetInTouchSection';

function App() {
  return (
    <div className="font-sans text-gray-300 bg-gray-900">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <TechTrendsSection />
        <GetInTouchSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;