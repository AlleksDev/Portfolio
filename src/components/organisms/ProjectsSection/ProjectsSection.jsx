import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProjectsSection.css';
import { webProjects, mobileProjects, illustrationProjects } from '../../../data/projects';
import { getProjectImageUrl } from '../../../utils/imageLoader';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('web');
  const [hoveredCardId, setHoveredCardId] = useState(null);

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

  const displayedProjects = getProjects();
  
  return (
    <section id="projects" className="reveal">
      <div className="section-inner">
      <div className="section-header">
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
          const isMobile = proj.type === 'mobile';

          return (
            <Link
              to={`/project/${proj.id}`}
              className={`project-card ${isMobile ? 'project-card--mobile' : ''} ${hoveredCardId === proj.id ? 'hovered' : hoveredCardId !== null ? 'unhovered' : ''}`}
              key={proj.id}
              onMouseEnter={() => setHoveredCardId(proj.id)}
              onMouseLeave={() => setHoveredCardId(null)}
              onFocus={() => setHoveredCardId(proj.id)}
              onBlur={() => setHoveredCardId(null)}
              data-main-tag={proj.mainTag}
              aria-label={`Ver proyecto ${proj.title}`}
            >
              {isMobile ? (
                <div className="project-head-mobile" aria-hidden="true">
                  <span className="mobile-header-badge">
                    <i className="fa-brands fa-android"></i> Android
                  </span>
                  <div className="mobile-header-status">
                    <i className="fa-solid fa-wifi"></i>
                    <i className="fa-solid fa-battery-full"></i>
                  </div>
                </div>
              ) : (
                <div className="project-head-link" aria-hidden="true">
                  <span>about</span><span>learn</span><span>portfolio</span><span>blog</span><span>contact</span>
                </div>
              )}
              <div className={`project-img ${isMobile ? 'project-img--mobile' : ''}`}>
                {previewImage ? (
                  isMobile ? (
                    <div className="mobile-preview-stage">
                      <div className="mobile-card-mockup">
                        <div className="mobile-card-notch">
                          <div className="mobile-card-notch-cam"></div>
                        </div>
                        <div className="mobile-card-screen">
                          <img
                            src={previewImage}
                            alt={proj.title}
                            loading="lazy"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              const fallback = e.target.closest('.project-img')?.querySelector('.project-img-placeholder');
                              if (fallback) fallback.style.display = 'flex';
                            }}
                          />
                        </div>
                        <div className="mobile-card-home-bar"></div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={previewImage}
                      alt={proj.title}
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const fallback = e.target.parentElement.querySelector('.project-img-placeholder');
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                  )
                ) : null}
                <div
                  className="project-img-placeholder"
                  style={{ display: previewImage ? 'none' : 'flex' }}
                >
                  <i className={`fa-solid ${proj.type === 'mobile' ? 'fa-mobile-screen-button' : proj.type === 'illustration' ? 'fa-pen-nib' : 'fa-laptop-code'}`}></i>
                  <span>Próximamente más capturas</span>
                </div>
              </div>
              <div className="project-info">
                <div className="project-tags">
                  {proj.tags.map( tag => <span key={tag} className="project-tag">{tag}</span>)}
                </div>
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.shortDescription || proj.description}</p>
              </div>
            </Link>
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
