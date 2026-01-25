import React from 'react';
import { MapPin, Calendar, Trophy } from 'lucide-react';

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
              모든 경기는 서울 종로구에 위치한 전용 경기장에서 오프라인으로 진행됩니다.
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
      
      <div className="w-full h-48 bg-gradient-to-t from-purple-900/20 to-transparent rounded-2xl flex items-center justify-center border border-purple-500/20">
         <span className="text-gray-500 font-mono text-sm">LKL OFFICIAL PARTNER</span>
      </div>
    </div>
  );
};

export default LKLView;