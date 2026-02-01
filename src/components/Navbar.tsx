import { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; // Importamos Link para que el logo lleve al inicio

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="tech-header">
      <nav className="tech-nav">
        {/* LOGO COMO IMAGEN */}
        {/* Usamos Link para que al hacer clic te lleve al inicio */}
        <Link to="/" className="logo-container" onClick={() => window.scrollTo(0, 0)}>
          <img 
            src="/nicodev/logo-nicodev.png" // Ruta a la imagen en la carpeta public
            alt="Logo Nicodev" 
            className="logo-img"
          />
        </Link>

        {/* Botón Hamburguesa (Solo visible en móvil) */}
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </div>

        {/* Enlaces */}
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          {/* Usamos <a> con href para navegar dentro de la misma página (inicio) */}
          <a href="/nicodev/#inicio" onClick={() => setIsOpen(false)}>// INICIO</a>
          <a href="/nicodev/#servicios" onClick={() => setIsOpen(false)}>// SERVICIOS</a>
          <a href="/nicodev/#contacto" onClick={() => setIsOpen(false)}>// CONTACTO</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;