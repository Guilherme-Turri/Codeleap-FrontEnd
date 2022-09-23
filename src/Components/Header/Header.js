import React from 'react';
import User from '../User/User';
import styles from './Header.module.css';
import Logout from '../Logout/Logout';
import GoHome from '../Gohome/GoHome';

const Header = () => {
  return (
    <header className={styles.container}>
      <h1>Codeleap Network</h1>
      <nav className={styles.actions}>
        <GoHome />
        <User />
        <Logout />
      </nav>
    </header>
  );
};

export default Header;
