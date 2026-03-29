import React, { useState, useEffect, useRef } from 'react';
import { PLAYERS } from '../../constants';
import { Player } from '../../types';
import { 
  User, ChevronRight, ChevronLeft, Lock, Heart, Shield, Swords, Zap, Activity, Brain, 
  Tv, Headphones, Gamepad2, Flag, Shirt, Camera, Dumbbell, BookOpen, Sparkles,
  PawPrint
} from 'lucide-react';

const getHobbyIcon = (hobby: string) => {
  const h = hobby.toLowerCase();
  if (h.includes('ott') || h.includes('시청') || h.includes('영화') || h.includes('드라마')) return <Tv className="w-4 h-4" />;
  if (h.includes('음악') || h.includes('음반') || h.includes('노래')) return <Headphones className="w-4 h-4" />;
  if (h.includes('산책') || h.includes('여행')) return <Activity className="w-4 h-4" />;
  if (h.includes('게임')) return <Gamepad2 className="w-4 h-4" />;
  if (h.includes('f1') || h.includes('레이싱')) return <Flag className="w-4 h-4" />;
  if (h.includes('패션') || h.includes('옷')) return <Shirt className="w-4 h-4" />;
  if (h.includes('sns') || h.includes('인스타') || h.includes('사진')) return <Camera className="w-4 h-4" />;
  if (h.includes('운동') || h.includes('헬스') || h.includes('축구') || h.includes('농구')) return <Dumbbell className="w-4 h-4" />;
  if (h.includes('독서') || h.includes('책')) return <BookOpen className="w-4 h-4" />;
  return <Sparkles className="w-4 h-4" />;
};

const PlayerView: React.FC = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    if (selectedPlayer) {
      setCurrentImageIndex(0);
    }
  }, [selectedPlayer]);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (!selectedPlayer) return;
      const mainElement = document.querySelector('main');
      if (mainElement && !mainElement.contains(e.target as Node)) {
        setSelectedPlayer(null);
      }
    };

    if (selectedPlayer) {
      // Small delay to prevent the opening click from triggering the close
      const timeout = setTimeout(() => {
        window.addEventListener('click', handleOutsideClick);
      }, 10);
      return () => {
        clearTimeout(timeout);
        window.removeEventListener('click', handleOutsideClick);
      };
    }
  }, [selectedPlayer]);

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

        {/* Player Image Slider */}
        {selectedPlayer.imageUrls && selectedPlayer.imageUrls.length > 0 && (
            <div className="w-full relative animate-in zoom-in-95 duration-500 overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
              >
                {selectedPlayer.imageUrls.map((url, idx) => (
                  <img 
                    key={idx}
                    src={url} 
                    alt={`${selectedPlayer.name} ${idx + 1}`}
                    className="w-full h-auto flex-shrink-0 block" 
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              
              {/* Navigation Arrows */}
              {selectedPlayer.imageUrls.length > 1 && (
                <>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(prev => (prev === 0 ? selectedPlayer.imageUrls.length - 1 : prev - 1));
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-purple-600/60 transition-all z-10"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(prev => (prev === selectedPlayer.imageUrls.length - 1 ? 0 : prev + 1));
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-purple-600/60 transition-all z-10"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Indicators */}
              {selectedPlayer.imageUrls.length > 1 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {selectedPlayer.imageUrls.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`h-1 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-6 bg-purple-500' : 'w-2 bg-white/30'}`}
                    />
                  ))}
                </div>
              )}

              {/* Subtle gradient at the bottom to blend into the content area */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none z-0" />
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
                <span className="text-gray-500">Appearance</span>
                <span className="text-white text-right">{selectedPlayer.appearance}</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-500">Height</span>
                <span className="text-white text-right">{selectedPlayer.height}</span>
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

          {/* Contract & Transfer */}
          <section className="space-y-2">
             <h3 className="text-purple-400 text-xs uppercase tracking-widest font-bold">Contract & Status</h3>
             <div className="glass-panel p-4 rounded-xl space-y-3 text-sm">
                <div className="flex justify-between items-start gap-4 border-b border-gray-800 pb-2">
                  <span className="text-gray-500 whitespace-nowrap">Contract</span>
                  <span className="text-white text-right">{selectedPlayer.contract}</span>
                </div>
                {selectedPlayer.pastExperience ? (
                  <div className="flex justify-between items-start gap-4">
                    <span className="text-gray-500 whitespace-nowrap">Career</span>
                    <span className="text-white text-right">{selectedPlayer.pastExperience}</span>
                  </div>
                ) : selectedPlayer.transferHistory && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Transfer</span>
                    <span className="text-white">{selectedPlayer.transferHistory}</span>
                  </div>
                )}
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

          {/* Features */}
          <section className="space-y-4">
             <h3 className="text-purple-400 text-xs uppercase tracking-widest font-bold flex items-center gap-2">
               <Brain className="w-3 h-3" /> Player Features
             </h3>
             <div className="bg-neutral-900 border border-purple-900/30 rounded-xl p-4">
                <ul className="space-y-3">
                   {selectedPlayer.features.map((s, i) => {
                     const isHidden = s.startsWith("HIDDEN:");
                     return (
                       <li key={i} className={`text-sm flex gap-3 items-start ${isHidden ? 'text-red-400 font-medium' : 'text-gray-300'}`}>
                          <Activity className="w-4 h-4 min-w-[16px] mt-0.5 opacity-50 flex-shrink-0" />
                          <span>{isHidden ? s.replace("HIDDEN:", "[1급 기밀]") : s}</span>
                       </li>
                     );
                   })}
                </ul>
             </div>
          </section>

          {/* Pet */}
          {selectedPlayer.pet && (
            <section className="space-y-4">
              <h3 className="text-purple-400 text-xs uppercase tracking-widest font-bold flex items-center gap-2">
                <PawPrint className="w-3 h-3" /> Companion
              </h3>
              <div className="bg-neutral-900/40 border border-purple-500/20 rounded-2xl p-5 relative overflow-hidden group">
                {/* Decorative background icon */}
                <PawPrint className="absolute -right-4 -bottom-4 w-24 h-24 text-purple-500/5 rotate-12 group-hover:scale-110 transition-transform duration-500" />
                
                <div className="relative z-10 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-400">
                        <PawPrint className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg">{selectedPlayer.pet.name}</div>
                        <div className="text-purple-400 text-xs font-medium">{selectedPlayer.pet.type} • {selectedPlayer.pet.age}</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-400 leading-relaxed bg-black/20 p-3 rounded-xl border border-white/5">
                    {selectedPlayer.pet.description}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Hobby */}
          <section className="space-y-4">
             <h3 className="text-purple-400 text-xs uppercase tracking-widest font-bold flex items-center gap-2">
               <Sparkles className="w-3 h-3" /> Lifestyle & Hobbies
             </h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedPlayer.hobby && selectedPlayer.hobby !== '공백' ? (
                  selectedPlayer.hobby.split(/,(?![^(]*\))/).map((h, i) => {
                    const hobbyText = h.trim();
                    return (
                      <div 
                        key={i} 
                        className="flex items-center gap-3 p-3 bg-neutral-900/40 border border-white/5 rounded-2xl hover:border-purple-500/30 transition-all duration-300 group"
                      >
                        <div className="w-9 h-9 rounded-xl bg-purple-900/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                          {getHobbyIcon(hobbyText)}
                        </div>
                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors font-medium">{hobbyText}</span>
                      </div>
                    );
                  })
                ) : (
                  <div className="col-span-full text-gray-600 text-sm italic p-4 border border-dashed border-gray-800 rounded-2xl text-center">
                    No hobbies listed
                  </div>
                )}
             </div>
          </section>

          {/* Back Button for Mobile */}
          <div className="pt-8 pb-12 flex justify-center">
            <button 
              onClick={() => setSelectedPlayer(null)}
              className="flex items-center gap-2 px-6 py-3 bg-neutral-900 border border-gray-800 rounded-full text-gray-400 hover:text-white hover:border-purple-500 transition-all group"
            >
              <ChevronRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-bold tracking-widest uppercase">Back to Roster</span>
            </button>
          </div>

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
                {player.imageUrls && player.imageUrls.length > 0 ? (
                  <>
                    <img 
                        src={player.imageUrls[0]} 
                        alt={player.name} 
                        // Adjusted object positioning to work well with the wider area
                        className="absolute right-[-10%] top-0 w-full h-full object-cover object-top opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 [mask-image:linear-gradient(to_left,black_60%,transparent_100%)]" 
                        referrerPolicy="no-referrer"
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