import React from 'react';
import styles from './Input.module.css';

const Input = ({ type, placeholder, onChange, value }) => {
  return (
    <input
      className={styles.input}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default Input;
