import React, { useState, useEffect, useRef, useContext } from 'react';
import { FaHome, FaUser, FaPlusCircle, FaSignOutAlt } from 'react-icons/fa';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { TiThSmallOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import profile from '../assets/telegram.png';
import PropTypes from 'prop-types';
import { ThemeContext } from '../providers/ThemeProvider';

const Sidebar = ({ isOpen, onClose }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [sidebarX, setSidebarX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sidebarRef = useRef(null);
  const touchStartX = useRef(0);

  const handleLinkClick = () => {
    onClose();
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    const touchCurrentX = e.touches[0].clientX;
    const deltaX = touchCurrentX - touchStartX.current;
    if (deltaX < 0) {
      setSidebarX(Math.max(deltaX, -sidebarRef.current.clientWidth));
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (sidebarX < -50) {
      onClose();
    } else {
      setSidebarX(0);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) { // Adjust breakpoint for large screens as needed
      onClose();
    }
  };

  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (sidebar) {
      sidebar.addEventListener('touchstart', handleTouchStart);
      sidebar.addEventListener('touchmove', handleTouchMove);
      sidebar.addEventListener('touchend', handleTouchEnd);
      sidebar.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        sidebar.removeEventListener('touchstart', handleTouchStart);
        sidebar.removeEventListener('touchmove', handleTouchMove);
        sidebar.removeEventListener('touchend', handleTouchEnd);
        sidebar.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [sidebarX]);

  useEffect(() => {
    if (!isOpen) {
      setSidebarX(-sidebarRef.current.clientWidth);
    } else {
      setSidebarX(0);
    }
  }, [isOpen]);

  return (
    <aside
      className={`fixed inset-y-0 left-0 w-64 sidebar z-50 transition-transform duration-300 ease-in-out ${isDragging ? '' : 'transition-transform'} ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      style={{ transform: `translateX(${sidebarX}px)` }}
      ref={sidebarRef}
    >
      <div className="flex flex-col h-full bg-white dark:bg-gray-900">
        <div className="flex items-center justify-between p-5">
          <img src={profile} alt="profile" className="h-8 w-8 rounded-full" />
          <button
            onClick={toggleTheme}
            className="text-2xl"
            style={{ transform: `rotate(${theme === 'dark' ? 180 : 0}deg)` }}
          >
            {theme === 'dark' ? <MdLightMode /> : <MdDarkMode />}
          </button>
        </div>
        <div>
          <ul className="pt-6 px-5">
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

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;
