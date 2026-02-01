import { Routes, Route } from 'react-router-dom'; // Importamos el sistema de rutas
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Automation from './pages/Automation';
import Footer from './components/Footer';

// Importamos las páginas nuevas
import WebDev from './pages/WebDev';
import Support from './pages/Support';

// Creamos un componente "Home" para agrupar lo que ya tenías
const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
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