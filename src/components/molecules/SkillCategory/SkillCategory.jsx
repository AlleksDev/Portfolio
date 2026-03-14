import SkillIcon from '../../atoms/SkillIcon/SkillIcon';
import './SkillCategory.css';

function SkillCategory({ title, icon, items, type = 'icons' }) {
  return (
    <div className="skill-category">
      <h3 className="skill-category__title">
        <span className="skill-category__icon">{icon}</span>
        {title}
      </h3>
      {type === 'icons' ? (
        <div className="skill-category__grid">
          {items.map((item, index) => (
            <SkillIcon key={index} name={item.name} icon={item.icon} level={item.level} />
          ))}
        </div>
      ) : (
        <div className="skill-category__cards">
          {items.map((item, index) => (
            <div key={index} className="skill-category__card">
              <div className="skill-category__card-header">
                <span className="skill-category__card-number">{String(index + 1).padStart(2, '0')}</span>
                <h4 className="skill-category__card-title">{item.name}</h4>
              </div>
              <p className="skill-category__card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SkillCategory;
