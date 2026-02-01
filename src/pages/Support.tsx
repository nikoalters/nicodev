import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TechCard from '../components/TechCard';
import { useEffect } from 'react';

const Support = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="portfolio-container">
      <Navbar />
      <main style={{ padding: '6rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 className="section-title">Soporte Técnico</h1>
        <p className="subtitle" style={{ marginBottom: '3rem' }}>MANTENIMIENTO Y SOFTWARE</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          {/* CARD 1: FORMATEO (Color CIAN) */}
          <TechCard title="Formateo Completo" variant="cyan">
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff', marginBottom: '1rem' }}>$20.000</div>
            <p style={{ marginBottom: '1.5rem' }}>Dejar tu PC como nuevo, rápido y limpio.</p>
            <ul style={{ listStyle: 'none', padding: 0, color: '#a0a0b0', lineHeight: '1.8' }}>
              <li>✅ Instalación de Windows 10/11</li>
              <li>✅ Respaldo de archivos (hasta 20GB)</li>
              <li>✅ Instalación de Drivers</li>
              <li>✅ Antivirus Básico</li>
            </ul>
            
            {/* BOTÓN 1 */}
            <a 
              href="https://wa.me/56958547236?text=Hola%20Nico,%20necesito%20formatear%20mi%20PC"
              target="_blank"
              className="btn-hire"
            >
              Agendar 🛠️
            </a>
          </TechCard>

          {/* CARD 2: OFFICE (Color PÚRPURA) */}
          <TechCard title="Pack Office 365" variant="purple">
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff', marginBottom: '1rem' }}>$15.000</div>
            <p style={{ marginBottom: '1.5rem' }}>Licencia permanente y programas listos.</p>
            <ul style={{ listStyle: 'none', padding: 0, color: '#a0a0b0', lineHeight: '1.8' }}>
              <li>✅ Word, Excel, PowerPoint</li>
              <li>✅ Licencia activada de por vida</li>
              <li>✅ Soporte remoto incluido</li>
              <li>✅ Instalación en 30 min</li>
            </ul>

            {/* BOTÓN 2 (Con estilo purple) */}
            <a 
              href="https://wa.me/56958547236?text=Hola%20Nico,%20quiero%20instalar%20Office%20365"
              target="_blank"
              className="btn-hire purple"
            >
              Instalar Ahora 📄
            </a>
          </TechCard>

        </div>
        
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <a href="/nicodev/" style={{ color: '#00f3ff', textDecoration: 'none' }}>⬅ Volver al Inicio</a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;