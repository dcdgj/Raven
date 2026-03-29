import React from 'react';
import { Play, ChevronRight, Monitor, Sparkles, Shield, Zap } from 'lucide-react';
import { motion } from 'motion/react';

interface Props {
  onStart: () => void;
}

const StartScreen: React.FC<Props> = ({ onStart }) => {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 overflow-hidden font-sans select-none">
      {/* Immersive Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Layered Gradients for Depth */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] bg-[radial-gradient(circle_at_30%_30%,#3b0764_0%,transparent_50%)] blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-1/4 -right-1/4 w-[150%] h-[150%] bg-[radial-gradient(circle_at_70%_70%,#1e1b4b_0%,transparent_50%)] blur-[120px]" 
        />
        
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
        
        {/* Scanning Line Effect */}
        <motion.div 
          animate={{ translateY: ['-100%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-full h-1/4 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none"
        />
      </div>

      {/* HUD Accents */}
      <div className="absolute top-10 left-10 flex flex-col gap-1 opacity-40">
        <div className="w-12 h-px bg-purple-500" />
        <div className="w-8 h-px bg-purple-500/50" />
        <span className="text-[8px] text-purple-400 font-mono tracking-widest mt-2 uppercase">System: Active</span>
      </div>
      <div className="absolute bottom-10 right-10 flex flex-col items-end gap-1 opacity-40">
        <span className="text-[8px] text-purple-400 font-mono tracking-widest mb-2 uppercase">Loc: Seoul HQ</span>
        <div className="w-8 h-px bg-purple-500/50" />
        <div className="w-12 h-px bg-purple-500" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-4xl px-6">
        
        {/* Top Meta Label */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
            <span className="text-[10px] text-gray-400 tracking-[0.3em] uppercase font-bold">Terminal Access Required</span>
          </div>
        </motion.div>

        {/* Main Branding Section */}
        <div className="text-center relative mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <h1 className="text-[10rem] md:text-[14rem] leading-none font-black tracking-tighter text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              RG
            </h1>
            
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="space-y-4"
              >
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight uppercase font-orbitron">
                  Raven <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-purple-700">Gaming</span>
                </h2>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500/50" />
                  <p className="text-purple-400 text-sm tracking-[0.4em] uppercase font-light">
                    Flight to the Unknown
                  </p>
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500/50" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Action Button Area */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full max-w-sm"
        >
          <button 
            onClick={onStart}
            className="group relative w-full py-6 px-8 bg-neutral-900/40 backdrop-blur-xl overflow-hidden rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 shadow-2xl"
          >
            {/* Hover Fill Effect - Kept as requested */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-900 to-purple-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            
            <div className="relative flex items-center justify-between">
              <div className="flex flex-col items-start text-left">
                <span className="text-[10px] text-gray-500 group-hover:text-purple-200 transition-colors uppercase tracking-widest font-bold mb-1">Authorization</span>
                <span className="text-white font-black text-2xl tracking-tight group-hover:translate-x-1 transition-transform">INITIALIZE</span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/20 transition-colors border border-white/10 group-hover:rotate-90 transition-transform duration-500">
                <Play className="w-5 h-5 text-white fill-current ml-0.5" />
              </div>
            </div>
          </button>
          
          {/* Footer Info */}
          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="flex justify-center gap-8 text-[9px] text-gray-600 uppercase tracking-[0.3em] font-mono">
              <span className="hover:text-purple-500/50 transition-colors cursor-default">Est. 2019</span>
              <span className="hover:text-purple-500/50 transition-colors cursor-default">Seoul HQ</span>
              <span className="hover:text-purple-500/50 transition-colors cursor-default">V 2.5.0</span>
            </div>
            
            {/* Subtle progress bar decoration */}
            <div className="w-32 h-0.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-1/2 h-full bg-purple-500/30"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Ambient Dust Particles (Visual Polish) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.2
            }}
            animate={{ 
              y: [null, (Math.random() * -20 - 10) + "%"],
              opacity: [null, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 10
            }}
            className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
          />
        ))}
      </div>
    </div>
  );
};

export default StartScreen;