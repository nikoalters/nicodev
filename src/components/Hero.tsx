import './Hero.css';
import TechCard from './TechCard';

const Hero = () => {
const placeholderImage = `${import.meta.env.BASE_URL}perfumes-preview.jpg`;

  return (
    <section id="inicio" className="hero-container">
      <div className="hero-content">
        <h1>Hola, soy <span className="highlight">Nicolás Soto</span></h1>
        <h2>Desarrollador Full Stack & Soluciones TI</h2>
        <p>
          Transformo ideas en realidad digital. Desde aplicaciones web complejas 
          hasta soporte técnico especializado.
        </p>
        <div className="hero-buttons">
          <a href="#servicios" className="btn btn-primary">Mis Servicios</a>
          <a href="#contacto" className="btn btn-outline">Contáctame</a>
        </div>
      </div>

      <div className="hero-showcase">
       
        <TechCard 
  className="showcase-tech-card" 
  style={{ maxWidth: '450px' }}
  title={
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* AQUÍ ESTÁ LA FLAMITA 3D */}
      <svg 
        className="flama-neon-3d" 
        xmlns="http://www.w3.org/2000/svg" 
        width="28" height="28" viewBox="0 0 24 24" fill="none"
      >
        <defs>
          <linearGradient id="gradienteFuego" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#FFC107" />
            <stop offset="100%" stopColor="#FF5722" />
          </linearGradient>
        </defs>
        <path d="M12 23a7.5 7.5 0 0 1-5.138-12.963C8.204 8.713 9.5 6.5 12 2c2.5 4.5 3.796 6.713 5.138 8.037A7.5 7.5 0 0 1 12 23z" fill="url(#gradienteFuego)"/>
      </svg>
      Proyecto Destacado
    </div>
  }
>
  <div style={{ textAlign: 'center' }}>
    
    {/* Imagen del Proyecto */}
    <div style={{ 
      marginBottom: '1.5rem', 
      borderRadius: '8px', 
      overflow: 'hidden', 
      border: '1px solid rgba(0, 243, 255, 0.2)', 
      boxShadow: '0 0 15px rgba(0, 243, 255, 0.1)' 
    }}>
      <img 
        src={placeholderImage} 
        alt="Vista previa Tienda de Perfumes" 
        style={{ 
          width: '100%', 
          height: 'auto', 
          display: 'block',
          transition: 'transform 0.3s ease'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      />
    </div>

    {/* Título y Descripción */}
    <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>Tienda de Perfumes</h3>
    <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem', color: '#a0a0b0' }}>
      E-commerce moderno desarrollado con React. Carrito de compras, catálogo dinámico y diseño responsive.
    </p>

    {/* Botón de Acción */}
    <a 
      href="https://frontend-perfumes-two.vercel.app/" 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{
        display: 'inline-block',
        background: 'linear-gradient(90deg, #bd00ff, #00f3ff)',
        color: 'black',
        fontWeight: 'bold',
        padding: '0.8rem 1.5rem',
        borderRadius: '4px',
        textDecoration: 'none',
        width: '100%',
        boxSizing: 'border-box',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        transition: 'transform 0.2s ease'
      }}
      onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
      onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      VISITAR TIENDA DE PERFUMES
    </a>
  </div>
</TechCard>
      </div>
    </section>
  );
};

export default Hero;