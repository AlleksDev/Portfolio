import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectsSection.css';
import { webProjects, mobileProjects, illustrationProjects } from '../../../data/projects';
import { getProjectImageUrl } from '../../../utils/imageLoader';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('web');
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const navigate = useNavigate();

  const getProjects = () => {
    switch (activeFilter) {
      case 'mobile':
        return mobileProjects;
      case 'illustration':
        return illustrationProjects;
      default:
        return webProjects;
    }
  };

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  const handleProjectKeyDown = (event, projectId) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleProjectClick(projectId);
    }
  };

  const displayedProjects = getProjects();
  
  return (
    <section id="projects" className="reveal">
      <div className="section-inner">
      <div className="section-header">
        <div className="section-dot"></div>
        <h2 className="section-title">PROYECTOS</h2>
      </div>
      <div className="projects-filters">
        <button
          className={`proj-filter ${activeFilter === 'web' ? 'active' : ''}`}
          onClick={() => setActiveFilter('web')}
          aria-pressed={activeFilter === 'web'}
        >
          <i className="fa-solid fa-globe"></i> APLICACIONES WEB
        </button>
        <button
          className={`proj-filter ${activeFilter === 'mobile' ? 'active' : ''}`}
          onClick={() => setActiveFilter('mobile')}
          aria-pressed={activeFilter === 'mobile'}
        >
          <i className="fa-brands fa-android"></i> APLICACIONES ANDROID
        </button>
        <button
          className={`proj-filter ${activeFilter === 'illustration' ? 'active' : ''}`}
          onClick={() => setActiveFilter('illustration')}
          aria-pressed={activeFilter === 'illustration'}
        >
          <i className="fa-solid fa-pen-nib"></i> ILUSTRACIONES
        </button>
      </div>
      <div className="projects-grid" key={activeFilter}>
        {displayedProjects.map((proj) => {
          const previewImage = (proj.images && proj.images[0]) || getProjectImageUrl(proj);

          return (
            <article
              className={`project-card ${hoveredCardId === proj.id ? 'hovered' : hoveredCardId !== null ? 'unhovered' : ''}`}
              key={proj.id}
              onClick={() => handleProjectClick(proj.id)}
              onKeyDown={(event) => handleProjectKeyDown(event, proj.id)}
              onMouseEnter={() => setHoveredCardId(proj.id)}
              onMouseLeave={() => setHoveredCardId(null)}
              onFocus={() => setHoveredCardId(proj.id)}
              onBlur={() => setHoveredCardId(null)}
              role="link"
              tabIndex="0"
              data-main-tag={proj.mainTag}
              aria-label={`Ver proyecto ${proj.title}`}
            >
              <div className="project-head-link">
                <span>about</span><span>learn</span><span>portfolio</span><span>blog</span><span>contact</span>
              </div>
              <div className="project-img">
                {previewImage && (
                  <img src={previewImage} alt={proj.title} />
                )}
              </div>
              <div className="project-info">
                <div className="project-tags">
                  {proj.tags.map( tag => <span key={tag} className="project-tag">{tag}</span>)}
                </div>
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.shortDescription || proj.description}</p>
              </div>
            </article>
          );
        })}
        <div className="project-card projects-more">
          <h3>MÁS PROYECTOS PRONTO...</h3>
          <p>Sigo desarrollando más proyectos.<br/>También puedes ver contribuciones menores en mi GitHub</p>
        </div>
      </div>
      
      </div>
    </section>
  );
};

export default ProjectsSection;
