import React from 'react';
import { Play } from 'lucide-react';

interface Props {
  onStart: () => void;
}

const StartScreen: React.FC<Props> = ({ onStart }) => {
  return (
    <div className="fixed inset-0 bg-neutral-950 flex flex-col items-center justify-center z-50 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-neutral-950 to-neutral-950" />
      
      {/* Content */}
      <div className="relative z-10 text-center space-y-8 animate-in fade-in duration-1000 slide-in-from-bottom-10">
        <div className="space-y-2">
          <p className="text-purple-400 tracking-[0.3em] text-sm uppercase">Raven Gaming</p>
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-600 tracking-tighter">
            RG
          </h1>
          <p className="text-gray-500 font-light italic">Flight to the Crown</p>
        </div>

        <button 
          onClick={onStart}
          className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full border border-purple-500/30 hover:border-purple-500 transition-all duration-300"
        >
          <div className="absolute inset-0 w-full h-full bg-purple-600/10 group-hover:bg-purple-600/20 transition-all" />
          <div className="relative flex items-center gap-3 text-purple-100">
            <span className="uppercase tracking-widest text-sm font-semibold">Enter Access</span>
            <Play className="w-4 h-4 fill-current" />
          </div>
        </button>
      </div>

      {/* Decorative Lines */}
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-purple-900/50 to-transparent" />
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-purple-900/50 to-transparent" />
    </div>
  );
};

export default StartScreen;