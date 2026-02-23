import { useState } from 'react';
import Home from './components/Home';
import BusinessProfile from './components/BusinessProfile';
import BottomNav from './components/BottomNav';
import { Business } from './types';
import { AnimatePresence } from 'motion/react';

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
        ) : (
          <Home 
            key="home"
            onSelectBusiness={setSelectedBusiness} 
          />
        )}
      </AnimatePresence>
      
      {!selectedBusiness && (
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
    </div>
  );
}
