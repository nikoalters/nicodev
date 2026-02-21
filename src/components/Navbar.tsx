import { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="tech-header">
      <nav className="tech-nav">
      
        {/* LOGO ARREGLADO: Solo la barra al inicio */}
        <Link to="/" className="logo-container" onClick={() => window.scrollTo(0, 0)}>
          <img 
            src="/logo-nicodev.png" 
            alt="Logo Nicodev" 
            className="logo-img"
          />
        </Link>

        {/* Botón Hamburguesa */}
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </div>

        {/* ENLACES ARREGLADOS: Apuntan directo al ID de la sección */}
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#inicio" onClick={() => setIsOpen(false)}>// INICIO</a>
          <a href="#servicios" onClick={() => setIsOpen(false)}>// SERVICIOS</a>
          <a href="#contacto" onClick={() => setIsOpen(false)}>// CONTACTO</a>
        </div>
        
      </nav>
    </header>
  );
};

export default Navbar;