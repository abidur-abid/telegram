// Import the necessary functions and components from React
import React from 'react';

// Import the ChatComponent from the components directory
import ChatComponent from '../components/ChatComponent';

// Define the Home component
const Home = () => {
    // Return a JSX structure
    return (
        // Main container div
        <div>
            {/* Include the ChatComponent inside the div */}
            <ChatComponent />
        </div>
    );
};

// Export the Home component as the default export
export default Home;
