import { Navigation, Star } from 'lucide-react';
import { Business } from '../types';
import React from 'react';

interface ListingCardProps {
  key?: React.Key;
  business: Business;
  onClick: () => void;
}

export default function ListingCard({ business, onClick }: ListingCardProps) {
  return (
    <div 
      onClick={onClick}
      className="flex gap-4 p-4 bg-white rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] cursor-pointer active:scale-[0.98] transition-transform"
    >
      <div className="w-24 h-24 rounded-[16px] bg-zinc-200 shrink-0" />
      <div className="flex flex-col justify-center flex-1 py-1">
        <h3 className="font-bold text-base text-zinc-900 leading-tight mb-1">{business.name}</h3>
        <p className="text-sm text-zinc-500 font-medium mb-3">{business.category}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1.5 text-zinc-900">
            <Star size={14} className="fill-zinc-900" />
            <span className="text-sm font-bold">{business.rating}</span>
          </div>
          <div className="flex items-center gap-1.5 text-zinc-500">
            <Navigation size={14} />
            <span className="text-xs font-semibold">{business.distance}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
