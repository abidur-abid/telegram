// src/components/Navbar.jsx

// Import necessary libraries and components from React and react-router-dom
import React from 'react';
import { NavLink } from 'react-router-dom';

// Define the navigation items array with name, count, and path properties
const navItems = [
  { name: 'All', count: 10, path: '/all' },
  { name: 'Regulars', count: 5, path: '/' },
  { name: 'Unread', count: 3, path: '/unread' },
  { name: 'Pending', count: 2, path: '/pending' },
];

// Define the Navbar functional component
const Navbar = () => {
  return (
    // Container with horizontal overflow hidden and scrollbar hidden
    <div className="overflow-x-auto scrollbar-hidden">
      {/* Navigation bar with flex layout, spacing between items, and padding */}
      <nav className="flex space-x-4 p-4">
        {/* Iterate over navItems to create navigation links */}
        {navItems.map((item) => (
          <NavLink
            key={item.name} // Unique key for each item
            to={item.path} // Path to navigate to
            // Apply different styles based on the active state of the link
            className={({ isActive }) =>
              isActive
                ? 'relative text-blue-500 pb-2' // Style for active link
                : 'relative text-gray-700 pb-2' // Style for inactive link
            }
          >
            {/* Render function to display the link content */}
            {({ isActive }) => (
              <>
                {/* Display the name of the navigation item */}
                <span>{item.name}</span>
                {/* Display the count with some additional styling */}
                <span className="ml-1 text-xs rounded-full px-2 py-1">
                  {item.count}
                </span>
                {/* If the link is active, display an underline indicator */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

// Export the Navbar component as the default export
export default Navbar;
