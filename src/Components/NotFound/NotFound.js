import React from 'react';
import { useNavigate } from 'react-router-dom';
import Head from '../../Helper/Head';
import styles from './NotFound.module.css';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <Head title="Page not Found" />
      <h1>Page Not Found :(</h1>
      <button
        className={styles.button}
        onClick={() => navigate('/home', { replace: true })}
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
