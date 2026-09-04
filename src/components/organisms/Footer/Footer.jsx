import React from 'react';
import './Footer.css';
import logo from '../../../assets/logo.svg';
import { useToast } from '../../../context/ToastContext';

const Footer = () => {
  const { showToast } = useToast();

  const handleUnavailableLink = (e, platform) => {
    e.preventDefault();
    showToast(`El enlace a ${platform} no está disponible por ahora.`, 'info');
  };

  return (
    <footer>
      <div>
        <div className="footer-logo">
          <img src={logo} alt="Logo de Alleks" />
        </div>
        <div className="footer-subtitle">FullStack - UX/UI Designer - Illustrator</div>
      </div>
      <div className="footer-copy">© 2026 Alleks. Todos los derechos reservados</div>
      <div className="footer-follow">
        <span>Sígueme</span>
        <div className="footer-socials">
          <a href="#linkedin" onClick={(e) => handleUnavailableLink(e, 'LinkedIn')} aria-label="LinkedIn (no disponible)">
            <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
          </a>
          <a href="https://github.com/AlleksDev" target="_blank" rel="noopener noreferrer" aria-label="GitHub de AlleksDev">
            <i className="fa-brands fa-github" aria-hidden="true"></i>
          </a>
          <a href="#instagram" onClick={(e) => handleUnavailableLink(e, 'Instagram')} aria-label="Instagram (no disponible)">
            <i className="fa-brands fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
