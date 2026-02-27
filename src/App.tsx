import { useState } from 'react';
import Home from './components/Home';
import BusinessProfile from './components/BusinessProfile';
import BottomNav from './components/BottomNav';
import SearchPage from './components/SearchPage';
import ProfilePage from './components/ProfilePage';
import ChatPage from './components/ChatPage';
import { Business } from './types';
import { AnimatePresence } from 'motion/react';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);

  return (
    <div className="w-full mx-auto bg-[#F9FAFB] min-h-screen relative shadow-2xl overflow-hidden">
      <AnimatePresence mode="wait">
        {selectedBusiness ? (
          <BusinessProfile 
            key="profile"
            business={selectedBusiness} 
            onBack={() => setSelectedBusiness(null)} 
          />
        ) : activeTab === 'search' ? (
          <SearchPage key="search" />
        ) : activeTab === 'profile' ? (
          <ProfilePage key="profile" />
        ) : activeTab === 'chat' ? (
          <ChatPage key="chat" onBack={() => setActiveTab('home')} />
        ) : activeTab === 'explore' || activeTab === 'campaign' ? (
          <div key={activeTab} className="pt-32 text-center text-zinc-500 font-medium">Yapım Aşamasında</div>
        ) : (
          <Home 
            key="home"
            onSelectBusiness={setSelectedBusiness} 
          />
        )}
      </AnimatePresence>
      
      {!selectedBusiness && activeTab !== 'chat' && (
        <button
          onClick={() => setActiveTab('chat')}
          className="fixed bottom-[85px] right-6 z-50 w-14 h-14 bg-zinc-900 rounded-full flex items-center justify-center text-white shadow-[0_8px_30px_rgba(0,0,0,0.2)] active:scale-95 transition-transform"
        >
          <MessageSquare size={24} />
        </button>
      )}
      
      {!selectedBusiness && activeTab !== 'chat' && (
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
    </div>
  );
}
