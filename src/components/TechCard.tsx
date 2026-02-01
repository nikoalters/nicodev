import { type ReactNode, type CSSProperties } from 'react'; // <--- 1. Corregimos el import
import './TechCard.css';

interface TechCardProps {
  children: ReactNode;
  title?: string;
  className?: string;
  style?: CSSProperties; // <--- 2. Aceptamos estilos personalizados (como el maxWidth)
}

const TechCard = ({ children, title, className = "", style }: TechCardProps) => {
  return (
    // 3. Pasamos el estilo al div
    <div className={`tech-card-container ${className}`} style={style}> 
      <div className="glow-line"></div>
      
      {title && <h3 className="tech-card-title">{title}</h3>}
      
      <div className="tech-card-content">
        {children}
      </div>
    </div>
  );
};

export default TechCard;