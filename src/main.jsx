// Import necessary functions and components from React and react-dom
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import global CSS styles
import './index.css';

// Import RouterProvider from react-router-dom to set up routing
import { RouterProvider } from 'react-router-dom';

// Import the defined router from the Router.jsx file
import { router } from './routes/Router.jsx';

// Import ThemeProvider to provide theme context
import { ThemeProvider } from './providers/ThemeProvider.jsx';

// Create a root element and render the main application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap the application with ThemeProvider to manage theme context */}
    <ThemeProvider>
      {/* Wrap the application with RouterProvider to enable routing */}
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
