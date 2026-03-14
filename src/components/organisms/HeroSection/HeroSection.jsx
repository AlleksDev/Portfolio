import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
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
