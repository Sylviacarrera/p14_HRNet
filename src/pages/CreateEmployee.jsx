import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee, clearEmployee } from '../features/user/userSlice';
import EmployeeForm from '../components/EmployeeForm';
import ModalSuccessMessage from '../components/SuccessMessage';
import TitleHeader from '../components/TitleHeader';

const CreateEmployee = () => {
  const dispatch = useDispatch();
  const employee = useSelector((state) => state.user);
  const [modalIsDisplayed, setModalIsDisplayed] = useState(false);

  const handleFormSubmit = () => {
    dispatch(addEmployee(employee));
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    const updatedEmployees = [...storedEmployees, employee];
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));

    // Afficher le message de succès
    setModalIsDisplayed(true);

    // Réinitialiser le formulaire
    dispatch(clearEmployee());
  };

  return (
    <div className="container">
      <TitleHeader title="Create Employee" />
      <EmployeeForm onSubmit={handleFormSubmit} />
      
      {/* Modale de succès */}
      <ModalSuccessMessage
    isDisplayed={modalIsDisplayed}
    onClose={() => setModalIsDisplayed(false)}
    message="Employé créé avec succès !"
    />
    </div>
  );
};

export default CreateEmployee;
