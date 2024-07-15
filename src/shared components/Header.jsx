// Import necessary libraries and components from React and react-icons
import React, { useState } from 'react';
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { GoSearch } from "react-icons/go";

// Define the Header functional component
const Header = () => {
    // Initialize state to track if the sidebar is open or closed
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Function to toggle the sidebar open/close state
    const handleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        // Define the header element with a class of 'mobileHeader'
        <header className='mobileHeader'> 
            <div className="mobileHeaderContainer">
                <div className="mobileHeaderRow">
                    {/* Button to toggle sidebar; displays a menu icon if sidebar is closed, or a close icon if sidebar is open */}
                    <button onClick={handleSidebar}>
                        {isSidebarOpen ? <AiOutlineClose /> : <HiMenu />}
                    </button>
                    {/* Placeholder for header title */}
                    <div>Telegram</div>
                </div>
                {/* Search icon */}
                <div><GoSearch /></div>
            </div>
        </header>
    );
};

// Export the Header component as the default export
export default Header;
