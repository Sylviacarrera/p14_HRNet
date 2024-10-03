
import { useDispatch, useSelector } from 'react-redux';
import { setEmployeeField, clearEmployee } from '../features/user/userSlice';
import InputField from './InputField';
import SelectField from './SelectField';
import DatePickerField from './DatePickerField';

const EmployeeForm = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const employee = useSelector((state) => state.user);
  const states = useSelector((state) => state.user.states);
  const departments = useSelector((state) => state.user.departments);

  const handleInputChange = (field, value) => {
    dispatch(setEmployeeField({ field, value }));
  };

  const handleSave = (event) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit();  // Tu peux passer une fonction onSubmit via les props pour des actions spécifiques
    }
    alert('Employee saved successfully!');
    dispatch(clearEmployee());
  };

  return (
    <form onSubmit={handleSave}>
      <InputField
        label="First Name"
        id="firstName"
        value={employee.firstName}
        onChange={(value) => handleInputChange('firstName', value)}
      />
      <InputField
        label="Last Name"
        id="lastName"
        value={employee.lastName}
        onChange={(value) => handleInputChange('lastName', value)}
      />
      <DatePickerField
        label="Date of Birth"
        id="dateOfBirth"
        selectedDate={employee.dateOfBirth}
        onChange={(date) => handleInputChange('dateOfBirth', date)}
      />
      <DatePickerField
        label="Start Date"
        id="startDate"
        selectedDate={employee.startDate}
        onChange={(date) => handleInputChange('startDate', date)}
      />

      <fieldset className="address">
        <legend>Address</legend>
        <InputField
          label="Street"
          id="street"
          value={employee.street}
          onChange={(value) => handleInputChange('street', value)}
        />
        <InputField
          label="City"
          id="city"
          value={employee.city}
          onChange={(value) => handleInputChange('city', value)}
        />
        <SelectField
          label="State"
          id="state"
          options={states}
          value={employee.state}
          onChange={(value) => handleInputChange('state', value)}
        />
        <InputField
          label="Zip Code"
          id="zipCode"
          type="number"
          value={employee.zipCode}
          onChange={(value) => handleInputChange('zipCode', value)}
        />
      </fieldset>

      <SelectField
        label="Department"
        id="department"
        options={departments}
        value={employee.department}
        onChange={(value) => handleInputChange('department', value)}
      />

      <button type="submit">Save</button>
    </form>
  );
};

export default EmployeeForm;
