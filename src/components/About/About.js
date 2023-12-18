import React from 'react';
import { about } from '../../Assets/config';

const About = () => {
    const { heading, imageLink, message, resume } = about;
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100" id='about'>
            <div className="max-w-50% w-full flex flex-col md:flex-row  rounded-lg overflow-hidden">
                {/* Left Side */}
                <div className="p-4 md:w-1/2 flex justify-center">
                    <div className="w-96 h-96 rounded-full overflow-hidden">
                        <img
                            src={imageLink}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Right Side */}
                <div className="p-7 max-w-50% md:w-1/2 flex flex-col justify-center items-center">
                    <h2 className="text-5xl mb-7">{heading}</h2>
                    <p className="text-gray-600 text-1xl text-center mb-6">
                        {message}
                    </p>
                    <a
                        href={resume}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-fuchsia-700 text-white px-6 py-2 rounded-lg text-center hover:bg-purple-600 transition duration-300"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
