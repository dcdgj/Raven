import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const AudioPlayer: React.FC = () => {
  // isMuted = true means "Speaker is OFF" (No Sound)
  // isMuted = false means "Speaker is ON" (Playing)
  // Initial state set to false so it plays immediately upon mounting (after user interaction/start)
  const [isMuted, setIsMuted] = useState(false);

  // SoundCloud Widget URL construction
  const trackUrl = "https://api.soundcloud.com/tracks/soundcloud:tracks:2253913547?secret_token=s-b30jBL4LC96";
  // Note: SoundCloud iframe parameters for controlling playback are auto_play. 
  // 'mute' parameter is unreliable in iframes, so we control sound by mounting/unmounting.
  const src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(trackUrl)}&auto_play=true&loop=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false`;

  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <button 
          onClick={() => setIsMuted(!isMuted)}
          className={`p-2 rounded-full border backdrop-blur transition-all ${
            isMuted 
              ? 'bg-black/50 border-gray-600 text-gray-400 hover:text-white' 
              : 'bg-purple-900/50 border-purple-500 text-purple-400 hover:bg-purple-900/70'
          }`}
          aria-label={isMuted ? "Turn sound on" : "Turn sound off"}
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>

      {/* Only render the iframe when sound is ON. Unmounting stops the audio reliably. */}
      {!isMuted && (
        <iframe
          width="100%"
          height="0"
          style={{ border: 0, position: 'absolute', visibility: 'hidden' }}
          allow="autoplay"
          src={src}
          title="bg-music"
        />
      )}
    </>
  );
};

export default AudioPlayer;