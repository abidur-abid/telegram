import React from 'react';
import Header from '../shared components/Header';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared components/Navbar';

const MobileLayout = () => {
    return (
        <>
          <Header/>
          <Navbar/>
          <Outlet/>  
        </>
    );
};

export default MobileLayout;