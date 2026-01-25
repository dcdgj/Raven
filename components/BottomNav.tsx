import React from 'react';
import { ViewState } from '../types';
import { Trophy, Shield, Calendar, Building, Users, Book } from 'lucide-react';

interface Props {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const BottomNav: React.FC<Props> = ({ currentView, setView }) => {
  const items: { id: ViewState; label: string; icon: React.FC<any> }[] = [
    { id: 'LKL', label: 'LKL', icon: Trophy },
    { id: 'RG', label: 'RG', icon: Shield },
    { id: 'SCHEDULE', label: 'Time', icon: Calendar },
    { id: 'BUILDING', label: 'HQ', icon: Building },
    { id: 'PLAYERS', label: 'Team', icon: Users },
    { id: 'GLOSSARY', label: 'Info', icon: Book },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-neutral-950/90 backdrop-blur-lg border-t border-gray-800 pb-safe z-40">
      <div className="flex justify-around items-center px-2 py-3">
        {items.map((item) => {
          const isActive = currentView === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setView(item.id)}
              className={`flex flex-col items-center gap-1 min-w-[3rem] transition-colors ${
                isActive ? 'text-purple-400' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'fill-current' : ''}`} />
              <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;