import React from 'react';
import styles from './Skeleton.module.css';

const Skeleton = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.skeleton}></div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.skeleton}></div>
      </div>
    </>
  );
};

export default Skeleton;
