import React, { useEffect, useState } from 'react';
import profile from '../assets/profile.png';
import { Link } from 'react-router-dom';

const ChatComponent = () => {
  const [chatData, setChatData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await fetch('https://devapi.beyondchats.com/api/get_all_chats?page=1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setChatData(data.data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchChats();
  }, []);

  const filterChatsByStatus = (status) => {
    if (status === 'all') return chatData;
    return chatData.filter(chat => chat.status === status);
  };

  const tabData = [
    { label: 'All', status: 'all' },
    { label: 'Request', status: 'request' },
    { label: 'Ongoing', status: 'ongoing' },
    { label: 'Ended', status: 'ended' }
  ];

  const summarizeEmail = (email, limit) => {
    if (email.length <= limit) {
      return email;
    }
    return email.substring(0, limit) + '...';
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='p-5'>
      <div className='overflow-x-auto scrollbar-hide'>
        <ul className='flex space-x-4 pb-4 sticky top-0 -z-8'>
          {tabData.map(tab => (
            <li
              key={tab.status}
              className={`relative cursor-pointer py-2 px-4 ${activeTab === tab.status ? 'underline' : ''}`}
              onClick={() => setActiveTab(tab.status)}
            >
              {tab.label}
              <span className='absolute top-0 right-0 bg-blue-500 text-white rounded-full px-2 text-xs'>
                {filterChatsByStatus(tab.status).length}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className='pt-4'>
        <ul>
          {filterChatsByStatus(activeTab).map(chat => (
            <Link to={`/${chat.id}`} key={chat.id}>
              <div className='flex justify-start items-center gap-3 my-4'>
                <div><img src={profile} alt='profile' className='w-10 h-10'/></div>
                <div>
                  <div className='flex justify-between items-center'>
                    <li>{chat.creator.name ? chat.creator.name : 'Your Name' }</li>
                    <li>5:15 PM</li>
                  </div>
                  <p>{summarizeEmail(chat.creator.email, 20)}</p>
                </div>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatComponent;
