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
  successMessage: false,
  employeeList: [], // Liste des employés
  states: [
    { value: 'AL', label: 'Alabama' },
    { value: 'NY', label: 'New York' },
    { value: 'CA', label: 'California' },
    { value: 'TX', label: 'Texas' }
  ],
  departments: [
    { value: 'sales', label: 'Sales' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'legal', label: 'Legal' }
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
      return { 
        ...initialState, 
        employeeList: state.employeeList 
      };
    },
    addEmployee: (state, action) => {
      state.employeeList.push(action.payload);
    },
    setEmployeeList: (state, action) => {
      state.employeeList = action.payload;
    },
    showSuccessMessage: (state) => {
      state.successMessage = true;
    },
    hideSuccessMessage: (state) => {
      state.successMessage = false;
    }
  }
});

export const { 
  setEmployeeField, 
  clearEmployee, 
  addEmployee, 
  setEmployeeList, 
  showSuccessMessage, 
  hideSuccessMessage 
} = userSlice.actions;

export default userSlice.reducer;
