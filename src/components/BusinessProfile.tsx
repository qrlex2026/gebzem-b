import { ArrowLeft, Heart, Star, Phone, MapPin, Share, Clock } from 'lucide-react';
import { Business } from '../types';
import { motion } from 'motion/react';
import React, { useState } from 'react';

interface BusinessProfileProps {
  key?: React.Key;
  business: Business;
  onBack: () => void;
}

export default function BusinessProfile({ business, onBack }: BusinessProfileProps) {
  const [activeTab, setActiveTab] = useState('info');

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="bg-white min-h-screen pb-32"
    >
      {/* Hero Image & Header */}
      <div className="relative h-80 md:h-96 lg:h-[400px]">
        <img 
          src={business.imageUrl} 
          alt={business.name} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Top Bar */}
        <div className="absolute top-0 left-0 right-0 p-6 pt-12 flex justify-between items-center max-w-7xl mx-auto">
          <button 
            onClick={onBack}
            className="w-11 h-11 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white active:scale-95 transition-transform"
          >
            <ArrowLeft size={20} strokeWidth={2.5} />
          </button>
          <button className="w-11 h-11 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white active:scale-95 transition-transform">
            <Heart size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pt-8 relative -mt-8 bg-white rounded-t-[32px] max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-4">
          <div className="pr-4">
            <h1 className="text-2xl font-bold text-zinc-900 mb-2 tracking-tight leading-tight">{business.name}</h1>
            <p className="text-zinc-500 font-medium">{business.category}</p>
          </div>
          <div className="flex flex-col items-end gap-2 shrink-0">
            <div className="flex items-center gap-1.5 bg-zinc-50 px-3 py-1.5 rounded-full">
              <Star size={14} className="fill-zinc-900 text-zinc-900" />
              <span className="font-bold text-sm">{business.rating}</span>
            </div>
            <span className="text-xs font-bold text-zinc-400">({business.reviews} reviews)</span>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide ${business.isOpen ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
            <Clock size={14} />
            {business.isOpen ? 'OPEN NOW' : 'CLOSED'}
          </div>
          <div className="flex items-center gap-1.5 text-zinc-500 text-sm font-semibold">
            <MapPin size={16} />
            {business.distance}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mb-10">
          <button className="flex-1 bg-zinc-900 text-white py-4 rounded-[20px] font-bold text-sm flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(0,0,0,0.15)] active:scale-[0.98] transition-transform">
            <Phone size={18} />
            Call
          </button>
          <button className="flex-1 bg-zinc-100 text-zinc-900 py-4 rounded-[20px] font-bold text-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
            <MapPin size={18} />
            Directions
          </button>
          <button className="w-14 bg-zinc-100 text-zinc-900 py-4 rounded-[20px] flex items-center justify-center active:scale-[0.98] transition-transform">
            <Share size={18} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 border-b border-zinc-100 mb-8">
          {['info', 'menu', 'reviews'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-sm font-bold capitalize relative ${activeTab === tab ? 'text-zinc-900' : 'text-zinc-400'}`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-900 rounded-t-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[200px]">
          {activeTab === 'info' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h3 className="font-bold text-zinc-900 mb-3 text-lg">About</h3>
              <p className="text-zinc-500 leading-relaxed text-sm font-medium">
                {business.description}
              </p>
            </motion.div>
          )}
          {activeTab === 'menu' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center h-40 text-zinc-400">
              <div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center mb-3">
                <Star size={20} className="text-zinc-300" />
              </div>
              <span className="text-sm font-semibold">Menu items coming soon</span>
            </motion.div>
          )}
          {activeTab === 'reviews' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center h-40 text-zinc-400">
              <div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center mb-3">
                <Heart size={20} className="text-zinc-300" />
              </div>
              <span className="text-sm font-semibold">Reviews coming soon</span>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
