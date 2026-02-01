import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TechCard from '../components/TechCard';
import { useEffect } from 'react';

const WebDev = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="portfolio-container">
      <Navbar />
      
      <main style={{ padding: '6rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 className="section-title">Planes Web & Apps</h1>
        <p className="subtitle" style={{ marginBottom: '3rem' }}>ELIGE EL NIVEL DE TU PROYECTO</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          {/* PLAN 1: Landing Page */}
          <TechCard title="Landing Page Express" variant="cyan">
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '1rem' }}>
              $80.000 <span style={{ fontSize: '1rem', color: '#888' }}>/ único</span>
            </div>
            <p style={{ marginBottom: '1.5rem' }}>Ideal para promocionar un producto o servicio específico rápidamente.</p>
            <ul style={{ listStyle: 'none', padding: 0, color: '#a0a0b0', lineHeight: '2' }}>
              <li>✅ Diseño de 1 sola página</li>
              <li>✅ Botones a WhatsApp</li>
              <li>✅ Formulario de Contacto</li>
              <li>✅ Adaptable a Celular</li>
            </ul>
            
            {/* BOTÓN WHATSAPP DINÁMICO */}
            <a 
              href="https://wa.me/56958547236?text=Hola%20Nico,%20me%20interesa%20la%20Landing%20Page%20de%20$80.000"
              target="_blank"
              className="btn-hire"
            >
              Lo quiero ⚡
            </a>
          </TechCard>

          {/* PLAN 2: Web Corporativa */}
          <TechCard title="Web Corporativa" variant="purple">
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '1rem' }}>
              $150.000 <span style={{ fontSize: '1rem', color: '#888' }}>/ único</span>
            </div>
            <p style={{ marginBottom: '1.5rem' }}>Para empresas que necesitan mostrar servicios y trayectoria.</p>
            <ul style={{ listStyle: 'none', padding: 0, color: '#a0a0b0', lineHeight: '2' }}>
              <li>✅ Hasta 5 Secciones</li>
              <li>✅ Galería de Fotos</li>
              <li>✅ Mapa de Ubicación</li>
              <li>✅ Hosting Gratis 1 año</li>
            </ul>

            {/* BOTÓN CON MENSAJE DISTINTO */}
            <a 
              href="https://wa.me/56958547236?text=Hola%20Nico,%20me%20interesa%20la%20Web%20Corporativa%20de%20$150.000"
              target="_blank"
              className="btn-hire purple"
            >
              Contratar 🚀
            </a>
          </TechCard>

          {/* PLAN 3: E-Commerce */}
          <TechCard title="Tienda Online Full" variant="cyan">
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '1rem' }}>
              $250.000+
            </div>
            <p style={{ marginBottom: '1.5rem' }}>Vende tus productos con carrito y panel de administración.</p>
            <ul style={{ listStyle: 'none', padding: 0, color: '#a0a0b0', lineHeight: '2' }}>
              <li>✅ Catálogo y Carrito</li>
              <li>✅ Panel de Administración</li>
              <li>✅ Pasarela de Pagos</li>
              <li>✅ Capacitación de uso</li>
            </ul>

            <a 
              href="https://wa.me/56958547236?text=Hola%20Nico,%20quiero%20cotizar%20una%20Tienda%20Online"
              target="_blank"
              className="btn-hire cyan"
            >
              Cotizar ahora 🛒
            </a>
          </TechCard>

        </div>
        
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <a href="/nicodev/" style={{ color: '#00f3ff', textDecoration: 'none', fontSize: '1.1rem' }}>⬅ Volver al Inicio</a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WebDev;