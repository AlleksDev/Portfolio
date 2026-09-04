import React, { useState } from 'react';
import './ContactSection.css';
import { useToast } from '../../../context/ToastContext';

const ContactSection = () => {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    const field = id.replace('contact-', '');
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleUnavailableLink = (e, platform) => {
    e.preventDefault();
    showToast(`El perfil de ${platform} no está disponible por ahora.`, 'info');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToast('Por favor completa todos los campos requeridos.', 'error');
      return;
    }

    setIsSubmitting(true);

    // Simular envío de formulario asíncrono seguro
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      showToast('¡Mensaje enviado con éxito! Te responderé pronto.', 'success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="reveal">
      <div className="section-inner">
        <div className="section-header">
          <h2 className="section-title">CONTACTO</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-left">
            <h3 className="contact-title">TRABAJEMOS<span>JUNTOS</span></h3>
            <p className="contact-desc">
              ¿Tienes un proyecto en mente o buscas a un desarrollador que integre diseño UX/UI de calidad con un Front-End estructurado? Me encantaría escucharte y convertir esa idea en un producto funcional y estético. Hablemos y llevemos tu visión al siguiente nivel.
            </p>
            <div className="contact-info">
              <a href="tel:+529613873172" className="contact-info-link" aria-label="Llamar al 961 387 3172">
                <i className="fa-solid fa-phone" aria-hidden="true" /> 961 387 3172
              </a>
              <a href="mailto:aimr2910@gmail.com" className="contact-info-link" aria-label="Enviar correo a aimr2910@gmail.com">
                <i className="fa-solid fa-envelope" aria-hidden="true" /> aimr2910@gmail.com
              </a>
            </div>
            <div className="contact-status" aria-label="Estado actual de disponibilidad">
              Disponible ahora
            </div>
            <div className="contact-socials">
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

          {isSubmitted ? (
            <div className="contact-success-card" role="status" aria-live="polite">
              <div className="success-icon-wrapper">
                <i className="fa-solid fa-circle-check" aria-hidden="true" />
              </div>
              <h3>¡Mensaje Recibido!</h3>
              <p>Gracias por escribirme. He recibido tus datos y te responderé lo más pronto posible a tu correo.</p>
              <button
                type="button"
                className="btn-submit"
                onClick={() => setIsSubmitted(false)}
              >
                ENVIAR OTRO MENSAJE
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Nombre *</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Escribe aquí tu nombre"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Correo electrónico *</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="ejemplo@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="contact-subject">Asunto</label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Pon un asunto"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">Mensaje *</label>
                <textarea
                  id="contact-message"
                  required
                  placeholder="Escribe aquí el mensaje que deseas enviar"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <div className="buttons-group">
                <button
                  type="submit"
                  className="btn-submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin" aria-hidden="true" style={{ marginRight: '0.5rem' }} />
                      ENVIANDO...
                    </>
                  ) : (
                    'ENVIAR MENSAJE'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
