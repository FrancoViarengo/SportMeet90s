import React, { useState } from 'react';
import { Volume2, VolumeX, Play, Pause, ExternalLink, Rewind } from 'lucide-react';

interface VHSMediaFrameProps {
  children?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  videoSrc?: string;
  youtubeId?: string;
  osdTimestamp?: string;
  tapeMode?: string;
  isRec?: boolean;
  className?: string;
  aspectRatio?: string;
  onOpenPlayer?: () => void;
  instagramUrl?: string;
  showCustomControls?: boolean;
}

export const VHSMediaFrame: React.FC<VHSMediaFrameProps> = ({
  children,
  imageSrc,
  imageAlt = 'Sport Meet 90s Archivo',
  videoSrc,
  youtubeId,
  osdTimestamp = 'OCT. 1995 - BUENOS AIRES',
  tapeMode = 'SP / Hi8',
  isRec = false,
  className = '',
  aspectRatio = 'aspect-video',
  onOpenPlayer,
  instagramUrl = 'https://www.instagram.com/sportmeet90s/',
  showCustomControls = true,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isRewinding, setIsRewinding] = useState<boolean>(false);

  const handleRewind = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsRewinding(true);
    setTimeout(() => setIsRewinding(false), 900);
  };

  const handleTogglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  const handleToggleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  return (
    <div
      className={`relative overflow-hidden group select-none border border-[#ab5700] rounded-[20px] bg-[#e5dccd] ${aspectRatio} ${className}`}
      onClick={onOpenPlayer}
    >
      {/* 1. Underlying Media */}
      <div className="relative w-full h-full overflow-hidden">
        {videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover vhs-filter transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            className="w-full h-full object-cover vhs-filter transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          children
        )}
      </div>

      {/* 2. SVG Turbulence Film Grain Overlay (0.07 opacity) */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 3. Horizontal Scanlines Overlay */}
      <div className="absolute inset-0 vhs-scanlines pointer-events-none z-10" />

      {/* 4. Rewind Glitch Effect Overlay when triggered */}
      {isRewinding && (
        <div className="absolute inset-0 z-30 bg-[#e8e359]/20 flex flex-col justify-around pointer-events-none">
          <div className="w-full h-4 bg-[#e8e359]/40 opacity-70 animate-pulse" />
          <div className="w-full h-2 bg-[#ab5700]/30 opacity-60" />
          <div className="w-full h-8 bg-[#e8e359]/30 opacity-80" />
        </div>
      )}

      {/* 5. On-Screen Display (OSD) in Citron Beam #e8e359 */}
      <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-4 md:p-5">
        {/* Top Bar OSD */}
        <div className="flex items-center justify-between font-mono text-[11px] md:text-[13px] tracking-wider text-[#e8e359] drop-shadow-none">
          <div className="flex items-center gap-2 font-medium">
            {isRec ? (
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#e8e359] animate-rec-blink" />
                REC ●
              </span>
            ) : (
              <span className="flex items-center gap-1.5">
                <span>{isPlaying ? 'PLAY ▶' : 'PAUSE ❚❚'}</span>
              </span>
            )}
            <span className="text-[#e8e359]/80">//</span>
            <span>{tapeMode}</span>
          </div>

          <div className="font-mono text-[10px] md:text-[12px] text-[#e8e359]/90 hidden sm:block uppercase">
            TC 01:24:09:18
          </div>
        </div>

        {/* Bottom Bar OSD */}
        <div className="flex items-end justify-between font-mono text-[11px] md:text-[13px] tracking-wider text-[#e8e359]">
          <div className="text-[10px] md:text-[11px] uppercase tracking-widest text-[#e8e359]/80 hidden md:block">
            HI-FI STEREO // NTSC
          </div>
          <div className="font-medium bg-[#103d26]/40 px-2.5 py-1 rounded-[6px] tracking-widest">
            {osdTimestamp}
          </div>
        </div>
      </div>

      {/* 6. Custom Interactive Control Pills (31px border-radius) */}
      {showCustomControls && (
        <div className="absolute bottom-3 left-3 z-30 flex flex-wrap items-center gap-2 opacity-90 transition-opacity">
          {videoSrc || youtubeId ? (
            <>
              <button
                type="button"
                onClick={handleToggleAudio}
                className="bg-[#103d26]/80 text-[#e8e359] border border-[#e8e359] text-[11px] font-medium uppercase px-3 py-1.5 rounded-[31px] flex items-center gap-1.5 hover:bg-[#e8e359] hover:text-[#214534] transition-colors"
                title="Alternar Audio"
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                <span>{isMuted ? 'AUDIO ON / MOTOR' : 'AUDIO OFF'}</span>
              </button>

              <button
                type="button"
                onClick={handleRewind}
                className="bg-[#103d26]/80 text-[#e8e359] border border-[#e8e359] text-[11px] font-medium uppercase px-3 py-1.5 rounded-[31px] flex items-center gap-1.5 hover:bg-[#e8e359] hover:text-[#214534] transition-colors"
                title="Rebobinar Cinta"
              >
                <Rewind className="w-3.5 h-3.5" />
                <span>REBOBINAR</span>
              </button>
            </>
          ) : null}

          {instagramUrl && (
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="bg-[#103d26]/80 text-[#e8e359] border border-[#e8e359] text-[11px] font-medium uppercase px-3 py-1.5 rounded-[31px] flex items-center gap-1.5 hover:bg-[#e8e359] hover:text-[#214534] transition-colors"
            >
              <span>VER EN @SPORTMEET90S</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      )}
    </div>
  );
};
