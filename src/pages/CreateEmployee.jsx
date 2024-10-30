import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee, clearEmployee } from '../features/user/userSlice';
import EmployeeForm from '../components/EmployeeForm';
import TitleHeader from '../components/TitleHeader';
import Modal from 'success-modal_react';

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
    <div className='container'>
      <TitleHeader title="Create Employee" />
      <EmployeeForm onSubmit={handleFormSubmit} />
     
        <Modal
      onSubmit={handleFormSubmit}
        isDisplayed={modalIsDisplayed}
        onCloseModal={() => setModalIsDisplayed(false)}
        content={
          <div id="confirmation" className="modal">
            <p className="modal-text">Employé créé avec succès !</p>
            <p className="modal-subtext">Cliquez sur la croix pour fermer.</p>
          </div>
        }
      />
    </div>
  );
};

export default CreateEmployee;
