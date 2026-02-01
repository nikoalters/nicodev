import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="tech-header">
      <nav className="tech-nav">
       
        <div className="logo">
          NICODEV<span>.</span>
        </div>

        
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </div>

        
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