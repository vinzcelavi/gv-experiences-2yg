import React from 'react';
import { MapPin, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

const MapPlaceholder: React.FC = () => {
  return (
    <div className="w-full h-full bg-gray-100 rounded-xl relative overflow-hidden">
      {/* Map Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 grid-rows-8 h-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="border border-gray-300"></div>
          ))}
        </div>
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
        <div className="relative">
          <MapPin className="w-8 h-8 text-red-500 fill-current drop-shadow-lg" />
          <div className="absolute -top-2 -right-2 bg-white text-xs font-bold px-2 py-1 rounded-full shadow-md border">
            4.7
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <MapPin className="w-8 h-8 text-red-500 fill-current drop-shadow-lg" />
          <div className="absolute -top-2 -right-2 bg-white text-xs font-bold px-2 py-1 rounded-full shadow-md border">
            4.7
          </div>
        </div>
      </div>

      <div className="absolute bottom-1/3 right-1/4 transform translate-x-1/2 translate-y-1/2">
        <div className="relative">
          <MapPin className="w-8 h-8 text-red-500 fill-current drop-shadow-lg" />
          <div className="absolute -top-2 -right-2 bg-white text-xs font-bold px-2 py-1 rounded-full shadow-md border">
            4.5
          </div>
        </div>
      </div>

      {/* Map Center Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <MapPin className="w-12 h-12 mx-auto mb-2 text-gray-400" />
          <p className="text-sm font-medium">Carte interactive</p>
          <p className="text-xs">Rome, Italie</p>
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