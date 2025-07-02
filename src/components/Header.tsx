import React from 'react';
import { User } from 'lucide-react';
import SearchBar from './SearchBar';

const Header: React.FC = () => {
  return (
    <header className="z-50 sticky top-0 h-[100px] bg-gradient-to-b from-sand via-sand/90 to-transparent">
      <div className="max-w-[90rem] mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/logo-gv-green.svg" 
            alt="Generation Voyage" 
            className="shrink-0 h-auto w-[170px]"
          />
        </a>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-8">
          <SearchBar 
            onSearch={(destination, activity) => {
              console.log('Search:', { destination, activity });
            }}
          />
        </div>

        {/* Menu Items */}
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Destinations
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Activités
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Outils
            </a>
          </nav>
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-custom-red rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;