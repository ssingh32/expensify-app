import React from 'react';
import Modal from 'react-modal';

const RemoveExpenseModal = (props) => (
  <Modal
  isOpen={props.modalOpen}
  onRequestClose={props.clearSelectedOption}
  contentLabel="Remove Expense"
  className="modal"
  closeTimeoutMS={200}
  className="modal"
  >
  <h3 className="modal__title">Are You Sure?</h3>
  <div className="modal__button">
    <button className="button" onClick={props.onRemove}>Yes</button>
    <button className="button" onClick={props.handleModalOption}>No</button>
  </div>
  </Modal>
);

export default RemoveExpenseModal;