import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './User.module.css';
import profile from '../../assets/profile.svg';

const User = () => {
  const navigate = useNavigate();
  function myProfile() {
    navigate('myprofile');
  }

  return (
    <div>
      <button className={styles.button} onClick={myProfile}>
        <img src={profile} alt="Home" />
      </button>
    </div>
  );
};

export default User;
