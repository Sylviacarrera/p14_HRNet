

const FormSubmit = ({ onSubmit }) => {
  return (
    <div className="form-submit">
      <button type="submit" onClick={onSubmit}>
        Save
      </button>
    </div>
  );
};

export default FormSubmit;
