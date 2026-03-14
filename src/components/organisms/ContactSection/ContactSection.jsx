import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="section-header">
        <div className="section-dot"></div>
        <h2 className="section-title">PROYECTOS</h2>
      </div>
      <div className="contact-grid">
        <div className="contact-left">
          <h3 className="contact-title"><span>TRABAJEMOS</span>JUNTOS</h3>
          <p className="contact-desc">
            ¿Tienes un proyecto en mente o buscas a un desarrollador que integre diseño UX/UI de calidad con un Front-End estructurado? Me encantaría escucharte y convertir esa idea en un producto funcional y estético. Hablemos y llevemos tu visión al siguiente nivel.
          </p>
          <div className="contact-info">
            <div>961 387 3172</div>
            <div>aimr2910@gmail.com</div>
          </div>
          <div className="contact-status">
            Disponible ahora
          </div>
          <div className="contact-socials">
            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#"><i className="fa-brands fa-github"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>Nombre</label>
              <input type="text" placeholder="Escribe aquí tu nombre" />
            </div>
            <div className="form-group">
              <label>Correo electrónico</label>
              <input type="email" placeholder="ejemplo@example.com" />
            </div>
          </div>
          <div className="form-group">
            <label>Asunto</label>
            <input type="text" placeholder="Pon un asunto" />
          </div>
          <div className="form-group">
            <label>Mensaje</label>
            <textarea placeholder="Escribe aquí el mensaje que deseas enviar"></textarea>
          </div>
          <button type="button" className="btn-submit">ENVIAR MENSAJE</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
