import React from 'react';
import ScreenDelete from '../../Helper/Modal/ScreenDelete';
import ScreenEdit from '../../Helper/Modal/ScreenEdit';
import Feed from '../Feed/Feed';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import MyProfile from '../MyProfile.js/MyProfile';
import SeeProfile from '../SeeProfile/SeeProfile';
import styles from './Home.module.css';

const Home = () => {
  const { modalDelete } = useSelector((state) => state.modalDelete);
  const { modalEdit } = useSelector((state) => state.modalEdit);

  return (
    <div className={styles.content}>
      {modalDelete && <ScreenDelete />}
      {modalEdit && <ScreenEdit />}
      <Header />
      <main className={styles.appBody}>
        <Routes>
          <Route path="/" element={<Feed />}></Route>
          <Route path="/myprofile" element={<MyProfile />}></Route>
          <Route path="/profile/:id" element={<SeeProfile />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Home;