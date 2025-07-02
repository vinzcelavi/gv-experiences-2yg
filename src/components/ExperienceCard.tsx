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
        className={`relative p-[8px] pb-[14px] transition-all duration-300 rounded-[12px] cursor-pointer ${
          isHovered
            ? 'bg-white shadow-[0px_58px_23px_rgba(97,57,0,0.01),0px_33px_20px_rgba(97,57,0,0.05),0px_15px_15px_rgba(97,57,0,0.09),0px_4px_8px_rgba(97,57,0,0.1)]'
            : 'bg-transparent'
        }`}
      >
        <div className={`relative overflow-hidden rounded-[8px] ${isHovered ? '' : 'shadow-[0px_58px_23px_rgba(97,57,0,0.01),0px_33px_20px_rgba(97,57,0,0.05),0px_15px_15px_rgba(97,57,0,0.09),0px_4px_8px_rgba(97,57,0,0.1)]'}`}>
          <img
            src={experience.image}
            alt={experience.title}
            className="w-full h-full object-cover aspect-[1.4] transition-transform duration-300 group-hover:scale-105"
          />
          {/* Overlay on hover */}
          <div className={`absolute inset-0 bg-black/10 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />
        </div>
        <div className="pt-2 space-y-1">
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
          <div className="flex items-end justify-between pt-1">
            <div className="text-xs text-gray-500">
              Vendu par {experience.provider}
              <br />
              À partir de
            </div>
            <div className="text-right">
              <span className=" text-lg font-semibold text-gray-900">
                {experience.startingPrice}€
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;