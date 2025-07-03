import React, { useState } from 'react';
import { Search, MapPin, Landmark } from 'lucide-react';

interface SearchBarProps {
  destinationPlaceholder?: string;
  activityPlaceholder?: string;
  onSearch?: (destination: string, activity: string) => void;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  destinationPlaceholder = "Rome",
  activityPlaceholder = "Colisée",
  onSearch,
  className = ""
}) => {
  const [destination, setDestination] = useState('');
  const [activity, setActivity] = useState('');

  const handleSearch = () => {
    onSearch?.(destination, activity);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div
      className={`relative w-full max-w-[620px] mx-auto ${className}`}
      style={{ zIndex: 2 }}
    >
      <div
        className="flex items-center bg-white border-2 border-[#E9E1D4] rounded-[1000px] shadow-[0px_58px_23px_rgba(97,57,0,0.01),0px_33px_20px_rgba(97,57,0,0.05),0px_15px_15px_rgba(97,57,0,0.09),0px_4px_8px_rgba(97,57,0,0.1)] h-[60px] px-2"
      >
        {/* Destination input */}
        <div className="flex items-center flex-1 h-full px-4">
          <MapPin className="w-6 h-6 text-[#6B6B6B] mr-3" />
          <input
            type="text"
            placeholder={destinationPlaceholder}
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full bg-transparent text-base font-normal text-gray-900 placeholder-gray-400 border-none outline-none focus:ring-0"
          />
        </div>
        {/* Divider */}
        <div className="w-px h-8 bg-[#E9E1D4] mx-2" />
        {/* Activity input */}
        <div className="flex items-center flex-1 h-full px-4">
          <Landmark className="w-6 h-6 text-[#6B6B6B] mr-3" />
          <input
            type="text"
            placeholder={activityPlaceholder}
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full bg-transparent text-base font-normal text-gray-900 placeholder-gray-400 border-none outline-none focus:ring-0"
          />
        </div>
        {/* Search button */}
        <button
          onClick={handleSearch}
          className="w-12 h-12 flex items-center justify-center rounded-[1000px] bg-primary text-white hover:bg-primary-dark transition-colors duration-200 -mr-1 shadow-md"
          style={{ boxShadow: '0 2px 8px rgba(198,80,46,0.10)' }}
        >
          <Search className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar; 