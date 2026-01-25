import React, { useState } from 'react';
import { PLAYERS } from '../../constants';
import { Player } from '../../types';
import { User, ChevronRight, Lock, Heart, Shield, Swords, Zap, Activity, Brain } from 'lucide-react';

const PlayerView: React.FC = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

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

        <div className="p-5 space-y-6">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PLAYERS.map((player) => (
          <div 
            key={player.id}
            onClick={() => setSelectedPlayer(player)}
            className="group relative h-32 glass-panel rounded-xl overflow-hidden cursor-pointer hover:border-purple-500 transition-colors"
          >
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
               <User className="w-24 h-24 text-white" />
            </div>
            
            <div className="relative h-full p-4 flex flex-col justify-between z-10">
              <div>
                <span className="text-purple-400 text-xs font-bold tracking-widest block mb-1">{player.role}</span>
                <h3 className="text-2xl font-black text-white">{player.name}</h3>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">{player.realName.split('(')[0]}</span>
                <ChevronRight className="w-5 h-5 text-purple-500 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerView;