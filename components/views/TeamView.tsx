import React, { useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { HISTORY_DATA, TEAM_ASSETS } from '../../constants';
import { Shirt, ZoomIn, X } from 'lucide-react';

const TeamView: React.FC = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <div className="p-6 space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-24">
      {/* Header & Logo */}
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-40 h-40 bg-black rounded-full p-2 border-2 border-purple-600 shadow-[0_0_30px_rgba(147,51,234,0.3)]">
          <img src={TEAM_ASSETS.logo} alt="RG Logo" className="w-full h-full object-contain" />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-black text-white tracking-widest">RAVEN GAMING</h1>
          <p className="text-purple-400 font-medium">Flight to the Unknown</p>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="glass-panel p-4 rounded-xl text-center">
          <p className="text-xs text-gray-500 uppercase">Team Colors</p>
          <div className="flex justify-center gap-2 mt-2">
            <div className="w-6 h-6 rounded-full bg-purple-700 border border-white/20"></div>
            <div className="w-6 h-6 rounded-full bg-black border border-white/20"></div>
          </div>
        </div>
        <div className="glass-panel p-4 rounded-xl text-center">
          <p className="text-xs text-gray-500 uppercase">Main Sponsor</p>
          <p className="text-white font-bold mt-1">Crack</p>
          <p className="text-[10px] text-gray-400">AI Chatting Solutions</p>
        </div>
      </div>

      {/* Uniforms */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-white">
          <Shirt className="w-5 h-5 text-purple-500" />
          <h3 className="font-bold text-lg">2026 Season Kit</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div 
            className="group relative aspect-[3/4] bg-gradient-to-b from-gray-800 to-black rounded-xl border border-gray-700 overflow-hidden cursor-pointer"
            onClick={() => setModalImage(TEAM_ASSETS.uniformFront)}
          >
             <img src={TEAM_ASSETS.uniformFront} alt="Front" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
             <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
               <ZoomIn className="text-white w-8 h-8" />
             </div>
             <span className="absolute bottom-2 left-0 right-0 text-center text-xs text-gray-400">FRONT</span>
          </div>
          <div 
            className="group relative aspect-[3/4] bg-gradient-to-b from-gray-800 to-black rounded-xl border border-gray-700 overflow-hidden cursor-pointer"
            onClick={() => setModalImage(TEAM_ASSETS.uniformBack)}
          >
             <img src={TEAM_ASSETS.uniformBack} alt="Back" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
             <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
               <ZoomIn className="text-white w-8 h-8" />
             </div>
             <span className="absolute bottom-2 left-0 right-0 text-center text-xs text-gray-400">BACK</span>
          </div>
        </div>
      </div>

      {/* History Chart */}
      <div className="space-y-4">
        <div className="space-y-1">
          <h3 className="font-bold text-lg text-white">Team History</h3>
          <p className="text-xs text-gray-400">성장형 언더독의 기적 (Ranking 1 is Best)</p>
        </div>
        
        <div className="h-64 glass-panel rounded-xl p-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={HISTORY_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="year" stroke="#666" fontSize={12} tickMargin={10} />
              <YAxis reversed domain={[1, 10]} stroke="#666" fontSize={12} width={30} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#111', borderColor: '#444' }}
                itemStyle={{ color: '#a855f7' }}
                labelStyle={{ color: '#fff' }}
              />
              <Line 
                type="monotone" 
                dataKey="rank" 
                stroke="#a855f7" 
                strokeWidth={3} 
                dot={{ r: 4, fill: '#fff' }} 
                activeDot={{ r: 6 }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-2">
            {HISTORY_DATA.slice().reverse().map((item) => (
                <div key={item.year} className="flex text-sm p-2 border-b border-gray-800">
                    <span className="w-16 font-mono text-purple-400">{item.year}</span>
                    <span className="flex-1 text-gray-300">{item.description}</span>
                </div>
            ))}
            <div className="flex text-sm p-2 border-b border-gray-800">
              <span className="w-16 font-mono text-purple-400">2019</span>
              <span className="flex-1 text-gray-300">05.10 창단</span>
            </div>
        </div>
      </div>

      {/* Image Modal */}
      {modalImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setModalImage(null)}
        >
          <div className="relative max-w-full max-h-full">
            <button 
              className="absolute -top-10 right-0 text-white p-2"
              onClick={() => setModalImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <img src={modalImage} alt="Uniform Detail" className="max-h-[85vh] object-contain rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamView;