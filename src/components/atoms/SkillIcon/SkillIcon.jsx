import './SkillIcon.css';

function SkillIcon({ name, icon, level }) {
  const levelClass = level
    ? `skill-icon__level--${level.toLowerCase()}`
    : '';

  return (
    <div className="skill-icon">
      <div className="skill-icon__image-wrapper">
        <img src={icon} alt={name} className="skill-icon__image" loading="lazy" />
        <span className="skill-icon__name">{name}</span>
        {level && (
          <span className={`skill-icon__level ${levelClass}`}>{level}</span>
        )}
      </div>
    </div>
  );
}

export default SkillIcon;
