import React, { useState } from 'react';
import { MapPin, Calendar, Trophy } from 'lucide-react';
import { TEAM_ASSETS } from '../../constants';

const LKLView: React.FC = () => {
  return (
    <div className="p-6 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-24">
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-black text-white italic tracking-tighter">LKL</h2>
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
              국내 최상위 LoL 프로 리그.<br/>
              세계 최고의 실력을 가진 선수들이 경쟁하는 무대.
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
      
      <div className="w-full h-48 rounded-2xl overflow-hidden border border-purple-500/20 relative">
         <img 
           src={TEAM_ASSETS.stadium} 
           alt="LKL Official Partner" 
           className="w-full h-full object-cover"
         />
         {/* Gradient Overlay for better integration */}
         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default LKLView;