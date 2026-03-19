import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../assets/logo.svg';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (e, id) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <a href="/" onClick={scrollToTop} className="nav-logo">
        <img src={logo} alt="Logo" />
      </a>
      <ul className="nav-links">
        <li><a href="#about" onClick={(e) => handleScroll(e, 'about')}>SOBRE MÍ</a></li>
        <li><a href="#skills" onClick={(e) => handleScroll(e, 'skills')}>HABILIDADES</a></li>
        <li><a href="#experience" onClick={(e) => handleScroll(e, 'experience')}>EXPERIENCIA</a></li>
        <li><a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>PROYECTOS</a></li>
        <li><a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>CONTACTO</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
