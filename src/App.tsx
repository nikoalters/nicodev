import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Automation from './pages/Automation';
import Footer from './components/Footer';
import WebDev from './pages/WebDev';
import Support from './pages/Support';
import TechStack from './components/TechStack';
import ProjectsGrid from './components/ProjectsGrid';


const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechStack />
<ProjectsGrid />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/web" element={<WebDev />} />
      <Route path="/soporte" element={<Support />} />
      <Route path="/automatizacion" element={<Automation />} />
    </Routes>
  );
}

export default App;