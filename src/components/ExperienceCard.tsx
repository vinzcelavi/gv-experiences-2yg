import React, { useState } from 'react';
import { Star, Heart } from 'lucide-react';
import { Experience } from '../types/experience';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={experience.image}
          alt={experience.title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Heart Icon */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors duration-200"
        >
          <Heart 
            className={`w-4 h-4 transition-colors duration-200 ${
              isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600 hover:text-red-500'
            }`}
          />
        </button>

        {/* Overlay on hover */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/10 transition-opacity duration-300" />
        )}
      </div>

      <div className="mt-3 space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2 leading-5">
            {experience.title}
          </h3>
        </div>
        
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 fill-current text-yellow-400" />
          <span className="text-sm font-medium text-gray-900">
            {experience.rating}
          </span>
          <span className="text-sm text-gray-500">
            ({experience.reviewCount.toLocaleString()})
          </span>
        </div>

        <div className="flex items-center justify-between pt-1">
          <div className="text-xs text-gray-500">
            Vendu par {experience.provider}
            <br />
            À partir de
          </div>
          <div className="text-right">
            <span className="text-lg font-semibold text-gray-900">
              {experience.startingPrice}€
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;