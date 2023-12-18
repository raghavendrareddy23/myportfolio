import React from 'react';
import { getInTouch } from '../../Assets/config';

const Footer = () => {
    const {heading, message, email} = getInTouch;
  return (
    <footer className="text-center py-8 bg-gray-200" id='getintouch'>
      <p className="text-5xl">{heading}</p>
      <p className="text-lg mt-4">
        {message}
        <a href={email} className="text-purple-500">
          {email}
        </a>
        .
      </p>
      <p className="mt-6">&#60;/&#62; with ❤️ by Munagala Raghavendra Reddy</p>
    </footer>
  );
};

export default Footer;
