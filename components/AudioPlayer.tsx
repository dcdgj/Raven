import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

// Global declaration for SoundCloud Widget API
declare global {
  interface Window {
    SC: any;
  }
}

export interface AudioPlayerRef {
  play: () => void;
}

interface Props {
  started: boolean;
}

const AudioPlayer = forwardRef<AudioPlayerRef, Props>(({ started }, ref) => {
  const [isMuted, setIsMuted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const widgetRef = useRef<any>(null);

  // SoundCloud Widget URL
  // auto_play is set to false here because we want to control it via code
  const trackUrl = "https://api.soundcloud.com/tracks/soundcloud:tracks:2253913547?secret_token=s-b30jBL4LC96";
  const src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(trackUrl)}&auto_play=false&loop=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false`;

  // Initialize SoundCloud Widget
  useEffect(() => {
    if (window.SC && iframeRef.current) {
      const widget = window.SC.Widget(iframeRef.current);
      widgetRef.current = widget;
    }
  }, []);

  // Expose play method to parent
  useImperativeHandle(ref, () => ({
    play: () => {
      if (widgetRef.current) {
        widgetRef.current.play();
        widgetRef.current.setVolume(100);
        setIsMuted(false);
      }
    }
  }));

  // Handle Mute Toggle
  const toggleMute = () => {
    if (!widgetRef.current) return;

    if (isMuted) {
      // Unmuting means playing in this context
      widgetRef.current.play();
      setIsMuted(false);
    } else {
      // Muting means pausing to save data/battery and stop sound
      widgetRef.current.pause();
      setIsMuted(true);
    }
  };

  return (
    <>
      {/* 
        The iframe is always mounted but hidden visually. 
        This is critical for mobile browsers to maintain the audio session.
      */}
      <iframe
        ref={iframeRef}
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={src}
        title="bg-music"
        className="fixed bottom-0 left-0 opacity-0 pointer-events-none -z-10"
        style={{ visibility: 'hidden', position: 'absolute' }}
      />

      {/* Control Button - Only visible when game has started */}
      {started && (
        <div className="fixed top-4 right-4 z-[60] animate-in fade-in duration-1000">
          <button 
            onClick={toggleMute}
            className={`p-2 rounded-full border backdrop-blur transition-all ${
              isMuted 
                ? 'bg-black/50 border-gray-600 text-gray-400 hover:text-white' 
                : 'bg-purple-900/50 border-purple-500 text-purple-400 hover:bg-purple-900/70 shadow-[0_0_15px_rgba(168,85,247,0.5)]'
            }`}
            aria-label={isMuted ? "Turn sound on" : "Turn sound off"}
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        </div>
      )}
    </>
  );
});

export default AudioPlayer;