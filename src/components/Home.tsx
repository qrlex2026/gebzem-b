import { Search, Coffee, ShoppingBag, Wrench, Car } from 'lucide-react';
import { popularBusinesses } from '../data';
import ListingCard from './ListingCard';
import { Business } from '../types';
import { motion } from 'motion/react';
import React from 'react';

interface HomeProps {
  key?: React.Key;
  onSelectBusiness: (business: Business) => void;
}

const categories = [
  { id: 'food', icon: Coffee, label: 'Food' },
  { id: 'shopping', icon: ShoppingBag, label: 'Shopping' },
  { id: 'services', icon: Wrench, label: 'Services' },
  { id: 'taxi', icon: Car, label: 'Taxi' },
];

export default function Home({ onSelectBusiness }: HomeProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="pb-32"
    >
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <p className="text-zinc-500 font-semibold text-sm mb-1 tracking-wide uppercase">Location</p>
        <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">
          Gebze, Kocaeli
        </h1>
      </div>

      {/* Search Bar */}
      <div className="px-6 mb-8">
        <div className="flex items-center gap-3 bg-white px-5 py-4 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
          <Search size={20} className="text-zinc-400" />
          <input 
            type="text" 
            placeholder="Search cafes, services..." 
            className="flex-1 bg-transparent outline-none text-zinc-900 placeholder:text-zinc-400 font-medium"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="px-6 mb-10">
        <div className="flex justify-between items-center gap-4 overflow-x-auto pb-4 hide-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.id} className="flex flex-col items-center gap-3 min-w-[72px] cursor-pointer group">
                <div className="w-16 h-16 bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex items-center justify-center text-zinc-900 group-active:scale-95 transition-transform">
                  <Icon size={24} strokeWidth={2} />
                </div>
                <span className="text-xs font-bold text-zinc-600">{cat.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Popular Section */}
      <div className="px-6">
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-xl font-bold text-zinc-900 tracking-tight">Popular in Gebze</h2>
          <button className="text-sm font-bold text-zinc-400 hover:text-zinc-900 transition-colors">See all</button>
        </div>
        <div className="flex flex-col gap-4">
          {popularBusinesses.map((business) => (
            <ListingCard 
              key={business.id} 
              business={business} 
              onClick={() => onSelectBusiness(business)} 
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
