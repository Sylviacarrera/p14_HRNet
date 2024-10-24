import React from 'react';
import '../styles/SuccessMessage.scss'; 
import { ModalSuccessMessage } from 'modal-success-message';

const ModalSuccessMessage = ({ isDisplayed, onClose, message }) => {
  // Fonction pour fermer la modale
  const handleOverlayClick = (e) => {
    if (e.target.className.includes('modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className={`modal-overlay ${isDisplayed ? 'show' : ''}`} onClick={handleOverlayClick}>
      <div className="modal-content">
        <div className="modal-header">
          <span className="modal-close-icon" onClick={onClose}>✖</span> {/* Croix pour fermer */}
        </div>
        <p className="modal-message">{message}</p>
      </div>
    </div>
  );
};

export default ModalSuccessMessage;