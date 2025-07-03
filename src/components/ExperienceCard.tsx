import React, { useState } from 'react';
import { Plus, Star, Ticket } from 'lucide-react';
import { Experience } from '../types/experience';
import { cn } from '../lib/utils';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group min-h-[360px] md:min-h-0 bg-transparent transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "relative flex flex-col justify-end p-2 gap-2 transition-all duration-300 rounded-[12px] cursor-pointer min-h-full bg-white shadow-[0px_58px_23px_rgba(97,57,0,0.01),0px_33px_20px_rgba(97,57,0,0.05),0px_15px_15px_rgba(97,57,0,0.09),0px_4px_8px_rgba(97,57,0,0.1)]",
          experience.type === 'Ticket'
            ? ''
            : 'justify-end'
        )}
      >
        <div className={cn(
          "z-0 relative overflow-hidden rounded-[8px]",
          experience.type === 'Ticket' ? 'aspect-[1.4]' : 'absolute inset-2'
        )}>
          {experience.type && (
            <div className={`z-10 absolute top-2 left-2 px-1 pt-1.5 pb-0.5 rounded-[4px] flex items-center justify-center ${experience.type === 'Ticket' ? 'bg-primary-light' : 'bg-white'}`}>
              <span className={`leading-none text-xs font-brixton ${experience.type === 'Ticket' ? 'text-white' : ''}`}>
                {experience.type}
              </span>
            </div>
          )}
          <img
            src={experience.image}
            alt={experience.title}
            className="z-0 relative w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className={cn(
            "absolute inset-0 bg-black/10 transition-opacity duration-300",
            isHovered ? 'opacity-0' : 'opacity-100',
            experience.type === 'Ticket' ? '' : 'top-auto bottom-0 h-2/3 bg-transparent bg-gradient-to-t from-black/100 to-transparent opacity-100'
          )} />
        </div>
        <div className={cn(
          "relative p-2 pt-0 flex flex-col gap-3 flex-1",
          experience.type === 'Ticket' ? 'justify-between' : 'justify-end'
        )}>
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <h3 className={cn(
                "font-medium",
                experience.type === 'Ticket' ? 'text-[13px] text-mine-shaft' : 'text-2xl text-secondary'
              )}>
                {experience.title}
              </h3>
            </div>
            <div className="flex items-center space-x-1">
              <span className={cn(
                "text-[13px] font-semibold",
                experience.type === 'Ticket' ? 'text-mine-shaft' : 'text-secondary'
              )}>
                {experience.rating}
              </span>
              <Star className="w-4 h-4 fill-current text-yellow-400" />
              <span className={cn(
                "text-[13px] text-gray-500",
                experience.type === 'Ticket' ? '' : 'text-secondary/70'
              )}>
                ({experience.reviewCount.toLocaleString()})
              </span>
            </div>
          </div>
          {experience.type === 'Ticket' && experience.startingPrice !== null && (
            <div className="flex items-end justify-between">
              <div className="text-xs text-gray-500">
                {experience.provider && `Vendu par ${experience.provider}`}
                <br />
                À partir de
              </div>
              <div className="text-right">
                <span className="text-lg font-semibold text-mine-shaft">
                  {experience.startingPrice}€
                </span>
              </div>
            </div>
          )}
          {experience.type === 'Attraction' && (
            <div className="flex lg:flex-col xl:flex-row gap-2 justify-start">
              <button
                className="flex items-center justify-center gap-1.5 px-2 py-1.5 flex-1 rounded-[4px] text-xs font-medium border border-white/40 text-secondary hover:bg-secon dary-dark/80 transition-colors"
              >
                <Plus className="w-4 h-4 text-secondary" />
                <span className="whitespace-nowrap">Plus de détails</span>
              </button>
              <button
                className="flex items-center justify-center gap-1.5 px-2 py-1.5 flex-1 rounded-[4px] text-xs font-medium border border-white bg-white text-secondary-dark-foreground hover:bg-secon dary-dark/80 transition-colors"
              >
                <Ticket className="w-4 h-4 text-secondary-dark-foreground" />
                <span className="whitespace-nowrap">Voir les offres</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;