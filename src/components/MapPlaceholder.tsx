import React from 'react';
import { ZoomIn, ZoomOut, Maximize2, Star } from 'lucide-react';

const MapPlaceholder: React.FC = () => {
  return (
    <div className="w-full h-full bg-gray-100 rounded-xl relative overflow-hidden">
      {/* Map Background Pattern */}
      <div className="absolute inset-0">
        <img src="/map.png" alt="Map" className="w-full h-full object-cover" />
      </div>

      {/* Map Controls */}
      <div className="absolute top-4 right-4 flex flex-col space-y-2">
        <button className="p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <ZoomIn className="w-4 h-4 text-gray-600" />
        </button>
        <button className="p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <ZoomOut className="w-4 h-4 text-gray-600" />
        </button>
        <button className="p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <Maximize2 className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* Sample Map Pins */}
      <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center gap-1 bg-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
          4.7
          <Star className="w-4 h-4 text-gold fill-current" />
        </div>
      </div>

      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center gap-1 bg-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
          4.7
          <Star className="w-4 h-4 text-gold fill-current" />
        </div>
      </div>

      <div className="absolute bottom-1/3 right-1/4 transform translate-x-1/2 translate-y-1/2">
        <div className="flex items-center gap-1 bg-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
          4.5
          <Star className="w-4 h-4 text-gold fill-current" />
        </div>
      </div>

      {/* Map Attribution */}
      <div className="absolute bottom-2 left-2 text-xs text-gray-400 bg-white/80 px-2 py-1 rounded">
        © OpenStreetMap
      </div>
    </div>
  );
};

export default MapPlaceholder;