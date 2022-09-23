import React from 'react';
import styles from './Logout.module.css';
import exit from '../../assets/exit.svg';
import { useDispatch } from 'react-redux';
import { setUnlogged } from '../../store/loginUser';

const Logout = () => {
  const dispatch = useDispatch();

  function logOut() {
    window.localStorage.removeItem('token');
    dispatch(setUnlogged());
  }
  return (
    <button className={styles.button} onClick={logOut}>
      <img src={exit} alt="LogOut" />
    </button>
  );
};

export default Logout;
