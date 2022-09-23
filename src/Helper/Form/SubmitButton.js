import React from 'react';
import styles from './SubmitButton.module.css';

const SubmitButton = ({ loading, ...props }) => {
  const values = Object.values(props).every((e) => e.length > 0);
  //if (!values) document.getElementsByName('submit').disabled = true;
  return (
    <input
      className={!loading && values ? styles.button : styles.disabled}
      type="submit"
      value="Submit"
      name="submit"
    />
  );
};

export default SubmitButton;
