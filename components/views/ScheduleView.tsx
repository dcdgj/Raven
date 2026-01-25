import React from 'react';
import { ROUTINE } from '../../constants';
import { Clock, MonitorPlay, Moon } from 'lucide-react';

const ScheduleView: React.FC = () => {
  return (
    <div className="p-6 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-24">
      <div className="space-y-1">
        <h2 className="text-3xl font-black text-white uppercase">Daily Routine</h2>
        <p className="text-purple-400 text-sm">Pro Gamer Life Cycle</p>
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-purple-900 ml-4 space-y-8 py-4">
        {ROUTINE.map((item, index) => {
          let Icon = Clock;
          if (item.activity.includes('스크림')) Icon = MonitorPlay;
          if (item.activity.includes('퇴근') || item.activity.includes('기상')) Icon = Moon;

          return (
            <div key={index} className="relative pl-8">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-purple-600 border-2 border-black" />
              <div className="flex flex-col">
                <span className="text-purple-400 font-mono text-sm">{item.time}</span>
                <span className="text-white text-lg font-medium mt-1">{item.activity}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Info */}
      <div className="glass-panel p-5 rounded-2xl space-y-4">
        <h3 className="text-white font-bold flex items-center gap-2">
          <div className="w-1.5 h-4 bg-purple-500 rounded-full" />
          Additional Rules
        </h3>
        <ul className="space-y-3 text-sm text-gray-400">
          <li className="flex gap-2">
            <span className="text-purple-500">•</span>
            추가 연습 및 방송 시간은 자율입니다.
          </li>
          <li className="flex gap-2">
            <span className="text-purple-500">•</span>
            <span className="text-gray-300 font-medium">정기 방송:</span>
            시즌 중 매주 월요일 23:30 ~ 02:30
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ScheduleView;