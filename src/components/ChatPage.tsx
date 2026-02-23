import { motion } from 'motion/react';
import { ArrowUp, Mic } from 'lucide-react';

export default function ChatPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="pb-32 px-6 pt-12 max-w-7xl mx-auto min-h-screen flex flex-col"
    >
      <div className="flex items-center gap-3 mb-6">
        <h1 className="text-2xl font-bold text-zinc-900 tracking-tight">GebzemAI</h1>
      </div>
      
      <div className="flex-1 bg-white rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-6 flex flex-col">
        <div className="flex-1 flex flex-col gap-4">
          <div className="bg-zinc-100 rounded-2xl rounded-tl-none p-4 self-start max-w-[80%]">
            <p className="text-sm text-zinc-900 font-medium">Merhaba! Ben GebzemAI. Size nasıl yardımcı olabilirim?</p>
          </div>
        </div>
        
        <div className="mt-4 flex items-center gap-3 bg-transparent px-4 py-3 rounded-full border border-zinc-200">
          <button className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-600 active:scale-95 transition-transform shrink-0">
            <Mic size={20} />
          </button>
          <input 
            type="text" 
            placeholder="Mesajınızı yazın..." 
            className="flex-1 bg-transparent outline-none text-zinc-900 placeholder:text-zinc-400 text-sm font-medium"
          />
          <button className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-900 active:scale-95 transition-transform shrink-0">
            <ArrowUp size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
