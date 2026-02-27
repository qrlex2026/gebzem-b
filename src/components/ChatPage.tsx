import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Plus, Mic, Sparkles, Plane, MapPin, Music, Send, Coffee, Utensils, Cross, ShoppingBag, Wrench } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
}

interface ChatPageProps {
  key?: React.Key;
  onBack: () => void;
}

export default function ChatPage({ onBack }: ChatPageProps) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    { icon: <Sparkles size={14} />, text: 'Bana eğlenceli bir hikaye anlat' },
    { icon: <Plane size={14} />, text: 'Bir gezi planla' },
    { icon: <MapPin size={14} />, text: 'Gebze\'de gezilecek yerler' },
    { icon: <Music size={14} />, text: 'Rahatlatıcı bir müzik öner' },
    { icon: <Coffee size={14} />, text: 'En iyi kahveciler' },
    { icon: <Utensils size={14} />, text: 'Akşam yemeği önerisi' },
    { icon: <Cross size={14} />, text: 'Nöbetçi eczaneler' },
    { icon: <ShoppingBag size={14} />, text: 'Alışveriş merkezleri' },
    { icon: <Wrench size={14} />, text: 'Hizmet randevusu al' },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isBot: false,
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: `"${input}" ile ilgili size nasıl yardımcı olabilirim? Gebze hakkında her şeyi bana sorabilirsiniz.`,
        isBot: true,
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen flex flex-col overflow-hidden font-sans"
      style={{
        background: 'linear-gradient(to bottom, #FFFFFF 35%, #9B9CF2 75%, #838DF2 100%)'
      }}
    >
      {/* Noise Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.07] mix-blend-overlay">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Header */}
      <header className="relative z-10 px-6 pt-12 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center text-zinc-900 active:scale-95 transition-transform"
        >
          <ArrowLeft size={24} />
        </button>
        
        <div className="w-10" /> {/* Spacer */}
      </header>

      {/* Content Area */}
      <main className="flex-1 flex flex-col px-6 relative z-10 overflow-y-auto hide-scrollbar pt-8">
        <AnimatePresence mode="popLayout">
          {messages.length === 0 ? (
            <motion.div 
              key="hero"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex-1 flex flex-col items-center justify-center text-center py-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight tracking-tight mb-3">
                Merhaba Gebzeli
              </h1>
              <p className="text-sm md:text-base text-zinc-600 font-medium">
                Bugün nasıl yardımcı olabilirim?
              </p>

              {/* Suggestion Chips */}
              <div className="mt-12 w-full overflow-x-auto hide-scrollbar -mx-6">
                <div className="flex gap-3 px-6 min-w-max pb-4">
                  {suggestions.map((item, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      onClick={() => setInput(item.text)}
                      className="px-4 py-2.5 bg-white rounded-full border border-zinc-100 shadow-sm flex items-center gap-2 text-xs font-medium text-zinc-700 hover:bg-zinc-50 active:scale-95 transition-all"
                    >
                      <span className="text-zinc-400">{item.icon}</span>
                      {item.text}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="flex flex-col gap-4 pb-8">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`max-w-[85%] p-4 rounded-[24px] text-sm font-medium shadow-sm ${
                    msg.isBot 
                      ? 'bg-white text-zinc-900 self-start rounded-tl-none' 
                      : 'bg-[#4F46E5] text-white self-end rounded-tr-none'
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          )}
        </AnimatePresence>
      </main>

      {/* Chat Bar */}
      <footer className="relative z-10 px-6 pb-10 pt-4">
        <div className="max-w-3xl mx-auto relative flex items-center bg-white rounded-[20px] p-3 shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-zinc-100">
          <button className="w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-zinc-600 active:scale-90 transition-transform">
            <Plus size={22} />
          </button>
          
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Sorularınız mı var?..." 
            className="flex-1 bg-transparent outline-none px-3 text-zinc-900 placeholder:text-zinc-300 font-medium"
          />

          <button 
            onClick={handleSend}
            className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg active:scale-90 transition-transform ${
              input.trim() ? 'bg-[#4F46E5]' : 'bg-zinc-200'
            }`}
          >
            {input.trim() ? <Send size={20} /> : <Mic size={22} />}
          </button>
        </div>
      </footer>
    </motion.div>
  );
}
