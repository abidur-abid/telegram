// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'All', count: 10, path: '/all' },
  { name: 'Regulars', count: 5, path: '/' },
  { name: 'Unread', count: 3, path: '/unread' },
  { name: 'Pending', count: 2, path: '/pending' },
];

const Navbar = () => {
  return (
    <div className="overflow-x-auto scrollbar-hidden">
      <nav className="flex space-x-4 p-4">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? 'relative text-blue-500 pb-2'
                : 'relative text-gray-700 pb-2'
            }
          >
            {({ isActive }) => (
              <>
                <span>{item.name}</span>
                <span className="ml-1 text-xs rounded-full px-2 py-1">
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
