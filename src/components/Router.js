import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Rockets from './Rockets';
import Missions from './Missions';
import MyProfile from './MyProfile';
import Errorpage from './Errorpage';
import styles from '../styles/Navbar.module.css';

function RouterNav() {
  return (
    <>
      <BrowserRouter className={styles.div}>
        <Routes>
          <Route exact path="/" element={<Rockets />} />
          <Route exact path="missions" element={<Missions />} />
          <Route path="myProfile" element={<MyProfile />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </>

  );
}

export default RouterNav;
