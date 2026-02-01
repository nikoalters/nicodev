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
       
        <TechCard className="showcase-tech-card" title="✨ Proyecto Destacado" style={{ maxWidth: '450px' }}>
          
          <div style={{ textAlign: 'center' }}>
            
      
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
        

            <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>Tienda de Perfumes</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem', color: '#a0a0b0' }}>
              E-commerce moderno desarrollado con React. Carrito de compras, catálogo dinámico y diseño responsive.
            </p>

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
                letterSpacing: '1px'
              }}
            >
              Visitar Tienda de Perfumes
            </a>
          </div>

        </TechCard>
      </div>
    </section>
  );
};

export default Hero;