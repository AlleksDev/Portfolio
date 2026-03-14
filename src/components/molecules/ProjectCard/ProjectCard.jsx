import { useNavigate } from 'react-router-dom';
import { getProjectImageUrl, getProjectPlaceholder } from '../../../utils/imageLoader';
import './ProjectCard.css';

function ProjectCard({ project }) {
  const navigate = useNavigate();
  const imageUrl = getProjectImageUrl(project);
  const placeholderColor = getProjectPlaceholder(project);

  const handleClick = () => {
    navigate(`/project/${project.id}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  };

  return (
    <div 
      className="project-card" 
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      style={!imageUrl ? { backgroundColor: placeholderColor } : {}}
    >
      <div className="project-card__image-wrapper">
        {/* Estructura lista para imagen - sin cargar imagen aún */}
        {imageUrl && (
          <img 
            src={imageUrl} 
            alt={project.title} 
            className="project-card__image"
            loading="lazy"
          />
        )}
        <div className="project-card__overlay">
          <div className="project-card__content">
            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__desc">{project.shortDescription}</p>
            <button 
              className="project-card__cta"
              type="button"
              aria-label={`Ver detalles de ${project.title}`}
            >
              Ver proyecto →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
