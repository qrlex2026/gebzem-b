import { Search, Coffee, ShoppingBag, Wrench, Car, LayoutGrid, Navigation, Bell, X, Utensils, Calendar, FileText, Home as HomeIcon, Briefcase, Cross, CreditCard, ParkingCircle, Hospital, Gift, Pizza, IceCream, Sandwich } from 'lucide-react';
import { popularBusinesses } from '../data';
import ListingCard from './ListingCard';
import { Business } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';

interface HomeProps {
  key?: React.Key;
  onSelectBusiness: (business: Business) => void;
}

const defaultCategories = [
  { id: 'eczane', icon: Cross, label: 'Eczane' },
  { id: 'atm', icon: CreditCard, label: 'ATM' },
  { id: 'taksi', icon: Car, label: 'Taksi' },
  { id: 'otopark', icon: ParkingCircle, label: 'Otopark' },
  { id: 'hastane', icon: Hospital, label: 'Hastane' },
];

const yemeCategories = [
  { id: 'doner', icon: Utensils, label: 'Döner' },
  { id: 'kebap', icon: Utensils, label: 'Kebap' },
  { id: 'pide', icon: Pizza, label: 'Pide' },
  { id: 'tatli', icon: IceCream, label: 'Tatlı' },
  { id: 'fastfood', icon: Sandwich, label: 'Fast Food' },
];

const allCategories = [
  { id: 'yeme', icon: Utensils, label: 'Yeme' },
  { id: 'restoran', icon: Coffee, label: 'Restoran' },
  { id: 'hizmetler', icon: Wrench, label: 'Hizmetler' },
  { id: 'etkinlikler', icon: Calendar, label: 'Etkinlikler' },
  { id: 'alisveris', icon: ShoppingBag, label: 'Alışveriş' },
  { id: 'taksi', icon: Car, label: 'Taksi' },
  { id: 'ilan', icon: FileText, label: 'İlan' },
  { id: 'emlak', icon: HomeIcon, label: 'Emlak' },
  { id: 'is', icon: Briefcase, label: 'İş İlanları' },
];

export default function Home({ onSelectBusiness }: HomeProps) {
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const displayCategories = selectedCategory === 'yeme' ? yemeCategories : defaultCategories;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="pb-32"
    >
      {/* Header */}
      <div className="px-6 pt-6 pb-6 max-w-7xl mx-auto flex items-center justify-between">
        <button 
          onClick={() => setShowCategories(true)}
          className="w-10 h-10 bg-white rounded-xl shadow-sm border border-zinc-100 flex items-center justify-center text-zinc-900 active:scale-95 transition-transform shrink-0"
        >
          <LayoutGrid size={20} />
        </button>

        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setSelectedCategory(null)}>
          <Navigation size={18} className="text-zinc-900" />
          <h1 className="text-[20px] font-bold text-zinc-900 tracking-tight">
            Gebze, Kocaeli
          </h1>
        </div>

        <button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-900 active:scale-95 transition-transform shrink-0">
          <Bell size={20} />
        </button>
      </div>

      {/* Search Bar */}
      <div className="px-6 mb-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 bg-white px-5 py-4 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
          <Search size={20} className="text-zinc-400" />
          <input 
            type="text" 
            placeholder="Kafe, hizmet ara..." 
            className="flex-1 bg-transparent outline-none text-zinc-900 placeholder:text-zinc-400 font-medium"
          />
        </div>
      </div>

      {/* Slider */}
      <div className="mb-8 w-full overflow-hidden">
        <div className="flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory px-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="w-[85vw] md:w-[400px] h-[180px] bg-zinc-100 rounded-[24px] p-6 flex flex-col justify-end snap-center shrink-0">
              <h1 className="text-xl font-bold text-zinc-900 mb-1">Özel Fırsat {item}</h1>
              <h3 className="text-sm font-medium text-zinc-500 line-clamp-2">Gebzem kullanıcılarına özel avantajları keşfedin.</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="px-6 mb-10 max-w-7xl mx-auto">
        <div className="flex justify-between items-center gap-4 overflow-x-auto pb-4 hide-scrollbar">
          {displayCategories.map((cat) => {
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

      {/* İndirimler & Yeni İşletmeler */}
      <div className="px-6 mb-10 max-w-7xl mx-auto">
        <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex flex-col items-center gap-3 min-w-[72px] cursor-pointer group">
            <div className="w-16 h-16 bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex items-center justify-center text-red-500 group-active:scale-95 transition-transform">
              <Gift size={24} strokeWidth={2} />
            </div>
            <span className="text-xs font-bold text-zinc-600">İndirimler</span>
          </div>
          <div className="flex flex-col items-center gap-3 min-w-[72px] cursor-pointer group">
            <div className="w-16 h-16 bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex items-center justify-center text-emerald-500 group-active:scale-95 transition-transform">
              <Briefcase size={24} strokeWidth={2} />
            </div>
            <span className="text-xs font-bold text-zinc-600">Yeni İşletmeler</span>
          </div>
        </div>
      </div>

      {/* Categories Modal */}
      <AnimatePresence>
        {showCategories && (
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed inset-0 z-[60] bg-white p-6 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-8 pt-6 max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-zinc-900">Kategoriler</h2>
              <button 
                onClick={() => setShowCategories(false)}
                className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-900 active:scale-95 transition-transform"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto">
              {allCategories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <div 
                    key={cat.id} 
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setShowCategories(false);
                    }}
                    className="flex flex-col items-center gap-3 cursor-pointer group"
                  >
                    <div className="w-20 h-20 bg-zinc-50 rounded-[24px] flex items-center justify-center text-zinc-900 group-active:scale-95 transition-transform">
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <span className="text-sm font-bold text-zinc-700">{cat.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
