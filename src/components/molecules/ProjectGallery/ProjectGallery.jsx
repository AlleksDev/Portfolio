import React, { useState, useEffect, useCallback, useRef } from "react";
import "./ProjectGallery.css";

const ProjectGallery = React.memo(function ProjectGallery({
  images = [],
  title = "Proyecto",
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionTimeoutRef = useRef(null);

  const numImages = images.length;
  const hasImages = numImages > 0;

  // Reset index when images prop changes (e.g., navigating to another project)
  useEffect(() => {
    setCurrentIndex(0);
    setPrevIndex(null);
    setIsTransitioning(false);
  }, [images]);

  // Preload next and previous images to ensure instant, flicker-free transitions
  useEffect(() => {
    if (numImages <= 1) return;

    const indicesToPreload = [
      (currentIndex + 1) % numImages,
      (currentIndex - 1 + numImages) % numImages,
      (currentIndex + 2) % numImages,
    ];

    indicesToPreload.forEach((idx) => {
      const src = images[idx];
      if (src) {
        const img = new Image();
        img.src = src;
      }
    });
  }, [currentIndex, images, numImages]);

  const changeImage = useCallback((newIndex) => {
    if (newIndex === currentIndex || numImages <= 1) return;

    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }

    setPrevIndex(currentIndex);
    setCurrentIndex(newIndex);
    setIsTransitioning(true);

    transitionTimeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
      setPrevIndex(null);
      transitionTimeoutRef.current = null;
    }, 380);
  }, [currentIndex, numImages]);

  const handlePrevImage = useCallback(() => {
    if (numImages <= 1) return;
    const nextIdx = currentIndex === 0 ? numImages - 1 : currentIndex - 1;
    changeImage(nextIdx);
  }, [currentIndex, numImages, changeImage]);

  const handleNextImage = useCallback(() => {
    if (numImages <= 1) return;
    const nextIdx = currentIndex === numImages - 1 ? 0 : currentIndex + 1;
    changeImage(nextIdx);
  }, [currentIndex, numImages, changeImage]);

  // Keyboard navigation (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (numImages <= 1) return;
      if (e.key === "ArrowLeft") {
        handlePrevImage();
      } else if (e.key === "ArrowRight") {
        handleNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [numImages, handlePrevImage, handleNextImage]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="project-gallery">
      <div className="project-gallery__browser-bar">
        <div className="project-gallery__browser-dots">
          <span className="project-gallery__browser-dot project-gallery__browser-dot--red" />
          <span className="project-gallery__browser-dot project-gallery__browser-dot--yellow" />
          <span className="project-gallery__browser-dot project-gallery__browser-dot--green" />
        </div>
        {hasImages && numImages > 1 && (
          <span className="project-gallery__counter">
            {currentIndex + 1} / {numImages}
          </span>
        )}
      </div>

      <div className="project-gallery__container">
        {!hasImages ? (
          <div className="project-gallery__coming-soon">
            <i className="fa-solid fa-images"></i>
            <h3>Próximamente más capturas</h3>
            <p>Documentación visual de este proyecto en preparación.</p>
          </div>
        ) : (
          <>
            <div className="project-gallery__carousel-inner">
              {numImages > 1 && (
                <button
                  type="button"
                  className="project-gallery__carousel-btn project-gallery__carousel-btn--prev"
                  onClick={handlePrevImage}
                  aria-label="Imagen anterior"
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
              )}

              <div className="project-gallery__image-wrapper">
                {/* Outgoing image during smooth crossfade */}
                {isTransitioning && prevIndex !== null && images[prevIndex] && (
                  <img
                    src={images[prevIndex]}
                    alt=""
                    aria-hidden="true"
                    className="project-gallery__screenshot project-gallery__screenshot--outgoing"
                  />
                )}

                {/* Current active image */}
                <img
                  src={images[currentIndex]}
                  alt={`${title} - captura ${currentIndex + 1}`}
                  className={`project-gallery__screenshot ${
                    isTransitioning
                      ? "project-gallery__screenshot--entering"
                      : "project-gallery__screenshot--active"
                  }`}
                  loading="eager"
                />
              </div>

              {numImages > 1 && (
                <button
                  type="button"
                  className="project-gallery__carousel-btn project-gallery__carousel-btn--next"
                  onClick={handleNextImage}
                  aria-label="Siguiente imagen"
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              )}
            </div>

            {numImages > 1 && (
              <div className="project-gallery__dots">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`project-gallery__dot ${
                      idx === currentIndex
                        ? "project-gallery__dot--active"
                        : ""
                    }`}
                    onClick={() => changeImage(idx)}
                    aria-label={`Ir a captura ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
});

export default ProjectGallery;
