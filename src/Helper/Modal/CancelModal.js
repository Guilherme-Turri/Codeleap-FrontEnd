import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalDelete } from '../../store/modalDelete';
import { closeModalEdit } from '../../store/modalEdit';

import styles from './CancelModal.module.css';

const CancelModal = ({ text }) => {
  const { modalDelete } = useSelector((state) => state.modalDelete);
  const dispatch = useDispatch();

  function handleCancel() {
    if (modalDelete) {
      dispatch(closeModalDelete());
    } else {
      dispatch(closeModalEdit());
    }
  }

  return (
    <button className={styles.button} onClick={handleCancel}>
      {text}
    </button>
  );
};

export default CancelModal;
