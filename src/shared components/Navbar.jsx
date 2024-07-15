// src/components/Navbar.jsx
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../providers/ThemeProvider'; // Make sure you have this context set up

const navItems = [
  { name: 'All', count: 10, path: '/all' },
  { name: 'Regulars', count: 5, path: '/' },
  { name: 'Unread', count: 3, path: '/unread' },
  { name: 'Pending', count: 2, path: '/pending' },
];

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="overflow-x-auto scrollbar-hidden">
      <nav className="flex space-x-4 p-4">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `relative pb-2 ${isActive ? 'text-blue-500' : theme === 'dark' ? 'text-white' : 'text-gray-700'}`
            }
          >
            {({ isActive }) => (
              <>
                <span>{item.name}</span>
                <span className="ml-1 -mt-8 text-xs rounded-full px-2 py-1">
                  {item.count}
                </span>
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

export default Navbar;
