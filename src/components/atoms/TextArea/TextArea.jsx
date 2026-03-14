import './TextArea.css';

function TextArea({ label, placeholder, name, rows = 6, required = false }) {
  return (
    <div className="textarea-group">
      {label && <label className="textarea-group__label" htmlFor={name}>{label}</label>}
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        rows={rows}
        className="textarea-group__field"
        required={required}
      />
    </div>
  );
}

export default TextArea;
