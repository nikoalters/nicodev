import './Contact.css';
import TechCard from './TechCard';

const Contact = () => {
  return (
    <section id="contacto" className="contact-section">
      <h2 className="section-title">Hablemos</h2>
      <p className="subtitle">¿TIENES UN PROYECTO O TU PC NECESITA AYUDA?</p>
      
      <div className="contact-container">
        <TechCard className="contact-card">
          <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: '#e2e8f0' }}>
            Estoy disponible para trabajos freelance de desarrollo y soporte técnico en Santiago.
          </p>

          <div className="contact-actions">
            {/* Botón WhatsApp */}
            <a 
              href="https://wa.me/56958547236" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-whatsapp"
            >
              <span style={{ marginRight: '8px', fontSize: '1.2rem' }}>📱</span>
              +56 9 5854 7236
            </a>

            {/* Botón Email */}
            <a 
              href="mailto:niko.alters@gmail.com" 
              className="btn-email"
            >
              <span style={{ marginRight: '8px', fontSize: '1.2rem' }}>✉️</span>
              niko.alters@gmail.com
            </a>
          </div>
        </TechCard>
      </div>
    </section>
  );
};

export default Contact;