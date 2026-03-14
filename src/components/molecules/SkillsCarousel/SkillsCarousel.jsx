import './SkillsCarousel.css';

function SkillsCarousel() {
  const skills = [
    'UX/UI DESIGN',
    'FRONTEND',
    'BACKEND',
    'ILLUSTRATION',
    'IOT',
    '3D MODELING',
    'CLEAN ARCHITECTURE',
  ];

  return (
    <div className="skills-carousel">
      <div className="skills-carousel__track">
        {/* Renderizar dos veces para efecto infinito suave */}
        {[...Array(2)].map((_, setIndex) =>
          skills.map((skill, index) => (
            <div key={`${setIndex}-${index}`} className="skills-carousel__item">
              <span>{skill}</span>
              <span className="skills-carousel__dot">•</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default SkillsCarousel;
