import React, { useState } from 'react';
import { TERMS, PRO_GUIDE } from '../../constants';
import { ChevronDown, Info, Swords } from 'lucide-react';

const GlossaryView: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="p-6 pb-24 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="text-3xl font-black text-white">MANUAL</h2>
        <p className="text-gray-500 text-sm">Guide for New Managers</p>
      </div>

      {/* Pro Characteristics - General */}
      <div className="glass-panel p-5 rounded-2xl border-l-4 border-purple-600">
        <h3 className="text-white font-bold mb-4 flex items-center gap-2">
          <Info className="w-4 h-4 text-purple-500" /> Pro Gamer Traits
        </h3>
        <ul className="space-y-2">
          {PRO_GUIDE.general.map((trait, idx) => (
            <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
              <span className="text-gray-600 mt-1.5 w-1 h-1 bg-gray-500 rounded-full"></span>
              {trait}
            </li>
          ))}
        </ul>
      </div>

      {/* Pro Characteristics - Match Day */}
      <div className="glass-panel p-5 rounded-2xl border-l-4 border-red-600">
        <h3 className="text-white font-bold mb-4 flex items-center gap-2">
          <Swords className="w-4 h-4 text-red-500" /> Match Day Rules
        </h3>
        <ul className="space-y-2">
          {PRO_GUIDE.match.map((trait, idx) => (
            <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
              <span className="text-gray-600 mt-1.5 w-1 h-1 bg-gray-500 rounded-full"></span>
              {trait}
            </li>
          ))}
        </ul>
      </div>

      {/* Terms Accordion */}
      <div className="space-y-3">
        <h3 className="text-white font-bold text-lg mb-2">Terms</h3>
        {TERMS.map((term, idx) => (
          <div key={idx} className="border border-gray-800 rounded-lg bg-neutral-900 overflow-hidden">
            <button 
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-neutral-800 transition-colors"
            >
              <span className="font-medium text-purple-300">{term.term}</span>
              <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
            </button>
            {openIndex === idx && (
              <div className="p-4 pt-0 bg-neutral-800/30 text-sm">
                <p className="text-white font-medium mb-1">{term.definition}</p>
                <p className="text-gray-400">{term.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlossaryView;