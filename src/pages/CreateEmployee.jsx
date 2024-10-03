import { useSelector, useDispatch } from 'react-redux';
import TitleHeader from '../components/TitleHeader';
import EmployeeForm from '../components/EmployeeForm';
import SuccessMessage from '../components/SuccessMessage';
import { showSuccessMessage, hideSuccessMessage } from '../features/user/userSlice';

const CreateEmployee = () => {
  const dispatch = useDispatch();
  const successMessage = useSelector((state) => state.user.successMessage);  // Accès à l'état Redux

  const handleFormSubmit = () => {
    console.log('Form is being submitted');
    dispatch(showSuccessMessage());  // Dispatch de l'action
    
    // Cache le message de succès après 3 secondes
    setTimeout(() => {
      console.log('Hiding success message');
      dispatch(hideSuccessMessage());
    }, 3000);
  };

  return (
    <div className="container">
      <TitleHeader title="Create Employee" />
      
      {/* Affichage conditionnel du message de succès */}
      {successMessage && <SuccessMessage message="Employé créé !" />}
      
      <EmployeeForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default CreateEmployee;
