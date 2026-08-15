import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../assets/logo.svg';

const navItems = [
  { id: 'about', label: 'SOBRE MÍ' },
  { id: 'skills', label: 'HABILIDADES' },
  { id: 'experience', label: 'EXPERIENCIA' },
  { id: 'projects', label: 'PROYECTOS' },
  { id: 'contact', label: 'CONTACTO' },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light');
  const [themeFeedback, setThemeFeedback] = useState(null);

  useEffect(() => {
    const handleScrollState = () => {
      const hero = document.getElementById('hero');
      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom;
        setIsScrolled(heroBottom <= 70);
      } else {
        setIsScrolled(window.scrollY > 20);
      }
    };

    handleScrollState();
    window.addEventListener('scroll', handleScrollState, { passive: true });
    window.addEventListener('resize', handleScrollState, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScrollState);
      window.removeEventListener('resize', handleScrollState);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    if (!themeFeedback) return;
    const timer = setTimeout(() => setThemeFeedback(null), 2200);
    return () => clearTimeout(timer);
  }, [themeFeedback]);

  const handleScroll = (event, id) => {
    event.preventDefault();
    setIsMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = (event) => {
    event.preventDefault();
    setIsMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    setThemeFeedback(nextTheme === 'dark' ? 'Modo Oscuro' : 'Modo Claro');
    try {
      localStorage.setItem('portfolio-theme', nextTheme);
    } catch {
      // El tema sigue funcionando durante la sesión si el almacenamiento está bloqueado.
    }
  };

  return (
    <nav className={`site-nav ${isScrolled ? 'is-scrolled' : ''}`} aria-label="Navegación principal">
      <div className="nav-inner">
        <a href="/" onClick={scrollToTop} className="nav-logo" aria-label="Alleks, volver al inicio">
          <img className="nav-logo__image" src={logo} alt="Logo de Alleks" />
        </a>

        <ul id="primary-navigation" className={`nav-links ${isMenuOpen ? 'is-open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={(event) => handleScroll(event, item.id)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <div className="theme-toggle-wrapper">
            {themeFeedback && (
              <span className="theme-toast" role="status" aria-live="polite">
                {themeFeedback === 'Modo Oscuro' ? 'Modo Oscuro' : 'Modo Claro'}
              </span>
            )}
            <button
              type="button"
              className={`theme-toggle theme-toggle--${theme}`}
              onClick={toggleTheme}
              aria-label={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
              title={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
            >
              <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} aria-hidden="true" />
            </button>
          </div>

          <button
            type="button"
            className={`nav-toggle ${isMenuOpen ? 'is-open' : ''}`}
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
