// Import necessary functions and components from React
import React, { useEffect, useState } from 'react';

// Import the profile image
import profile from '../assets/profile.png';

// Import the Link component from react-router-dom for navigation
import { Link } from 'react-router-dom';

// Define the ChatComponent
const ChatComponent = () => {
  // State to store chat data
  const [chatData, setChatData] = useState(null);
  
  // State to manage loading status
  const [loading, setLoading] = useState(true);
  
  // State to handle any errors during data fetching
  const [error, setError] = useState(null);

  // useEffect to fetch chat data when the component mounts
  useEffect(() => {
    // Define an asynchronous function to fetch chat data
    const fetchChats = async () => {
      try {
        // Make an API call to fetch chat data
        const response = await fetch('https://devapi.beyondchats.com/api/get_all_chats?page=1');
        
        // Check if the response is not OK, then throw an error
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        // Parse the response JSON data
        const data = await response.json();
        
        // Store the fetched data in the chatData state
        setChatData(data);
      } catch (error) {
        // Set the error message if an error occurs
        setError(error.message);
      } finally {
        // Set loading to false once the data fetching is complete
        setLoading(false);
      }
    };

    // Call the fetchChats function
    fetchChats();
  }, []);

  // If data is still loading, show a loading message
  if (loading) return <p>Loading...</p>;
  
  // If there is an error, show the error message
  if (error) return <p>Error: {error}</p>;

  // Function to summarize email addresses if they exceed a certain limit
  const summarizeEmail = (email, limit) => {
    if (email.length <= limit) {
      return email;
    }
    return email.substring(0, limit) + '...';
  };

  // Render the chat component
  return (
    <div className='p-5'>
      <ul>
        {/* Map over the chat data and render each chat item */}
        {chatData && chatData.data.data.map(chat => (
          <Link to={`/${chat.id}`} key={chat.id}>
            <div className='flex justify-start items-center gap-3 my-4'>
              <div>
                {/* Display the profile image */}
                <img src={profile} alt='profile' className='w-10 h-10'/>
              </div>
              <div>
                <div className='flex justify-between items-center gap-5'>
                  {/* Display the chat creator's name or a default name */}
                  <li>{chat.creator.name ? chat.creator.name : 'Your Name'}</li>
                  {/* Display a static timestamp */}
                  <li>5:15 PM</li>
                </div>
                {/* Display a summarized version of the creator's email */}
                <p>{summarizeEmail(chat.creator.email, 25)}</p>
              </div>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

// Export the ChatComponent as the default export
export default ChatComponent;
