import React from 'react';
import { Menu, User, Globe } from 'lucide-react';
import SearchBar from './SearchBar';

const Header: React.FC = () => {
  return (
    <header className="h-[100px] bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className=" mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/Logo GV green.svg" 
            alt="Generation Voyage" 
            className="h-8 w-auto"
          />
        </div>

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
            <button className="p-2 text-gray-700 hover:text-gray-900 transition-colors">
              <Globe className="w-4 h-4" />
            </button>
            
            <div className="flex items-center space-x-2 border border-gray-300 rounded-full py-1 px-3 hover:shadow-md transition-shadow duration-200">
              <Menu className="w-4 h-4 text-gray-700" />
              <div className="w-8 h-8 bg-custom-red rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;