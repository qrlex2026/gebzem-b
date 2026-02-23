import { Home, Search, ShoppingBag, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function BottomNav({ activeTab, setActiveTab }: BottomNavProps) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'explore', icon: Search, label: 'Explore' },
    { id: 'orders', icon: ShoppingBag, label: 'Orders' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-6 pb-8 pt-4 bg-white/80 backdrop-blur-xl border-t border-zinc-100">
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
