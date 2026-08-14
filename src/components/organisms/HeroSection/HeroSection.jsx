import './HeroSection.css';

const HeroSection = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById(id)?.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <>
      <section id="hero">
        <div className="hero-ambient" aria-hidden="true">
          <div className="hero-blob hero-blob--red" />
          <div className="hero-blob hero-blob--teal" />
        </div>

        <div className="hero-system" aria-hidden="true">
          <span className="hero-system-axis hero-system-axis--horizontal" />
          <span className="hero-system-axis hero-system-axis--vertical" />
          <span className="hero-system-ring hero-system-ring--outer" />
          <span className="hero-system-ring hero-system-ring--middle" />
          <span className="hero-system-ring hero-system-ring--inner" />
          <span className="hero-system-connector hero-system-connector--one" />
          <span className="hero-system-connector hero-system-connector--two" />
          <span className="hero-system-connector hero-system-connector--three" />
          <span className="hero-system-node hero-system-node--one" />
          <span className="hero-system-node hero-system-node--two" />
          <span className="hero-system-node hero-system-node--three" />
          <span className="hero-system-node hero-system-node--four" />
          <span className="hero-system-node hero-system-node--five" />
          <span className="hero-system-core">A</span>
        </div>

        <div className="hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title" aria-label="Código más diseño">
              <span className="hero-title-line hero-title-line--code">
                <span className="hero-title-word" data-word="CÓDIGO">CÓDIGO</span>
              </span>
              <span className="hero-title-line hero-title-line--design">
                <span className="hero-title-plus" aria-hidden="true">+</span>
                <span className="hero-title-word" data-word="DISEÑO">DISEÑO</span>
              </span>
            </h1>

            <div className="hero-support">
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
          </div>
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-content">
          {[...Array(2)].map((_, i) => (
            <div className="marquee-sequence" aria-hidden={i === 1 ? 'true' : undefined} key={i}>
              <div className="marquee-item">UI/UX DESIGN <div className="dot-separator"></div></div>
              <div className="marquee-item">FRONTEND <div className="dot-separator"></div></div>
              <div className="marquee-item">BACKEND <div className="dot-separator"></div></div>
              <div className="marquee-item">ILLUSTRATION <div className="dot-separator"></div></div>
              <div className="marquee-item">IOT <div className="dot-separator"></div></div>
              <div className="marquee-item">3D MODELING <div className="dot-separator"></div></div>
              <div className="marquee-item">CLEAN ARCHITECTURE <div className="dot-separator"></div></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
