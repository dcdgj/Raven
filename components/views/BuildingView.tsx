import React from 'react';
import { FLOORS } from '../../constants';
import { Building2 } from 'lucide-react';

const BuildingView: React.FC = () => {
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
              <p className="text-gray-300 text-sm font-light leading-relaxed">
                {floor.description}
              </p>
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