import React from 'react';
import styles from './Gohome.module.css';
import { useNavigate } from 'react-router-dom';
import home from '../../assets/home.svg';

const GoHome = () => {
  const navigate = useNavigate();
  function goHome() {
    navigate('/home');
  }
  return (
    <button className={styles.button} onClick={goHome}>
      <img src={home} alt="Home" />
    </button>
  );
};

export default GoHome;
