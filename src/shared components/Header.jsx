import React, { useState } from 'react';
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import Sidebar from './Sidebar';

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <header className="sticky top-0 header z-10">
            <div className='relative z-10'>
                <div className='flex justify-between items-center p-4 '>
                    <div className=' flex justify-center items-center gap-5'>
                        <button onClick={handleSidebar} className='text-2xl'>
                            {isSidebarOpen ? <AiOutlineClose /> : <HiMenu />}
                        </button>
                        <div className="ml-2 text-2xl">Telegram</div>
                    </div>
                    <div className=' text-2xl'><GoSearch /></div>
                </div>
                <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            </div>
        </header>
    );
};

export default Header;
