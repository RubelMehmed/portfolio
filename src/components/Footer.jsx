import React from 'react';
import { github, linkedin, twitter } from '../assets/index';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6 relative">
      <div className="container mx-auto flex justify-center items-center space-x-4">
        {/* GitHub Icon */}
        <div className="footer-icon">
          <a
            href="https://github.com/rubelmehmed"
            target="_blank"
            rel="noopener noreferrer"
          >
            {github}
          </a>
        </div>

        {/* LinkedIn Icon */}
        <div className="footer-icon">
          <a
            href="https://linkedin.com/in/rubelmehmed"
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkedin}
          </a>
        </div>

        {/* Twitter Icon */}
        <div className="footer-icon">
          <a
            href="https://twitter.com/rubelmehmed"
            target="_blank"
            rel="noopener noreferrer"
          >
            {twitter}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
