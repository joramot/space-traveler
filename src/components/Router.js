import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

function RouterNav() {
  return (
    <>
      <BrowserRouter className="app-container">
        <Navbar />
      </BrowserRouter>
    </>

  );
}

export default RouterNav;
