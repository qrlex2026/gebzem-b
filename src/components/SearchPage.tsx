import { motion } from 'motion/react';
import { Search } from 'lucide-react';

export default function SearchPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="pb-32 px-6 pt-6 max-w-7xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-zinc-900 tracking-tight mb-6">Arama</h1>
      <div className="flex items-center gap-3 bg-white px-5 py-4 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
        <Search size={20} className="text-zinc-400" />
        <input 
          type="text" 
          placeholder="Ne arıyorsunuz?" 
          className="flex-1 bg-transparent outline-none text-zinc-900 placeholder:text-zinc-400 font-medium"
        />
      </div>
      <div className="mt-8 flex flex-col items-center justify-center h-40 text-zinc-400">
        <span className="text-sm font-semibold">Arama sonuçları burada görünecek</span>
      </div>
    </motion.div>
  );
}
