import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  startDate: '',
  street: '',
  city: '',
  state: '',
  zipCode: '',
  department: '',
  successMessage: false,  // État pour afficher ou non le message de succès
  states: [
    { value: 'AL', label: 'Alabama' },
    { value: 'NY', label: 'New York' },
    { value: 'CA', label: 'California' },
    { value: 'TX', label: 'Texas' },
  ],
  departments: [
    { value: 'sales', label: 'Sales' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'legal', label: 'Legal' },
  ]
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmployeeField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    clearEmployee: (state) => {
      return initialState;
    },
    showSuccessMessage: (state) => {
      state.successMessage = true;  // Met successMessage à true
    },
    hideSuccessMessage: (state) => {
      state.successMessage = false;  // Met successMessage à false après 3 secondes
    }
  }
});

export const { setEmployeeField, clearEmployee, showSuccessMessage, hideSuccessMessage } = userSlice.actions;
export default userSlice.reducer;
