import React from 'react';
import notFound from '../assets/notFound.svg';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-800">
            <img src={notFound} alt="Not Found" className="w-1/2 max-w-md mb-8" />
            <Link to="/" className="btn btn-success">
                Back To Home
            </Link>
        </section>
    );
};

export default NotFound;
