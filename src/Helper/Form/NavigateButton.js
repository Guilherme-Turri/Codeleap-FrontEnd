import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NavigateButton.module.css';

const NavigateButton = ({ text, target }) => {
  const navigate = useNavigate();
  function handleClick() {
    navigate(target);
  }
  return (
    <button className={styles.button} onClick={handleClick}>
      {text}
    </button>
  );
};

export default NavigateButton;
