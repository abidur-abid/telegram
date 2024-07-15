import React, { useState } from 'react';
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { GoSearch } from "react-icons/go";

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const handleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }
    return (
        <header className='mobileHeader'> 
            <div className="mobileHeaderContainer">
                <div className="mobileHeaderRow">
                    <button onClick={handleSidebar}>
                        {isSidebarOpen ? <AiOutlineClose /> : <HiMenu />}
                    </button>
                    <div>Telegram</div>
                </div>
                <div><GoSearch /></div>
            </div>
        </header>
    );
};

export default Header;