// Import necessary functions and components from React and react-router-dom
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

// Import custom components Header and Navbar from shared components directory
import Header from '../shared components/Header';
import Navbar from '../shared components/Navbar';

// Define the Main component
const Main = () => {
    // Use useLocation hook to get the current location object
    const location = useLocation();

    // Determine whether to show the Header and Navbar based on the current pathname
    const shouldShowHeaderAndNavbar = location.pathname === '/';

    // Return a JSX structure
    return (
        <>
            {/* Conditionally render the Header component if shouldShowHeaderAndNavbar is true */}
            {shouldShowHeaderAndNavbar && <Header />}
            
            {/* Conditionally render the Navbar component if shouldShowHeaderAndNavbar is true */}
            {shouldShowHeaderAndNavbar && <Navbar />}
            
            {/* Render the Outlet component which will render the matched child route */}
            <Outlet />
        </>
    );
};

// Export the Main component as the default export
export default Main;
