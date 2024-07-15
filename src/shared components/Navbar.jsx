// Import necessary libraries and components from React and react-router-dom
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

// Define the Navbar functional component
const Navbar = () => {
    // Get the current location to determine if the "All" link should be underlined
    const location = useLocation();

    return (
        // Define the nav element with a class of 'navBar'
        <nav className='overflow-x-auto scrollbar-hidden'>
            <div className="navContainer">
                {/* Define NavLink for 'All' with conditional className for always underlined */}
                <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                        isActive || location.pathname === '/' ? 'active link' : 'link'
                    }
                >
                    All
                </NavLink>
                {/* Define NavLink for 'Request' with conditional className for active state */}
                <NavLink 
                    to="/request" 
                    className={({ isActive }) => isActive ? 'active link' : 'link'}
                >
                    Request
                </NavLink>
                {/* Define NavLink for 'Ongoing' with conditional className for active state */}
                <NavLink 
                    to="/ongoing" 
                    className={({ isActive }) => isActive ? 'active link' : 'link'}
                >
                    Ongoing
                </NavLink>
                {/* Define NavLink for 'Hold' with conditional className for active state */}
                <NavLink 
                    to="/hold" 
                    className={({ isActive }) => isActive ? 'active link' : 'link'}
                >
                    Hold
                </NavLink>
                {/* Define NavLink for 'Ended' with conditional className for active state */}
                <NavLink 
                    to="/ended" 
                    className={({ isActive }) => isActive ? 'active link' : 'link'}
                >
                    Ended
                </NavLink>
            </div>
        </nav>
    );
};

// Export the Navbar component as the default export
export default Navbar;
