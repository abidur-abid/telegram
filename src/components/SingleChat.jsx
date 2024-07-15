// Import necessary functions and components from React and react-router-dom
import React, { useRef, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

// Import icons from react-icons
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa";
import { HiOutlineMicrophone, HiEmojiHappy, HiOutlineLink } from "react-icons/hi";

// Import profile image
import profile from '../assets/profile.png';

// Define the SingleChat component
const SingleChat = () => {
    // Fetch data using the useLoaderData hook
    const data = useLoaderData();
    // Create a ref to track the end of the messages
    const messagesEndRef = useRef(null);

    // useEffect to scroll to the bottom whenever data changes
    useEffect(() => {
        scrollToBottom();
    }, [data]);

    // Function to scroll to the bottom of the chat
    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Function to format the time from the updated_at timestamp
    const formatTime = (updatedAt) => {
        const date = new Date(updatedAt);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    // Function to render the chat messages
    const renderMessages = () => {
        let prevTime = null;

        return (
            <div className='p-5 flex-1 overflow-y-auto'>
                {data.data && data.data.map((message, index) => {
                    const currentTime = formatTime(message.updated_at);

                    // Display time only when it changes
                    const showTime = currentTime !== prevTime;
                    prevTime = currentTime;

                    return (
                        <div key={message.id} className='mb-4'>
                            {showTime && (
                                <p className="text-xs text-black w-20  mx-auto text-center bg-gray-200 py-1 rounded-full sticky top-0 z-10">
                                    {formatTime(message.updated_at)}
                                </p>
                            )}
                            <div className='w-2/3 bg-darkModePrimaryColor px-5 py-4 rounded-lg'>
                                <p className=''>{message.message}</p>
                            </div>
                        </div>
                    );
                })}
                <div ref={messagesEndRef} />
            </div>
        );
    };

    // Render the SingleChat component
    return (
        <section className="h-screen flex flex-col ">
            {/* Header section */}
            <header className='p-5 flex justify-between items-center sticky top-0 z-10 header'>
                <div className='flex justify-center items-center gap-4'>
                    {/* Back button */}
                    <div className='inline lg:hidden'><Link to={'/'}><FaArrowLeft /></Link></div>
                    <div className='flex justify-start items-center gap-4'>
                        {/* Profile image */}
                        <div><img src={profile} alt='profile' className='w-10 h-10'/></div>
                        <div>
                            {/* Display chat name or default name */}
                            <li>{data.name ? data.name : 'Your Name'}</li>
                            {/* Display the latest updated_at time */}
                            <p>{data.data && data.data.length > 0 ? formatTime(data.data[0].updated_at) : 'Last Seen a Long Time Ago'}</p>
                        </div>
                    </div>
                </div>
                {/* Options button */}
                <div><BsThreeDotsVertical /></div>
            </header>

            {/* Render chat messages */}
            {renderMessages()}

            {/* Footer section */}
            <footer className='p-5 sticky bottom-0 z-10 header'>
                <div className='flex justify-between items-center gap-3'>
                    <div className='relative flex items-center w-full'>
                        {/* Emoji icon */}
                        <HiEmojiHappy className='absolute left-3 text-gray-500' />
                        {/* Input field for typing messages */}
                        <input type="text" name="" id="" className='w-full rounded-full px-12 py-3 pl-12 border border-gray-300 focus:outline-none'/>
                        {/* Link icon */}
                        <HiOutlineLink className='absolute right-3 text-gray-500' />
                    </div>
                    {/* Microphone button */}
                    <div className='px-4 py-4 bg-darkModePrimaryColor rounded-full'><HiOutlineMicrophone className='text-white' /> </div>
                </div>
            </footer>
        </section>
    );
};

// Export the SingleChat component as the default export
export default SingleChat;
