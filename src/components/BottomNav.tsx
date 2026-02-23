import { Search, Compass, Tag, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function BottomNav({ activeTab, setActiveTab }: BottomNavProps) {
  const navItems = [
    { id: 'search', icon: Search, label: 'Arama' },
    { id: 'explore', icon: Compass, label: 'Keşfet' },
    { id: 'campaign', icon: Tag, label: 'Kampanya' },
    { id: 'profile', icon: User, label: 'Profil' },
  ];

  return (
    <div className="fixed bottom-[15px] left-4 right-4 z-50 px-6 py-3 bg-white/70 backdrop-blur-2xl border border-zinc-100 rounded-[15px] shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-1.5 transition-colors ${
                isActive ? 'text-zinc-900' : 'text-zinc-400 hover:text-zinc-600'
              }`}
            >
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-bold tracking-wide">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
