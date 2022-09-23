import React from 'react';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderBar}></div>
    </div>
  );
};

export default Loading;
