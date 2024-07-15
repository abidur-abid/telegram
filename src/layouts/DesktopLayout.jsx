import React from 'react';
import Main from './Main';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../shared components/Header';
import ChatComponent from '../components/ChatComponent';

const DesktopLayout = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/'; // Adjust this if your home page path is different

    return (
        <section className='hidden lg:inline'>
            <div className=' h-screen overflow-hidden '>
                <div className='flex justify-start items-start h-full'>
                    <div className='w-2/6 h-full overflow-y-auto'>
                        <Header />
                        <ChatComponent />
                    </div>
                    <div className='w-4/6 h-full overflow-y-auto'>
                        {!isHomePage && <Outlet />}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesktopLayout;
