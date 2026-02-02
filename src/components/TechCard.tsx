import { type ReactNode, type CSSProperties } from 'react';
import './TechCard.css';

interface TechCardProps {
  children: ReactNode;
  title?: ReactNode;
  className?: string;
  style?: CSSProperties;
  variant?: 'cyan' | 'purple' | 'green'; 
}

const TechCard = ({ children, title, className = "", style, variant = 'cyan' }: TechCardProps) => {
 
  const colorClass = `card-${variant}`;

  return (
    <div className={`tech-card-container ${colorClass} ${className}`} style={style}>
      
     
      <div className="tech-card-inner">
        {title && <h3 className="tech-card-title">{title}</h3>}
        
        <div className="tech-card-content">
          {children}
        </div>
      </div>

    </div>
  );
};

export default TechCard;