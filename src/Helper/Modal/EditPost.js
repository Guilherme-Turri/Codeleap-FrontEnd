import React from 'react';
import { useDispatch } from 'react-redux';
import edit from '../../assets/edit.svg';
import { openModalEdit } from '../../store/modalEdit';
import styles from './EditPost.module.css';

const EditPost = ({ id }) => {
  const dispatch = useDispatch();

  function handleEdit() {
    dispatch(openModalEdit(id));
  }
  return (
    <div className={styles.edit} onClick={handleEdit}>
      <img src={edit} alt="Delete Post" />
    </div>
  );
};

export default EditPost;
