import React from 'react';
import ExperienceGrid from './ExperienceGrid';
import MapPlaceholder from './MapPlaceholder';

const MainLayout: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex gap-8 min-h-screen">
        {/* Left Column - 66% */}
        <div className="w-2/3">
          <ExperienceGrid />
        </div>
        
        {/* Right Column - 33% */}
        <div className="w-1/3">
          <div className="sticky top-[116px] h-[calc(100vh-132px)]">
            <MapPlaceholder />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;