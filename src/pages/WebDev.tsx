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
        <p className="subtitle" style={{ marginBottom: '3rem' }}>TU MARCA Y TU WEB, TODO EN UNO</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          {/* PLAN 1: Landing Page (Precio subido de 80k a 100k) */}
          <TechCard title="Landing Page + Logo" variant="cyan">
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '1rem' }}>
              $100.000 <span style={{ fontSize: '1rem', color: '#888' }}>/ único</span>
            </div>
            <p style={{ marginBottom: '1.5rem' }}>Ideal para promocionar un producto o servicio específico rápidamente.</p>
            <ul style={{ listStyle: 'none', padding: 0, color: '#a0a0b0', lineHeight: '2' }}>
              <li style={{ color: '#00f3ff', fontWeight: 'bold' }}>🎨 Diseño de Logo Básico incluido</li>
              <li>✅ Diseño de 1 sola página (Scroll)</li>
              <li>✅ Botones a WhatsApp</li>
              <li>✅ Formulario de Contacto</li>
              <li>✅ Adaptable a Celular</li>
            </ul>
            
            <a 
              href="https://wa.me/56958547236?text=Hola%20Nico,%20me%20interesa%20el%20Plan%20Landing%20+%20Logo%20de%20$100.000"
              target="_blank"
              className="btn-hire"
            >
              Lo quiero ⚡
            </a>
          </TechCard>

          {/* PLAN 2: Web Corporativa (Precio subido de 150k a 180k) */}
          <TechCard title="Web Corporativa PRO" variant="purple">
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '1rem' }}>
              $180.000 <span style={{ fontSize: '1rem', color: '#888' }}>/ único</span>
            </div>
            <p style={{ marginBottom: '1.5rem' }}>Para empresas que necesitan mostrar servicios y una imagen profesional.</p>
            <ul style={{ listStyle: 'none', padding: 0, color: '#a0a0b0', lineHeight: '2' }}>
              <li style={{ color: '#bd00ff', fontWeight: 'bold' }}>🎨 Diseño de Logo Profesional</li>
              <li>✅ Hasta 5 Secciones</li>
              <li>✅ Galería de Fotos</li>
              <li>✅ Mapa de Ubicación</li>
              <li>✅ Hosting Gratis 1 año</li>
            </ul>

            <a 
              href="https://wa.me/56958547236?text=Hola%20Nico,%20me%20interesa%20la%20Web%20Corporativa%20PRO%20de%20$180.000"
              target="_blank"
              className="btn-hire purple"
            >
              Contratar 🚀
            </a>
          </TechCard>

          {/* PLAN 3: E-Commerce (Precio base subido de 250k a 300k) */}
          <TechCard title="Tienda Online Full Brand" variant="cyan">
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '1rem' }}>
              $300.000+
            </div>
            <p style={{ marginBottom: '1.5rem' }}>Vende tus productos con carrito, panel y una marca sólida.</p>
            <ul style={{ listStyle: 'none', padding: 0, color: '#a0a0b0', lineHeight: '2' }}>
              <li style={{ color: '#00f3ff', fontWeight: 'bold' }}>🎨 Branding Completo (Logo + Manual)</li>
              <li>✅ Catálogo y Carrito de Compras</li>
              <li>✅ Panel de Administración</li>
              <li>✅ Pasarela de Pagos</li>
              <li>✅ Capacitación de uso</li>
            </ul>

            <a 
              href="https://wa.me/56958547236?text=Hola%20Nico,%20quiero%20cotizar%20una%20Tienda%20Online%20con%20Branding"
              target="_blank"
              className="btn-hire"
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