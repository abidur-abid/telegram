import React from 'react';
import Main from './Main';
import { Outlet } from 'react-router-dom';
import Header from '../shared components/Header';
import Navbar from '../shared components/Navbar';
import ChatComponent from '../components/ChatComponent';

const DesktopLayout = () => {
    return (
        <section className='hidden lg:inline'>
            <div className='px-5 py-5 h-screen overflow-hidden '>
            <div className='flex justify-start items-start gap-10 h-full'>
                <div className='w-2/6 h-full overflow-y-auto'>
                    <Header />
                    <Navbar />
                    <ChatComponent />
                </div>
                <div className='w-4/6 h-full overflow-y-auto'>
                    <Outlet />
                </div>
            </div>
        </div>
        </section>
    );
};

export default DesktopLayout;
