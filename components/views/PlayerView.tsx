import React, { useState, useEffect, useRef } from 'react';
import { PLAYERS } from '../../constants';
import { Player } from '../../types';
import { User, ChevronRight, Lock, Heart, Shield, Swords, Zap, Activity, Brain } from 'lucide-react';

const PlayerView: React.FC = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    if (selectedPlayer) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, scrollPositionRef.current);
    }
  }, [selectedPlayer]);

  if (selectedPlayer) {
    // Detail View
    return (
      <div className="min-h-full pb-24 bg-neutral-950 animate-in slide-in-from-right duration-300">
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-neutral-950/80 backdrop-blur-md border-b border-gray-800 p-4 flex items-center gap-3">
          <button onClick={() => setSelectedPlayer(null)} className="text-gray-400 hover:text-white">
            <ChevronRight className="w-6 h-6 rotate-180" />
          </button>
          <span className="font-bold text-xl text-white">{selectedPlayer.name}</span>
          <span className="text-xs px-2 py-0.5 rounded bg-purple-900 text-purple-200">{selectedPlayer.role}</span>
        </div>

        {/* Player Image (Full Bleed - No Padding) */}
        {selectedPlayer.imageUrl && (
            <div className="w-full relative animate-in zoom-in-95 duration-500">
              <img 
                src={selectedPlayer.imageUrl} 
                alt={selectedPlayer.name}
                className="w-full h-auto object-cover block" 
              />
              {/* Subtle gradient at the bottom to blend into the content area */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none" />
            </div>
        )}

        <div className="p-5 space-y-6 relative z-10">
          {/* Profile Basic */}
          <section className="space-y-4">
            <h3 className="text-purple-400 text-xs uppercase tracking-widest font-bold">Identity</h3>
            <div className="glass-panel p-4 rounded-xl space-y-3 text-sm">
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-500">Real Name</span>
                <span className="text-white font-medium">{selectedPlayer.realName}</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-500">Birth</span>
                <span className="text-white">{selectedPlayer.birth}</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-500">Body</span>
                <span className="text-white text-right">{selectedPlayer.appearance}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Style</span>
                <span className="text-white">{selectedPlayer.outfit}</span>
              </div>
            </div>
            
            <div className="flex gap-2">
               <div className="bg-neutral-900 rounded-lg p-3 flex-1 border border-gray-800 text-center">
                 <div className="text-gray-500 text-xs mb-1">MBTI</div>
                 <div className="text-purple-400 font-bold">{selectedPlayer.mbti}</div>
               </div>
               <div className="bg-neutral-900 rounded-lg p-3 flex-1 border border-gray-800 text-center">
                 <div className="text-gray-500 text-xs mb-1">Enneagram</div>
                 <div className="text-purple-400 font-bold">{selectedPlayer.enneagram}</div>
               </div>
            </div>
          </section>

          {/* Personality */}
          <section className="space-y-2">
             <h3 className="text-purple-400 text-xs uppercase tracking-widest font-bold">Personality</h3>
             <div className="flex flex-wrap gap-2">
                {selectedPlayer.personality.split('+').map((p, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-xs">{p.trim()}</span>
                ))}
             </div>
          </section>

          {/* In-Game Analysis */}
          <section className="space-y-4">
             <h3 className="text-purple-400 text-xs uppercase tracking-widest font-bold">Performance Analysis</h3>
             <div className="glass-panel rounded-xl p-5 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold">
                    <Swords className="w-4 h-4 text-red-400" /> Playstyle
                  </div>
                  <ul className="list-disc list-inside text-sm text-gray-400 space-y-1 pl-1">
                    {selectedPlayer.traits.map((t, i) => <li key={i}>{t}</li>)}
                  </ul>
                </div>
                
                {selectedPlayer.weaknesses.length > 0 && (
                  <div className="space-y-2 pt-4 border-t border-gray-700">
                    <div className="flex items-center gap-2 text-white font-bold">
                      <Shield className="w-4 h-4 text-blue-400" /> Weakness
                    </div>
                    <ul className="list-disc list-inside text-sm text-gray-400 space-y-1 pl-1">
                      {selectedPlayer.weaknesses.map((t, i) => <li key={i}>{t}</li>)}
                    </ul>
                  </div>
                )}

                {selectedPlayer.signatures && (
                  <div className="space-y-2 pt-4 border-t border-gray-700">
                    <div className="flex items-center gap-2 text-white font-bold">
                      <Zap className="w-4 h-4 text-yellow-400" /> Signature Picks
                    </div>
                    <div className="flex gap-2">
                       {selectedPlayer.signatures.map(c => (
                         <span key={c} className="px-2 py-1 bg-yellow-900/20 text-yellow-500 border border-yellow-500/30 rounded text-xs">{c}</span>
                       ))}
                    </div>
                  </div>
                )}
             </div>
          </section>

          {/* Secret / Private Files */}
          <section className="space-y-4">
             <h3 className="text-purple-400 text-xs uppercase tracking-widest font-bold flex items-center gap-2">
               <Lock className="w-3 h-3" /> Confidential Files
             </h3>
             <div className="bg-neutral-900 border border-purple-900/30 rounded-xl p-4">
                <ul className="space-y-3">
                   {selectedPlayer.secret.map((s, i) => {
                     const isHidden = s.startsWith("HIDDEN:");
                     return (
                       <li key={i} className={`text-sm flex gap-3 ${isHidden ? 'text-red-400 font-medium' : 'text-gray-300'}`}>
                          <Activity className="w-4 h-4 min-w-[16px] mt-0.5 opacity-50" />
                          <span>{isHidden ? s.replace("HIDDEN:", "[1급 기밀]") : s}</span>
                       </li>
                     );
                   })}
                   <li className="text-sm flex gap-3 text-purple-300">
                      <Heart className="w-4 h-4 min-w-[16px] mt-0.5 opacity-70" />
                      <span>{selectedPlayer.contract}</span>
                   </li>
                </ul>
             </div>
          </section>

          {selectedPlayer.transferHistory && (
             <p className="text-center text-xs text-gray-600">
               Transfer History: {selectedPlayer.transferHistory}
             </p>
          )}
        </div>
      </div>
    );
  }

  // List View
  return (
    <div className="p-6 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-3xl font-black text-white mb-6">ROSTER 2025</h2>
      {/* Changed to strictly single column grid with larger gap */}
      <div className="grid grid-cols-1 gap-6">
        {PLAYERS.map((player) => (
          <div 
            key={player.id}
            onClick={() => {
              scrollPositionRef.current = window.scrollY;
              setSelectedPlayer(player);
            }}
            // Increased height to h-64 (approx 256px) for more impact
            className="group relative h-64 glass-panel rounded-2xl overflow-hidden cursor-pointer hover:border-purple-500 transition-all duration-300"
          >
            {/* Expanded Image Area */}
            <div className="absolute right-0 top-0 bottom-0 w-3/4 pointer-events-none overflow-hidden">
                {player.imageUrl ? (
                  <>
                    <img 
                        src={player.imageUrl} 
                        alt={player.name} 
                        // Adjusted object positioning to work well with the wider area
                        className="absolute right-[-10%] top-0 w-full h-full object-cover object-top opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 [mask-image:linear-gradient(to_left,black_60%,transparent_100%)]" 
                    />
                  </>
                ) : (
                  <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                      <User className="w-40 h-40 text-white" />
                  </div>
                )}
            </div>
            
            <div className="relative h-full p-6 flex flex-col justify-between z-10 w-2/3">
              <div className="space-y-2">
                <span className="inline-block px-2 py-1 bg-purple-900/50 rounded text-purple-300 text-xs font-bold tracking-widest border border-purple-500/30">
                  {player.role}
                </span>
                <h3 className="text-4xl font-black text-white tracking-tighter uppercase drop-shadow-lg">
                  {player.name}
                </h3>
                <p className="text-gray-400 text-sm font-medium line-clamp-1">
                  {player.realName.split('(')[0]}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500 font-mono">View Profile</span>
                <ChevronRight className="w-4 h-4 text-purple-500 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerView;