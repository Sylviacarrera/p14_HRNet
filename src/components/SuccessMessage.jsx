
import '../styles/SuccessMessage.scss';

const SuccessMessage = ({ message }) => {
    console.log('Rendering SuccessMessage:', message);  // Ajoute ce log pour vérifier
    return (
      <div className="success-message">
        <p>{message}</p>
      </div>
    );
  };
  
  export default SuccessMessage;