import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Crear partículas aleatorias para las estrellas fugaces
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: Math.random() * 8,
    duration: 4 + Math.random() * 4,
    top: Math.random() * 70 + 10,
  }));

  return (
    <>
      <div className="particles-container">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>
      <section id="hero">
        <div className="hero-inner">
          <h1 className="hero-title">CÓDIGO<br/><span>+</span> <span>DISEÑO</span> </h1>
          <p className="hero-desc">Construyo experiencias digitales, busco la excelencia del código y el diseño, de la arquitectura a la gráfica</p>
          <div className="hero-actions">
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="btn-primary">CONTACTAME</a>
            <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="btn-outline">MI EXPERIENCIA</a>
          </div>
          <div className="hero-socials">
            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#"><i className="fa-brands fa-github"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-content">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <div className="marquee-item">UI/UX DESIGN <div className="dot-separator"></div></div>
              <div className="marquee-item">FRONTEND <div className="dot-separator"></div></div>
              <div className="marquee-item">BACKEND <div className="dot-separator"></div></div>
              <div className="marquee-item">ILLUSTRATION <div className="dot-separator"></div></div>
              <div className="marquee-item">IOT <div className="dot-separator"></div></div>
              <div className="marquee-item">3D MODELING <div className="dot-separator"></div></div>
              <div className="marquee-item">CLEAN ARCHITECTURE <div className="dot-separator"></div></div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
