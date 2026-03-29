import React, { useState } from 'react';
import { FLOORS } from '../../constants';
import { Building2, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const BuildingView: React.FC = () => {
  const [activeDetail, setActiveDetail] = useState<{floor: string, type: 'rooms' | 'lounge' | null}>({ floor: '', type: null });

  const toggleDetail = (floor: string, type: 'rooms' | 'lounge') => {
    if (activeDetail.floor === floor && activeDetail.type === type) {
      setActiveDetail({ floor: '', type: null });
    } else {
      setActiveDetail({ floor, type });
    }
  };

  return (
    <div className="p-6 h-full flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 pb-24">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-white">HQ STRUCTURE</h2>
        <p className="text-gray-500 text-sm mt-1">Raven Gaming Office (Since 2024.09.06)</p>
      </div>

      <div className="flex-1 flex flex-col gap-4 justify-center max-w-md mx-auto w-full">
        {FLOORS.map((floor, index) => (
          <div 
            key={floor.floor}
            className={`
              relative group overflow-hidden
              border border-gray-800 bg-neutral-900 hover:bg-neutral-800 
              transition-all duration-300 rounded-lg p-6
              ${index === 0 ? 'rounded-t-2xl' : ''}
              ${index === FLOORS.length - 1 ? 'rounded-b-2xl border-b-4 border-purple-900' : ''}
            `}
          >
            {/* Visual Floor Indicator */}
            <div className="absolute right-4 top-4 text-4xl font-black text-neutral-800 group-hover:text-purple-900/40 transition-colors select-none">
              {floor.floor}
            </div>
            
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-purple-400 mb-1">{floor.title}</h3>
              
              {floor.floor === '3F' ? (
                <div className="space-y-3">
                  <p className="text-gray-300 text-sm font-light leading-relaxed">
                    선수 생활.{' '}
                    <span 
                      onClick={() => toggleDetail('3F', 'rooms')}
                      className="cursor-pointer text-purple-400 border-b border-purple-400/30 hover:text-purple-300 hover:bg-purple-900/20 px-1 rounded transition-all"
                    >
                      개인실 5개
                    </span>
                    ,{' '}
                    <span 
                      onClick={() => toggleDetail('3F', 'lounge')}
                      className="cursor-pointer text-purple-400 border-b border-purple-400/30 hover:text-purple-300 hover:bg-purple-900/20 px-1 rounded transition-all"
                    >
                      공용 휴게 공간
                    </span>
                    , 간이 헬스장
                  </p>
                  
                  <AnimatePresence mode="wait">
                    {activeDetail.floor === '3F' && activeDetail.type && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-start gap-2 p-3 bg-purple-950/30 border border-purple-500/20 rounded-xl text-xs text-purple-200"
                      >
                        <Info className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                        <span>
                          {activeDetail.type === 'rooms' ? '작은 방 4개와 큰 방 1개' : '음료/간식 상비'}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <p className="text-gray-300 text-sm font-light leading-relaxed">
                  {floor.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center text-gray-600 gap-2 items-center">
        <Building2 className="w-5 h-5" />
        <span className="text-xs tracking-widest">RG HEADQUARTERS</span>
      </div>
    </div>
  );
};

export default BuildingView;