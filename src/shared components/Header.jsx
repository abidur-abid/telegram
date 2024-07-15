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
        <header className="relative z-10">
            <div className='flex justify-between items-center p-4 '>
                <div className=' flex justify-center items-center gap-5'>
                    <button onClick={handleSidebar}>
                        {isSidebarOpen ? <AiOutlineClose /> : <HiMenu />}
                    </button>
                    <div className="ml-2">Telegram</div>
                </div>
                <div className='searchIcon'><GoSearch /></div>
            </div>
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        </header>
    );
};

export default Header;
