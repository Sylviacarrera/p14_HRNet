import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee, clearEmployee, showSuccessMessage } from '../features/user/userSlice';
import EmployeeForm from '../components/EmployeeForm';
import TitleHeader from '../components/TitleHeader';

const CreateEmployee = () => {
  const dispatch = useDispatch();
  const employee = useSelector((state) => state.user);

  const handleFormSubmit = () => {
    // Ajouter l'employé à la liste
    dispatch(addEmployee(employee));

    // Récupérer les employés existants depuis le localStorage
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];

    // Ajouter le nouvel employé à la liste
    const updatedEmployees = [...storedEmployees, employee];

    // Mettre à jour le localStorage
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));

    // Afficher un message de succès
    dispatch(showSuccessMessage());

    // Réinitialiser le formulaire
    dispatch(clearEmployee());
  };

  return (
    <div className="container">
      <TitleHeader title="Create Employee" />
      <EmployeeForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default CreateEmployee;
