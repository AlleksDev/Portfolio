import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "../../templates/MainLayout/MainLayout";
import Button from "../../atoms/Button/Button";
import projects from "../../../data/projects";
import "./ProjectDetailPage.css";

function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return (
      <MainLayout>
        <div className="project-detail__not-found">
          <h2>Proyecto no encontrado</h2>
          <Button onClick={() => navigate("/")}>Volver al inicio</Button>
        </div>
      </MainLayout>
    );
  }

  const hasImages = project.images && project.images.length > 0;

  const handlePrevImage = () => {
    if (!hasImages) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    if (!hasImages) return;
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <MainLayout>
      <div className="project-detail">
        <div className="project-detail__container">
          <div className="project-detail__grid">
            <div className="project-detail__info">
              <button
                className="project-detail__back"
                onClick={() => navigate("/")}
              >
                <i className="fa-solid fa-arrow-left"></i> Volver
              </button>
              <div className="project-detail__title-wrapper">
                <h1 className="project-detail__title">{project.title}</h1>
                {project.mainTag && (
                  <span className="project-detail__main-tag">{project.mainTag}</span>
                )}
              </div>

              {project.tags && (
                <div className="project-detail__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-detail__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <p className="project-detail__desc">{project.description}</p>

              <h2 className="project-detail__subtitle">Problemática</h2>
              <p className="project-detail__desc">{project.problem}</p>

              <h2 className="project-detail__subtitle">Mi participación</h2>
              <p className="project-detail__desc">{project.myJob}</p>

              {project.mainFeatures && (
                <div className="project-detail__features-section">
                  <h2 className="project-detail__subtitle">Características principales</h2>

                  <ul className="project-detail__features-list">
                    {project.mainFeatures.map((feature, i) => (
                      <li key={i} className="project-detail__feature-item">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="project-detail__right">
              <div className="project-detail__preview">
                <div className="project-detail__browser-bar">
                  <span className="project-detail__browser-dot project-detail__browser-dot--red" />
                  <span className="project-detail__browser-dot project-detail__browser-dot--yellow" />
                  <span className="project-detail__browser-dot project-detail__browser-dot--green" />
                </div>
                <div className="project-detail__image-container">
                  {!hasImages ? (
                    <span className="project-detail__coming-soon">¡Próximamente más imágenes!</span>
                  ) : (
                    <>
                      <div className="project-detail__carousel-inner">
                        {project.images.length > 1 && (
                          <button 
                            className="project-detail__carousel-btn project-detail__carousel-btn--prev" 
                            onClick={handlePrevImage}
                            aria-label="Imagen anterior"
                          >
                            <i className="fa-solid fa-chevron-left"></i>
                          </button>
                        )}
                        
                        <div className="project-detail__images-track">
                          {project.images.map((img, idx) => (
                            <img
                              key={idx}
                              src={img}
                              alt={`${project.title} - imagen ${idx + 1}`}
                              className={`project-detail__screenshot ${idx === currentImageIndex ? 'project-detail__screenshot--active' : ''}`}
                            />
                          ))}
                        </div>

                        {project.images.length > 1 && (
                          <button 
                            className="project-detail__carousel-btn project-detail__carousel-btn--next" 
                            onClick={handleNextImage}
                            aria-label="Siguiente imagen"
                          >
                            <i className="fa-solid fa-chevron-right"></i>
                          </button>
                        )}
                      </div>
                      
                      {project.images.length > 1 && (
                        <div className="project-detail__carousel-dots">
                          {project.images.map((_, idx) => (
                            <button
                              key={idx}
                              className={`project-detail__carousel-dot ${idx === currentImageIndex ? 'project-detail__carousel-dot--active' : ''}`}
                              onClick={() => setCurrentImageIndex(idx)}
                              aria-label={`Ir a imagen ${idx + 1}`}
                            />
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
              <div className="project-detail__cta">
                <Button
                  variant="primary"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  Ir al repositorio
                </Button>
                <Button
                  variant="primary"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  Ir al proyecto
                </Button>
              </div>

              <div className="project-detail__tech-section">
                <h3 className="project-detail__tech-title">
                  Tecnologías utilizadas
                </h3>
                <div className="project-detail__tech-icons">
                  {project.technologies.map((tech, i) => (
                    <div key={i} className="project-detail__tech-badge">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="project-detail__tech-icon"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          if (e.target.parentElement) {
                            const fallback = document.createElement('i');
                            fallback.className = 'fa-regular fa-circle-dot project-detail__tech-icon-fallback';
                            e.target.parentElement.insertBefore(fallback, e.target.nextSibling);
                          }
                        }}
                      />
                      <span className="project-detail__tech-name">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="project-detail__tech-section">
                <h3 className="project-detail__tech-title">
                  Patrones y tecnologías aplicadas
                </h3>
                <div className="project-detail__tech-icons">
                  {project.designPatterns.map((pattern, i) => (
                    <div key={i} className="project-detail__tech-badge">
                      <span className="project-detail__tech-name">{pattern.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default ProjectDetailPage;
