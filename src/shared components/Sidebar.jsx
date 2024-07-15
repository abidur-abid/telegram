// Import necessary libraries and components from React, react-router-dom, react-icons, and other assets
import React, { useState, useEffect, useRef, useContext } from 'react';
import { FaHome, FaUser, FaPlusCircle, FaSignOutAlt } from 'react-icons/fa';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { TiThSmallOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import profile from '../assets/telegram.png';
import PropTypes from 'prop-types';
import { ThemeContext } from '../providers/ThemeProvider';

// Define the Sidebar functional component
const Sidebar = ({ isOpen, onClose }) => {
  // Access the theme context to get the current theme and toggle function
  const { theme, toggleTheme } = useContext(ThemeContext);

  // State to track the sidebar's X position and whether it is being dragged
  const [sidebarX, setSidebarX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Refs to track the sidebar element and touch start position
  const sidebarRef = useRef(null);
  const touchStartX = useRef(0);

  // Function to handle link clicks and close the sidebar
  const handleLinkClick = () => {
    onClose();
  };

  // Function to handle touch start events on the sidebar
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsDragging(true);
  };

  // Function to handle touch move events on the sidebar
  const handleTouchMove = (e) => {
    const touchCurrentX = e.touches[0].clientX;
    const deltaX = touchCurrentX - touchStartX.current;
    if (deltaX < 0) {
      setSidebarX(Math.max(deltaX, -sidebarRef.current.clientWidth));
    }
  };

  // Function to handle touch end events on the sidebar
  const handleTouchEnd = () => {
    setIsDragging(false);
    if (sidebarX < -50) {
      onClose();
    } else {
      setSidebarX(0);
    }
  };

  // Effect to add and remove touch event listeners on the sidebar
  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (sidebar) {
      sidebar.addEventListener('touchstart', handleTouchStart);
      sidebar.addEventListener('touchmove', handleTouchMove);
      sidebar.addEventListener('touchend', handleTouchEnd);

      return () => {
        sidebar.removeEventListener('touchstart', handleTouchStart);
        sidebar.removeEventListener('touchmove', handleTouchMove);
        sidebar.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [sidebarX]);

  // Effect to set the sidebar's X position based on the isOpen prop
  useEffect(() => {
    if (!isOpen) {
      setSidebarX(-sidebarRef.current.clientWidth);
    } else {
      setSidebarX(0);
    }
  }, [isOpen]);

  return (
    // Sidebar element with fixed positioning, conditional classes for transition and visibility
    <aside
      className={`fixed inset-y-0 left-0 w-64 z-50 transition-transform duration-300 ease-in-out ${isDragging ? '' : 'transition-transform'} ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      style={{ transform: `translateX(${sidebarX}px)` }}
      ref={sidebarRef}
    >
      {/* Sidebar content */}
      <div className="">
        {/* Header section with profile image and theme toggle button */}
        <div className="flex items-center justify-between p-5 ">
          <img src={profile} alt="profile" className="h-8 w-8 rounded-full" />
          <button
            onClick={toggleTheme}
            className="text-2xl"
            style={{ transform: `rotate(${theme === 'dark' ? 180 : 0}deg)` }}
          >
            {theme === 'dark' ? <MdLightMode /> : <MdDarkMode />}
          </button>
        </div>
        {/* Navigation links */}
        <div>
          <ul className="pt-6">
            <Link
              to="/"
              className="my-2 flex items-center p-2 hover:bg-gray-700 transition-colors duration-200"
              onClick={handleLinkClick}
            >
              <FaHome />
              <span className="ml-2">Home</span>
            </Link>
            <Link
              to="/profile"
              className="my-2 flex items-center p-2 hover:bg-gray-700 transition-colors duration-200"
              onClick={handleLinkClick}
            >
              <FaUser />
              <span className="ml-2">Profile</span>
            </Link>
            <Link
              to="/all-blogs"
              className="my-2 flex items-center p-2 hover:bg-gray-700 transition-colors duration-200"
              onClick={handleLinkClick}
            >
              <TiThSmallOutline />
              <span className="ml-2">All Blogs</span>
            </Link>
            <Link
              to="/add-blog"
              className="my-2 flex items-center p-2 hover:bg-gray-700 transition-colors duration-200"
              onClick={handleLinkClick}
            >
              <FaPlusCircle />
              <span className="ml-2">Add Blog</span>
            </Link>
            <Link
              to="/logout"
              className="my-2 flex items-center p-2 hover:bg-gray-700 transition-colors duration-200"
              onClick={handleLinkClick}
            >
              <FaSignOutAlt />
              <span className="ml-2">Logout</span>
            </Link>
          </ul>
        </div>
      </div>
    </aside>
  );
};

// PropTypes validation for the Sidebar component
Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

// Export the Sidebar component as the default export
export default Sidebar;
