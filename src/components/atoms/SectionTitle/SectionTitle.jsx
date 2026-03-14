import './SectionTitle.css';

function SectionTitle({ children, light = false }) {
  return (
    <h2 className={`section-title ${light ? 'section-title--light' : ''}`}>
      {children}
    </h2>
  );
}

export default SectionTitle;
