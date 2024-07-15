// Import necessary libraries and components from React and react-icons
import React, { useState } from 'react';
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import Sidebar from './Sidebar';

// Define the Header functional component
const Header = () => {
    // Initialize state to track if the sidebar is open or closed
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Function to toggle the sidebar open/close state
    const handleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        // Define the header element with relative positioning and high z-index
        <header className="relative z-10">
            {/* Flex container for the header content */}
            <div className='flex justify-between items-center p-4 '>
                {/* Flex container for the menu button and title */}
                <div className='flex justify-center items-center gap-5'>
                    {/* Button to toggle sidebar; displays a menu icon if sidebar is closed, or a close icon if sidebar is open */}
                    <button onClick={handleSidebar}>
                        {isSidebarOpen ? <AiOutlineClose /> : <HiMenu />}
                    </button>
                    {/* Title of the header */}
                    <div className="ml-2">Telegram</div>
                </div>
                {/* Search icon */}
                <div className='searchIcon'><GoSearch /></div>
            </div>
            {/* Sidebar component with its visibility controlled by isSidebarOpen state */}
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        </header>
    );
};

// Export the Header component as the default export
export default Header;
