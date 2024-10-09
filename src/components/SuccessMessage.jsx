import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'thra-basic-modal-react';
import { hideSuccessMessage } from '../features/user/userSlice';

const SuccessMessage = () => {
  const dispatch = useDispatch();
  const visible = useSelector((state) => state.user.successMessage);

  const handleCloseModal = () => {
    dispatch(hideSuccessMessage());
  };

  return (
    <Modal
      isDisplayed={visible}
      onCloseModal={handleCloseModal}
      content={
        <div id="confirmation" className="modal">
          <p>Employé créé avec succès !</p>
          <p>Cliquez sur 'X' pour fermer cette modale.</p>
        </div>
      }
    />
  );
};

export default SuccessMessage;
