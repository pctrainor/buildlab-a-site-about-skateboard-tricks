import React from 'react';
import { Link } from 'react-router-dom';
import { Skateboard, Home as HomeIcon } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 shadow-lg bg-zinc-800">
      <div className="flex items-center space-x-4">
        <Link to="/" className="flex items-center text-white hover:text-gray-300">
          <HomeIcon className="w-6 h-6" />
          <span className="ml-2 text-xl font-bold">Skateboard Tricks</span>
        </Link>
      </div>
      <nav className="flex space-x-4">
        <Link to="/" className="text-white hover:text-gray-300">
          <HomeIcon className="inline-block w-5 h-5 mr-1" />
          Home
        </Link>
        <Link to="/tricks" className="text-white hover:text-gray-300">
          <Skateboard className="inline-block w-5 h-5 mr-1" />
          Tricks
        </Link>
      </nav>
    </header>
  );
};

export default Header;