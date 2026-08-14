import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const ambientBlobs = [
    { id: 'blob-a', className: 'hero-blob hero-blob--amber' },
    { id: 'blob-b', className: 'hero-blob hero-blob--gold' },
    { id: 'blob-c', className: 'hero-blob hero-blob--soft' },
  ];

  const particles = [
    { id: 1, style: { '--x': '10%', '--y': '18%', '--dx1': '8vw', '--dy1': '-5vh', '--dx2': '14vw', '--dy2': '8vh', '--size': '4px', '--duration': '22s', '--delay': '-2s' } },
    { id: 2, style: { '--x': '18%', '--y': '68%', '--dx1': '6vw', '--dy1': '4vh', '--dx2': '12vw', '--dy2': '-7vh', '--size': '3px', '--duration': '26s', '--delay': '-11s' } },
    { id: 3, style: { '--x': '32%', '--y': '24%', '--dx1': '9vw', '--dy1': '6vh', '--dx2': '16vw', '--dy2': '-4vh', '--size': '5px', '--duration': '30s', '--delay': '-8s' } },
    { id: 4, style: { '--x': '45%', '--y': '74%', '--dx1': '7vw', '--dy1': '-6vh', '--dx2': '11vw', '--dy2': '5vh', '--size': '3px', '--duration': '24s', '--delay': '-16s' } },
    { id: 5, style: { '--x': '58%', '--y': '16%', '--dx1': '10vw', '--dy1': '5vh', '--dx2': '15vw', '--dy2': '-6vh', '--size': '4px', '--duration': '28s', '--delay': '-6s' } },
    { id: 6, style: { '--x': '66%', '--y': '58%', '--dx1': '7vw', '--dy1': '-4vh', '--dx2': '13vw', '--dy2': '6vh', '--size': '3px', '--duration': '32s', '--delay': '-19s' } },
    { id: 7, style: { '--x': '74%', '--y': '30%', '--dx1': '8vw', '--dy1': '7vh', '--dx2': '12vw', '--dy2': '-5vh', '--size': '4px', '--duration': '25s', '--delay': '-13s' } },
    { id: 8, style: { '--x': '82%', '--y': '76%', '--dx1': '6vw', '--dy1': '-5vh', '--dx2': '10vw', '--dy2': '4vh', '--size': '3px', '--duration': '29s', '--delay': '-4s' } },
    { id: 9, style: { '--x': '88%', '--y': '20%', '--dx1': '5vw', '--dy1': '4vh', '--dx2': '9vw', '--dy2': '-6vh', '--size': '2px', '--duration': '34s', '--delay': '-21s' } },
    { id: 10, style: { '--x': '38%', '--y': '52%', '--dx1': '8vw', '--dy1': '-3vh', '--dx2': '13vw', '--dy2': '7vh', '--size': '2px', '--duration': '27s', '--delay': '-9s' } },
  ];

  return (
    <>
      <section id="hero">
        <div className="hero-ambient" aria-hidden="true">
          {ambientBlobs.map((blob) => (
            <div key={blob.id} className={blob.className} />
          ))}
        </div>
        <div className="hero-particles" aria-hidden="true">
          {particles.map((particle) => (
            <span key={particle.id} className="hero-particle" style={particle.style} />
          ))}
        </div>
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title">CÓDIGO<br /><span>+</span> <span>DISEÑO</span> </h1>
            <p className="hero-desc">Construyo experiencias digitales, busco la excelencia del código y el diseño, de la arquitectura a la gráfica</p>
            <div className="hero-actions">
              <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="btn-primary">CONTACTAME</a>
              <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="btn-outline">MI EXPERIENCIA</a>
            </div>
            <div className="hero-socials">
              <a href="#" aria-label="X / Twitter"><i className="fa-brands fa-x-twitter" aria-hidden="true"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in" aria-hidden="true"></i></a>
              <a href="#" aria-label="GitHub"><i className="fa-brands fa-github" aria-hidden="true"></i></a>
              <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram" aria-hidden="true"></i></a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-orbit-card">
              <div className="hero-orbit-ring hero-orbit-ring--outer" />
              <div className="hero-orbit-ring hero-orbit-ring--inner" />
              <span className="hero-network-line hero-network-line--one" />
              <span className="hero-network-line hero-network-line--two" />
              <span className="hero-network-line hero-network-line--three" />
              <span className="hero-network-node hero-network-node--one" />
              <span className="hero-network-node hero-network-node--two" />
              <span className="hero-network-node hero-network-node--three" />
              <span className="hero-network-node hero-network-node--four" />
              <span className="hero-network-core">A</span>
            </div>
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
