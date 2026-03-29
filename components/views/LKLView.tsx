import React, { useState } from 'react';
import { MapPin, Calendar, Trophy } from 'lucide-react';
import { TEAM_ASSETS } from '../../constants';

const LKLView: React.FC = () => {
  return (
    <div className="p-6 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-24">
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-black text-white tracking-tighter">LKL</h2>
        <p className="text-gray-400 text-sm">League of Legends Korea League</p>
      </div>

      <div className="glass-panel rounded-2xl p-6 space-y-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-purple-900/20 rounded-xl text-purple-400">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">대한민국 e스포츠의 정점</h3>
            <p className="text-gray-400 text-sm mt-1">
              국내 1군 LoL 프로 리그.<br/>
              국내 최고의 실력을 가진 선수들이 경쟁하는 무대.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-purple-900/20 rounded-xl text-purple-400">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">서울 LKL 아레나</h3>
            <p className="text-gray-400 text-sm mt-1">
              모든 경기는 서울에 위치한 전용 경기장에서 진행됩니다.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-purple-900/20 rounded-xl text-purple-400">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">경기 일정</h3>
            <p className="text-gray-400 text-sm mt-1">
              수요일 ~ 일요일<br/>
              1경기: 17:00 | 2경기: 19:00<br/>
              <span className="text-purple-400 text-xs">한 팀당 매주 두 번의 경기</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Pro Gamer Reaction Test Mini-game */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Pro Training: Reaction Test</h3>
          <span className="text-[10px] text-purple-500 font-mono animate-pulse">SYSTEM ACTIVE</span>
        </div>
        
        <ReactionTest />
      </div>
    </div>
  );
};

const ReactionTest: React.FC = () => {
  const [state, setState] = useState<'IDLE' | 'WAITING' | 'READY' | 'RESULT'>('IDLE');
  const [startTime, setStartTime] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);
  const [showGuide, setShowGuide] = useState(false);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  const startTest = () => {
    setState('WAITING');
    setResult(null);
    setShowGuide(false);
    const delay = Math.floor(Math.random() * 3000) + 2000; // 2-5 seconds
    timerRef.current = setTimeout(() => {
      setState('READY');
      setStartTime(Date.now());
    }, delay);
  };

  const handleClick = () => {
    if (state === 'WAITING') {
      if (timerRef.current) clearTimeout(timerRef.current);
      setState('RESULT');
      setResult(-1); // Too early
    } else if (state === 'READY') {
      const endTime = Date.now();
      setResult(endTime - startTime);
      setState('RESULT');
    }
  };

  return (
    <div 
      onClick={state === 'IDLE' || state === 'RESULT' ? undefined : handleClick}
      className={`relative w-full h-48 rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer flex flex-col items-center justify-center group
        ${state === 'IDLE' ? 'border-purple-500/20 bg-black/40 hover:bg-purple-900/10' : ''}
        ${state === 'WAITING' ? 'border-yellow-500/40 bg-yellow-900/10' : ''}
        ${state === 'READY' ? 'border-green-500/60 bg-green-500/20' : ''}
        ${state === 'RESULT' ? 'border-purple-500/40 bg-black/60' : ''}
      `}
    >
      {/* Background Grid Decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #a855f7 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

      {state === 'IDLE' && (
        <div className="text-center space-y-4 z-10" onClick={(e) => { e.stopPropagation(); startTest(); }}>
          <div className="w-16 h-16 rounded-full border-2 border-purple-500/30 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
              <div className="w-4 h-4 bg-purple-500 rounded-sm rotate-45" />
            </div>
          </div>
          <div>
            <p className="text-white font-bold">TEST YOUR REFLEXES</p>
            <p className="text-gray-500 text-[10px] uppercase tracking-tighter">Click to start training</p>
          </div>
          <button className="px-6 py-2 bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/50 rounded-full text-xs font-bold text-white transition-colors">
            INITIALIZE
          </button>
        </div>
      )}

      {state === 'WAITING' && (
        <div className="text-center space-y-2 z-10">
          <p className="text-yellow-500 font-black text-2xl animate-pulse">WAIT FOR GREEN...</p>
          <p className="text-yellow-500/50 text-[10px] uppercase">Don't click too early</p>
        </div>
      )}

      {state === 'READY' && (
        <div className="text-center space-y-2 z-10">
          <p className="text-green-400 font-black text-5xl animate-bounce">CLICK!</p>
        </div>
      )}

      {state === 'RESULT' && (
        <div className="text-center space-y-4 z-10 w-full px-6">
          {!showGuide ? (
            <>
              {result === -1 ? (
                <div className="space-y-1">
                  <p className="text-red-500 font-black text-3xl">TOO EARLY!</p>
                  <p className="text-gray-500 text-xs">Focus, Raven. Wait for the signal.</p>
                </div>
              ) : (
                <div className="space-y-1">
                  <p className="text-purple-400 text-sm uppercase font-bold">Reaction Time</p>
                  <p className="text-white font-black text-5xl font-mono">{result}ms</p>
                  <p className="text-gray-500 text-xs">
                    {result! < 150 ? 'GODLIKE REFLEXES!' : 
                     result! < 200 ? 'PRO LEVEL' : 
                     result! < 250 ? 'DECENT' : 'KEEP TRAINING'}
                  </p>
                </div>
              )}
              <div className="flex gap-2 justify-center">
                <button 
                  onClick={(e) => { e.stopPropagation(); startTest(); }}
                  className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-xs font-bold text-white transition-colors"
                >
                  RETRY
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); setShowGuide(true); }}
                  className="px-6 py-2 bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/50 rounded-full text-xs font-bold text-white transition-colors"
                >
                  GUIDE
                </button>
              </div>
            </>
          ) : (
            <div className="space-y-3 animate-in fade-in zoom-in-95 duration-300">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest border-b border-white/10 pb-1">Reaction Tiers</h4>
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div className="flex justify-between p-1.5 bg-purple-500/10 rounded border border-purple-500/20">
                  <span className="text-purple-400 font-bold">GODLIKE</span>
                  <span className="text-white font-mono">&lt; 150ms</span>
                </div>
                <div className="flex justify-between p-1.5 bg-green-500/10 rounded border border-green-500/20">
                  <span className="text-green-400 font-bold">PRO</span>
                  <span className="text-white font-mono">150-200ms</span>
                </div>
                <div className="flex justify-between p-1.5 bg-blue-500/10 rounded border border-blue-500/20">
                  <span className="text-blue-400 font-bold">DECENT</span>
                  <span className="text-white font-mono">200-250ms</span>
                </div>
                <div className="flex justify-between p-1.5 bg-gray-500/10 rounded border border-gray-500/20">
                  <span className="text-gray-400 font-bold">CASUAL</span>
                  <span className="text-white font-mono">&gt; 250ms</span>
                </div>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); setShowGuide(false); }}
                className="text-[10px] text-gray-500 hover:text-white underline transition-colors"
              >
                BACK TO RESULT
              </button>
            </div>
          )}
        </div>
      )}

      {/* Scanning Line Decoration */}
      {state !== 'IDLE' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="w-full h-[1px] bg-white/20 absolute top-0 animate-[scan_2s_linear_infinite]" />
        </div>
      )}
    </div>
  );
};

export default LKLView;