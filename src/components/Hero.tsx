import './Hero.css';
import TechCard from './TechCard';

const Hero = () => {
  // URL de la imagen de ejemplo. LUEGO LA CAMBIAREMOS POR LA TUYA.
  const placeholderImage = "/perfumes-preview.jpg";

  return (
    <section id="inicio" className="hero-container">
      {/* Lado Izquierdo: Tu Presentación */}
      <div className="hero-content">
        <h1>Hola, soy <span className="highlight">Nico Soto</span></h1>
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

      {/* Lado Derecho: Tu Proyecto Destacado con IMAGEN */}
      <div className="hero-showcase">
        {/* Le agregué un ancho máximo style={{ maxWidth: '450px' }} para que la imagen no se haga gigante */}
        <TechCard className="showcase-tech-card" title="✨ Proyecto Destacado" style={{ maxWidth: '450px' }}>
          
          <div style={{ textAlign: 'center' }}>
            
            {/* --- AQUÍ ESTÁ LA NUEVA IMAGEN DE VISTA PREVIA --- */}
            <div style={{ 
              marginBottom: '1.5rem', 
              borderRadius: '8px', 
              overflow: 'hidden', 
              border: '1px solid rgba(0, 243, 255, 0.2)', // Borde neón sutil
              boxShadow: '0 0 15px rgba(0, 243, 255, 0.1)' // Resplandor suave
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
                /* Pequeño efecto zoom al pasar el mouse sobre la imagen */
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
            {/* ----------------------------------------------- */}

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
              Visitar Tienda en Vivo 🚀
            </a>
          </div>

        </TechCard>
      </div>
    </section>
  );
};

export default Hero;