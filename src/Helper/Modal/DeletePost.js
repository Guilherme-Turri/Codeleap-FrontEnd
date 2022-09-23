import React from 'react';
import { useDispatch } from 'react-redux';
import del from '../../assets/delete.svg';
import { openModalDelete } from '../../store/modalDelete';
import styles from './DeletePost.module.css';

const DeletePost = ({ id }) => {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(openModalDelete(id));
  }
  return (
    <div className={styles.delete} onClick={handleDelete}>
      <img src={del} alt="Delete Post" />
    </div>
  );
};

export default DeletePost;
