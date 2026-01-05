import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-800 p-6 shadow-lg text-white">
      <div className="flex justify-between items-center container mx-auto">
        <div className="text-sm">
          <p>&copy; 2023 Skateboard Tricks. All rights reserved.</p>
          <Link to="/privacy-policy" className="hover:text-gray-400">
            Privacy Policy
          </Link>
          <span className="mx-2">|</span>
          <Link to="/terms-of-service" className="hover:text-gray-400">
            Terms of Service
          </Link>
        </div>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;