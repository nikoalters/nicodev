import { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="tech-header">
      <nav className="tech-nav">
      
        <Link to="/" className="logo-container" onClick={() => window.scrollTo(0, 0)}>
          <img 
            src="/nicodev/logo-nicodev.png" 
            alt="Logo Nicodev" 
            className="logo-img"
          />
        </Link>

      
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </div>

       
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
       
          <a href="/nicodev/#inicio" onClick={() => setIsOpen(false)}>// INICIO</a>
          <a href="/nicodev/#servicios" onClick={() => setIsOpen(false)}>// SERVICIOS</a>
          <a href="/nicodev/#contacto" onClick={() => setIsOpen(false)}>// CONTACTO</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;