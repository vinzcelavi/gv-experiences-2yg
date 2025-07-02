import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { Experience } from '../types/experience';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group bg-transparent transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative p-[8px] pb-[14px] flex flex-col transition-all duration-300 rounded-[12px] cursor-pointer min-h-full ${
          isHovered
            ? 'bg-white shadow-[0px_58px_23px_rgba(97,57,0,0.01),0px_33px_20px_rgba(97,57,0,0.05),0px_15px_15px_rgba(97,57,0,0.09),0px_4px_8px_rgba(97,57,0,0.1)]'
            : 'bg-transparent'
        }`}
      >
        <div className={`relative overflow-hidden bg-white rounded-[8px] ${isHovered ? '' : 'shadow-[0px_58px_23px_rgba(97,57,0,0.01),0px_33px_20px_rgba(97,57,0,0.05),0px_15px_15px_rgba(97,57,0,0.09),0px_4px_8px_rgba(97,57,0,0.1)]'}`}>
          {experience.type && (
            <div className={`z-10 absolute bottom-2 left-2 px-1 pt-1.5 pb-0.5 rounded-[4px] flex items-center justify-center ${experience.type === 'Ticket' ? 'bg-tuscany-light' : 'bg-white'}`}>
              <span className={`leading-none text-xs font-brixton ${experience.type === 'Ticket' ? 'text-white' : ''}`}>
                {experience.type}
              </span>
            </div>
          )}
          <img
            src={experience.image}
            alt={experience.title}
            className="z-0 relative w-full h-full object-cover aspect-[1.4] transition-transform duration-300 group-hover:scale-105"
          />
          {/* Overlay on hover */}
          <div className={`absolute inset-0 bg-black/10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        </div>
        <div className="relative pt-2 space-y-1 flex flex-col flex-1 justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-900 line-clamp-2 leading-5">
                {experience.title}
              </h3>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-sm font-medium text-gray-900">
                {experience.rating}
              </span>
              <Star className="w-4 h-4 fill-current text-yellow-400" />
              <span className="text-sm text-gray-500">
                ({experience.reviewCount.toLocaleString()})
              </span>
            </div>
          </div>
          {experience.type === 'Ticket' && experience.startingPrice > 0 && (
            <div className="flex items-end justify-between pt-1">
              <div className="text-xs text-gray-500">
                {experience.provider && `Vendu par ${experience.provider}`}
                <br />
                À partir de
              </div>
              <div className="text-right">
                <span className=" text-lg font-semibold text-gray-900">
                  {experience.startingPrice}€
                </span>
              </div>
            </div>
          )}
          {experience.type === 'Attraction' && (
            <div className="flex items-end justify-end pt-1">
              <button
                className="px-3 py-1 rounded-[4px] text-xs font-medium bg-sand-dark text-sand-dark-foreground hover:bg-sand-dark/80 transition-colors"
              >
                Voir les billets
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;