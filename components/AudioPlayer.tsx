import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const AudioPlayer: React.FC = () => {
  // Initially muted due to browser autoplay policies, user toggles to unmute
  const [isMuted, setIsMuted] = useState(true);

  // SoundCloud Widget URL construction
  // mute=true initially. If user clicks unmute, we can't easily control the iframe internal state via simple props without the SDK,
  // but for this implementation, we will use a workaround or just provide the visual toggle which 'simulates' the request.
  // Note: Controlling iframe volume securely without the widget API script is limited.
  // However, the prompt allows "user can unmute later".
  // A simple iframe swap or overlay is tricky. 
  // BETTER APPROACH: We actually render the iframe. The prompt provided a specific code with `mute=true`.
  // To allow unmuting, we need to reload the iframe with `mute=false` or use the widget API.
  // Given the constraints of a pure React component without external SDK loading complexity,
  // we will reload the src with a different mute parameter.
  
  const trackUrl = "https://api.soundcloud.com/tracks/soundcloud:tracks:2253913547?secret_token=s-b30jBL4LC96";
  const getSrc = (muted: boolean) => 
    `https://w.soundcloud.com/player/?url=${encodeURIComponent(trackUrl)}&auto_play=true&loop=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false&mute=${muted}`;

  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <button 
          onClick={() => setIsMuted(!isMuted)}
          className="p-2 rounded-full bg-black/50 border border-purple-500/30 text-purple-400 backdrop-blur hover:bg-black/70 transition-all"
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>

      <iframe
        width="100%"
        height="0"
        style={{ border: 0, position: 'absolute', visibility: 'hidden' }}
        allow="autoplay"
        src={getSrc(isMuted)}
        title="bg-music"
      />
    </>
  );
};

export default AudioPlayer;