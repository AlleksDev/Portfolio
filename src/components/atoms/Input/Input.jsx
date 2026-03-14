import './Input.css';

function Input({ label, type = 'text', placeholder, name, required = false }) {
  return (
    <div className="input-group">
      {label && <label className="input-group__label" htmlFor={name}>{label}</label>}
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className="input-group__field"
        required={required}
      />
    </div>
  );
}

export default Input;
