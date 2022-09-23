import React from 'react';
import styles from './TextArea.module.css';
const TextArea = ({ placeholder, rows, onChange, value }) => {
  return (
    <textarea
      className={styles.input}
      rows={rows}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    ></textarea>
  );
};

export default TextArea;
