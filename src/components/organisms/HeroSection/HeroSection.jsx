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
        <div className="hero-backdrop" aria-hidden="true">
          <div className="hero-ambient">
            <div className="hero-blob hero-blob--red" />
            <div className="hero-blob hero-blob--teal" />
          </div>

          <div className="hero-system">
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
        </div>

        <div className="hero-inner">
          <div className="hero-copy">
            <div className="hero-layout">
              <div className="hero-headline">
                <span className="hero-title-line hero-title-line--code" aria-hidden="true">
                  <span className="hero-title-word" data-word="CÓDIGO">CÓDIGO</span>
                </span>
                <span className="hero-title-line hero-title-line--design" aria-hidden="true">
                  <span className="hero-title-plus" aria-hidden="true">+</span>
                  <span className="hero-title-word" data-word="DISEÑO">DISEÑO</span>
                </span>
              </div>

              <div className="hero-support">
                <p className="hero-desc">Construyo experiencias digitales, busco la excelencia del código y el diseño, de la arquitectura a la gráfica</p>
                <div className="hero-actions">
                  <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="btn-primary">CONTACTAME</a>
                  <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="btn-outline">MI EXPERIENCIA</a>
                </div>
                <div className="hero-socials">
                  <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in" aria-hidden="true"></i></a>
                  <a href="#" aria-label="GitHub"><i className="fa-brands fa-github" aria-hidden="true"></i></a>
                  <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="hero-divider" aria-hidden="true">
          <svg
            className="hero-divider-svg"
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              className="hero-divider-fill"
              d="M0,50 C199,72 521,72 720,50 C919,28 1241,28 1440,50 L1440,100 L0,100 Z"
            />
            <path
              className="hero-divider-stroke"
              d="M0,50 C199,72 521,72 720,50 C919,28 1241,28 1440,50"
            />
          </svg>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
