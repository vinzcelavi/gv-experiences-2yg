import React from 'react';
import { Filter } from 'lucide-react';
import ExperienceCard from './ExperienceCard';
import { experiences } from '../data/experiences';

const ExperienceGrid: React.FC = () => {
  return (
    <div className="flex-1">
      {/* Results Header */}
      <div className="flex items-end justify-between mb-2">
        <div className="flex items-end space-x-4 pl-2">
          <h2 className="text-sm text-gray-600">
            20 sur 1604 résultats
          </h2>
        </div>
        
        <button className="flex items-center space-x-2 px-4 py-2 bg-white border-2 border-secondary-dark rounded-[1000px] hover:bg-gray-50 transition-colors duration-200">
          <Filter className="w-4 h-4" />
          <span className="text-sm font-medium">Afficher les filtres</span>
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceGrid;