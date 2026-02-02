import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="tech-footer">
      <div className="footer-content">
        
       
        <div className="footer-brand">
          <span className="neon-text">NICODEV_</span>
          <p className="footer-tagline">Code. Create. Innovate.</p>
        </div>

  
        <div className="footer-links">
        
          <a href="https://github.com" target="_blank" rel="noreferrer" className="tech-link">
            GITHUB
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="tech-link">
            LINKEDIN
          </a>
          <a href="mailto:contacto@nicodev.com" className="tech-link">
            EMAIL
          </a>
        </div>

      
        <div className="footer-copyright">
          <p>
            © {currentYear} Nico Soto. 
            <span className="dimmed"> Built with React & Vite.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;