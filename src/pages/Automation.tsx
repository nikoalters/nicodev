import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TechCard from '../components/TechCard';
import { useEffect } from 'react';

const Automation = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="portfolio-container">
      <Navbar />
      
      <main style={{ padding: '6rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 className="section-title">Domótica & IoT</h1>
        <p className="subtitle" style={{ marginBottom: '3rem' }}>TU CASA INTELIGENTE, CONTROLADA POR VOZ</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          {/* PACK 1: LUCES */}
          <TechCard title="Pack Iluminación Led">
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '1rem' }}>
              $45.000 <span style={{ fontSize: '1rem', color: '#888' }}>/ instalación</span>
            </div>
            <p style={{ marginBottom: '1.5rem' }}>Dale vida a tu setup o habitación con luces controladas por voz.</p>
            <ul style={{ listStyle: 'none', padding: 0, color: '#a0a0b0', lineHeight: '2' }}>
              <li>✅ Tira LED RGB (5 metros)</li>
              <li>✅ Controlador WiFi (ESP32)</li>
              <li>✅ Integración con Google Home / Alexa</li>
              <li>✅ Control desde el celular (App)</li>
              <li>✅ Efectos audiorítmicos</li>
                      </ul>
                      <a 
  href="https://wa.me/56958547236?text=Hola,%20necesito%20un%20Formateo%20de%20PC"
  target="_blank"
  className="btn-hire"
>
  pedir kit
</a>  
          </TechCard>

          {/* PACK 2: PERSIANAS (Tu proyecto estrella) */}
          <TechCard title="Motorización Persianas" style={{ borderColor: '#00f3ff', boxShadow: '0 0 20px rgba(0, 243, 255, 0.15)' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '1rem' }}>
              $65.000 <span style={{ fontSize: '1rem', color: '#888' }}>/ unidad</span>
            </div>
            <p style={{ marginBottom: '1.5rem' }}>Automatiza tus cortinas roller existentes sin cambiarlas.</p>
            <ul style={{ listStyle: 'none', padding: 0, color: '#a0a0b0', lineHeight: '2' }}>
              <li>✅ Motor de alto torque (Kit Adaptable)</li>
              <li>✅ Programación de horarios (se abren solas)</li>
              <li>✅ "Hey Google, cierra la cortina"</li>
              <li>✅ Instalación oculta y estética</li>
              <li>✅ Incluye configuración de red</li>
              </ul>
              <a 
  href="https://wa.me/56958547236?text=Hola,%20necesito%20un%20Formateo%20de%20PC"
  target="_blank"
  className="btn-hire"
>
  pedir kit
</a>          
          </TechCard>

          {/* PACK 3: CEREBRO HOGAR */}
          <TechCard title="Hub Central Google Nest">
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '1rem' }}>
              Cotizar
            </div>
            <p style={{ marginBottom: '1.5rem' }}>Instalación del cerebro central para controlar toda la casa.</p>
            <ul style={{ listStyle: 'none', padding: 0, color: '#a0a0b0', lineHeight: '2' }}>
              <li>✅ Instalación Google Nest Hub / Mini</li>
              <li>✅ Vinculación de cuentas (Spotify, Netflix)</li>
              <li>✅ Creación de Rutinas ("Modo Cine", "Buenos días")</li>
              <li>✅ Capacitación de uso</li>
              </ul>
              <a 
  href="https://wa.me/56958547236?text=Hola,%20necesito%20un%20Formateo%20de%20PC"
  target="_blank"
  className="btn-hire"
>
  pedir kit
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

export default Automation;