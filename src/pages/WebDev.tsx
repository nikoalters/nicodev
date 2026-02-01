import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TechCard from '../components/TechCard';
import { useEffect } from 'react';

const WebDev = () => {
  // Esto hace que al entrar a la página, aparezcas arriba del todo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="portfolio-container">
      <Navbar />
      
      <main style={{ padding: '6rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 className="section-title">Planes Web & Apps</h1>
        <p className="subtitle" style={{ marginBottom: '3rem' }}>ELIGE EL NIVEL DE TU PROYECTO</p>

        {/* Grilla de Precios */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          {/* PLAN 1: Landing Page */}
          <TechCard title="Landing Page Express">
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '1rem' }}>
              $80.000 <span style={{ fontSize: '1rem', color: '#888' }}>/ pago único</span>
            </div>
            <p style={{ marginBottom: '1.5rem' }}>Ideal para promocionar un producto o servicio específico rápidamente.</p>
            <ul style={{ listStyle: 'none', padding: 0, color: '#a0a0b0', lineHeight: '2' }}>
              <li>✅ Diseño de 1 sola página (Scroll)</li>
              <li>✅ Botones a WhatsApp</li>
              <li>✅ Formulario de Contacto</li>
              <li>✅ Diseño adaptable a celular</li>
              <li>❌ Sin carrito de compras</li>
            </ul>
          </TechCard>

          {/* PLAN 2: Web Corporativa */}
          <TechCard title="Web Corporativa" style={{ borderColor: '#bd00ff', boxShadow: '0 0 20px rgba(189,0,255,0.1)' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '1rem' }}>
              $150.000 <span style={{ fontSize: '1rem', color: '#888' }}>/ pago único</span>
            </div>
            <p style={{ marginBottom: '1.5rem' }}>Para empresas que necesitan mostrar servicios, galería y trayectoria.</p>
            <ul style={{ listStyle: 'none', padding: 0, color: '#a0a0b0', lineHeight: '2' }}>
              <li>✅ Hasta 5 Secciones (Inicio, Nosotros, etc)</li>
              <li>✅ Galería de Fotos</li>
              <li>✅ Mapa de Ubicación</li>
              <li>✅ Enlace a Redes Sociales</li>
              <li>✅ Hosting Gratis por 1 año</li>
            </ul>
          </TechCard>

          {/* PLAN 3: E-Commerce */}
          <TechCard title="Tienda Online Full">
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '1rem' }}>
              $250.000+
            </div>
            <p style={{ marginBottom: '1.5rem' }}>Vende tus productos con carrito de compras y panel de administración.</p>
            <ul style={{ listStyle: 'none', padding: 0, color: '#a0a0b0', lineHeight: '2' }}>
              <li>✅ Catálogo de Productos</li>
              <li>✅ Carrito de Compras</li>
              <li>✅ Panel para subir productos tú mismo</li>
              <li>✅ Pasarela de Pagos (Webpay/MercadoPago)</li>
              <li>✅ Capacitación de uso</li>
            </ul>
          </TechCard>

        </div>
        
        {/* Botón Volver */}
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <a href="/nicodev/" style={{ color: '#00f3ff', textDecoration: 'none', fontSize: '1.1rem' }}>⬅ Volver al Inicio</a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WebDev;