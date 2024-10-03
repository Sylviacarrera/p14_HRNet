
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerField = ({ label, id, selectedDate, onChange }) => {
  // Convertir l'objet `Date` en chaîne ISO lorsqu'une nouvelle date est sélectionnée
  const handleDateChange = (date) => {
    const serializedDate = date ? date.toISOString() : '';  // Conversion en chaîne ISO
    onChange(serializedDate);  // Appelle la fonction onChange avec la date sérialisée
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <DatePicker
        id={id}
        selected={selectedDate ? new Date(selectedDate) : null}  // Reconvertir en objet `Date` pour l'affichage
        onChange={handleDateChange}  // Appeler handleDateChange pour la sérialisation
        dateFormat="dd/MM/yyyy"
        required
      />
    </div>
  );
};

export default DatePickerField;
