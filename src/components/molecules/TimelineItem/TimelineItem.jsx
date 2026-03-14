import './TimelineItem.css';

function TimelineItem({ company, period, description, highlighted, isPlaceholder }) {
  if (isPlaceholder) {
    return (
      <div className="timeline-item timeline-item--placeholder">
        <div className="timeline-item__dot" />
        <div className="timeline-item__period">{period}</div>
        <div className="timeline-item__content">
          <h3 className="timeline-item__company">{company}</h3>
        </div>
      </div>
    );
  }

  return (
    <div className={`timeline-item ${highlighted ? 'timeline-item--highlighted' : ''}`}>
      <div className="timeline-item__dot" />
      <div className="timeline-item__period">{period}</div>
      <div className="timeline-item__content">
        <h3 className="timeline-item__company">{company}</h3>
        <p className="timeline-item__description">{description}</p>
      </div>
    </div>
  );
}

export default TimelineItem;
