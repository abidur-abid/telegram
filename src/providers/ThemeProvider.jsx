// Import necessary functions and components from React
import React, { createContext, useState, useEffect } from 'react';

// Create a context for theme management
const ThemeContext = createContext();

// Define a ThemeProvider component to provide theme-related values and functions
const ThemeProvider = ({ children }) => {
  // State to store the current theme, initialized to 'dark'
  const [theme, setTheme] = useState('dark');

  // useEffect to load the saved theme from localStorage when the component mounts
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
  }, []);

  // useEffect to update the document's class and save the theme to localStorage whenever the theme changes
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to toggle the theme between 'dark' and 'light'
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  // Provide the theme and toggleTheme function to child components via ThemeContext
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Export ThemeContext and ThemeProvider for use in other components
export { ThemeContext, ThemeProvider };
