import React from 'react';
import { Play, ChevronRight, Monitor } from 'lucide-react';

interface Props {
  onStart: () => void;
}

const StartScreen: React.FC<Props> = ({ onStart }) => {
  return (
    <div className="fixed inset-0 bg-neutral-950 flex flex-col items-center justify-center z-50 overflow-hidden font-sans">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)" />
        
        {/* Moving Ambient Light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-purple-900/10 to-transparent opacity-50" />
      </div>

      {/* Decorative Corners (HUD Style) */}
      <div className="absolute top-6 left-6 w-32 h-32 border-l border-t border-purple-500/30 rounded-tl-3xl z-10" />
      <div className="absolute bottom-6 right-6 w-32 h-32 border-r border-b border-purple-500/30 rounded-br-3xl z-10" />
      
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center space-y-12 w-full max-w-lg px-6">
        
        {/* Top Label */}
        <div className="flex flex-col items-center space-y-4 animate-in fade-in slide-in-from-top-8 duration-1000">
           <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-900/10 backdrop-blur-sm">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             <span className="text-[10px] text-purple-200 tracking-widest uppercase font-semibold">System Online</span>
           </div>
        </div>

        {/* Main Logo Area */}
        <div className="text-center space-y-1 relative animate-in zoom-in-95 duration-1000 delay-150">
          <p className="text-gray-500 tracking-[0.5em] text-xs uppercase font-medium mb-2">Seoul • LKL • eSports</p>
          
          <h1 className="text-[8rem] md:text-[10rem] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 drop-shadow-[0_0_25px_rgba(168,85,247,0.4)] select-none">
            RG
          </h1>
          
          <div className="h-px w-24 mx-auto bg-purple-500/50 my-6" />
          
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-widest uppercase">
            Raven Gaming
          </h2>
          <p className="text-purple-400/80 font-light italic text-sm tracking-wide">
            "Flight to the Unknown"
          </p>
        </div>

        {/* Interaction Area */}
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 w-full max-w-xs">
          <button 
            onClick={onStart}
            className="group relative w-full py-5 px-6 bg-transparent overflow-hidden rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-500"
          >
            {/* Hover Fill Effect */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-900/80 to-purple-800/80 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            
            <div className="relative flex items-center justify-between">
              <div className="flex flex-col items-start">
                <span className="text-xs text-gray-400 group-hover:text-purple-200 transition-colors uppercase tracking-wider mb-1">Access Terminal</span>
                <span className="text-white font-bold text-lg tracking-wide group-hover:translate-x-1 transition-transform">ENTER</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/20 transition-colors border border-white/10">
                <Play className="w-4 h-4 text-white fill-current ml-0.5 group-hover:scale-110 transition-transform" />
              </div>
            </div>
          </button>
          
          <div className="mt-6 flex justify-center gap-6 text-[10px] text-gray-600 uppercase tracking-widest font-mono">
            <span>Est. 2019</span>
            <span>•</span>
            <span>Seoul HQ</span>
            <span>•</span>
            <span>V 2.5.0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;