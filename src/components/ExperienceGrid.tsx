import React from 'react';
import { Filter } from 'lucide-react';
import ExperienceCard from './ExperienceCard';
import { experiences } from '../data/experiences';
import { categories } from '../data/categories';
import { cn } from '../lib/utils';

const ExperienceGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState<string | null>(null);

  return (
    <div className="flex-1">
      {/* Results Header */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-3 px-1 py-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={cn(
                "flex items-center gap-2 rounded-[6px] bg-secondary border px-2 py-1 font-medium text-xs",
                activeCategory === cat.id
                  ? "border-secondary text-primary outline outline-primary"
                  : "border-secondary-darker text-mine-shaft"
              )}
              onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
            >
              <cat.icon strokeWidth={1.5} className="shrink-0 w-5 h-5" />
              <span className="whitespace-nowrap">{cat.name}</span>
            </button>
          ))}
        </div>
        
        <button className="flex items-center space-x-2 px-4 py-2 bg-white border-2 border-secondary-dark rounded-[8px] hover:bg-gray-50 transition-colors duration-100">
          <Filter className="shrink-0 w-4 h-4" />
          <span className="text-sm font-medium">Filtres</span>
        </button>
      </div>

      <div className="flex px-1 pb-2">
        <h2 className="text-xs text-gray-600">
          20 sur 1604 résultats
        </h2>
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