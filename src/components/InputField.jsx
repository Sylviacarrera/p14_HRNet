import '../styles/InputField.scss';

const InputField = ({ label, id, type = "text", value, onChange }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
  );
};

export default InputField;
