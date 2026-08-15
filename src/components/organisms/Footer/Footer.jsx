import React from 'react';
import './Footer.css';
import logo from '../../../assets/logo.svg';

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="footer-subtitle">FullStack - UX/UI Designer - Illustrator</div>
      </div>
      <div className="footer-copy">© 2026 Alleks. Todos los derechos reservados</div>
      <div className="footer-follow">
        <span>Sígueme</span>
        <div className="footer-socials">
          <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in" aria-hidden="true"></i></a>
          <a href="#" aria-label="GitHub"><i className="fa-brands fa-github" aria-hidden="true"></i></a>
          <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram" aria-hidden="true"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
