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
          <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="#"><i className="fa-brands fa-github"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
