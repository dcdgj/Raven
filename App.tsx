import React, { useState } from 'react';
import { ViewState } from './types';
import StartScreen from './components/StartScreen';
import BottomNav from './components/BottomNav';
import AudioPlayer from './components/AudioPlayer';
import LKLView from './components/views/LKLView';
import TeamView from './components/views/TeamView';
import ScheduleView from './components/views/ScheduleView';
import BuildingView from './components/views/BuildingView';
import PlayerView from './components/views/PlayerView';
import GlossaryView from './components/views/GlossaryView';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('START');

  // Handle Start
  const handleStart = () => {
    setView('RG'); // Default to Team view after start
  };

  if (view === 'START') {
    return <StartScreen onStart={handleStart} />;
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-gray-200 font-sans selection:bg-purple-900 selection:text-white">
      <AudioPlayer />
      
      <main className="max-w-md mx-auto min-h-screen bg-neutral-950 shadow-2xl overflow-hidden relative border-x border-gray-900/50">
        {/* View Content */}
        {view === 'LKL' && <LKLView />}
        {view === 'RG' && <TeamView />}
        {view === 'SCHEDULE' && <ScheduleView />}
        {view === 'BUILDING' && <BuildingView />}
        {view === 'PLAYERS' && <PlayerView />}
        {view === 'GLOSSARY' && <GlossaryView />}
      </main>

      <BottomNav currentView={view} setView={setView} />
    </div>
  );
};

export default App;