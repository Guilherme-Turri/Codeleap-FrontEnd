import React from 'react';
import styles from './Message.module.css';

const Message = ({ msg }) => {
  return <p className={styles.message}>{msg}</p>;
};

export default Message;
