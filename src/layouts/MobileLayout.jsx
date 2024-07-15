import React from 'react';
import Header from '../shared components/Header';
import { Outlet } from 'react-router-dom';

const MobileLayout = () => {
    return (
        <>
          <Header/>
          <Outlet/>  
        </>
    );
};

export default MobileLayout;