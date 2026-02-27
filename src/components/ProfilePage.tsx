import { motion } from 'motion/react';
import { User } from 'lucide-react';

export default function ProfilePage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="pb-32 px-6 pt-6 max-w-7xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-zinc-900 tracking-tight mb-6">Profil</h1>
      <div className="bg-white rounded-[24px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex items-center gap-4">
        <div className="w-16 h-16 bg-zinc-200 rounded-full flex items-center justify-center text-zinc-500 shrink-0">
          <User size={32} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-zinc-900">Kullanıcı Adı</h2>
          <p className="text-sm text-zinc-500 font-medium">kullanici@gebzem.com</p>
        </div>
      </div>
    </motion.div>
  );
}
