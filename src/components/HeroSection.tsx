import React, { useState, useRef, useEffect } from 'react';
import { Radio, Menu, Volume2, VolumeX, ChevronDown } from 'lucide-react';
import { HERO_VIDEO, OFFICIAL_AVATAR } from '../data/mediaInventory';

interface HeroSectionProps {
  onOpenIndex: () => void;
  onOpenSoundDeck: () => void;
  onScrollToNext: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenIndex,
  onOpenSoundDeck,
  onScrollToNext,
}) => {
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [timecode, setTimecode] = useState<string>('00:00:14:02');
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Advancing timecode
  useEffect(() => {
    let frames = 2;
    let sec = 14;
    let min = 0;
    const interval = setInterval(() => {
      frames++;
      if (frames >= 30) {
        frames = 0;
        sec++;
        if (sec >= 60) {
          sec = 0;
          min++;
        }
      }
      const pad = (n: number) => n.toString().padStart(2, '0');
      setTimecode(`00:${pad(min)}:${pad(sec)}:${pad(frames)}`);
    }, 1000 / 30);
    return () => clearInterval(interval);
  }, []);

  const handleToggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      id="hero"
      className="relative w-screen h-screen min-h-[640px] overflow-hidden flex flex-col justify-between p-6 md:p-10 select-none"
    >
      {/* Background Real Native MP4 Video Loop from Instagram Archive */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#103d26]">
        <video
          ref={videoRef}
          src={HERO_VIDEO.src}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover vhs-filter scale-105"
        />

        {/* SVG Noise Grain Overlay */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.08]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Drifting Scanlines */}
        <div className="absolute inset-0 vhs-scanlines pointer-events-none" />
      </div>

      {/* Top Minimalist Navigation Bar */}
      <header className="relative z-20 w-full max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Official Avatar Badge + OSD Indicator in Citron Beam #e8e359 */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-[#e8e359] shrink-0">
            <img
              src={OFFICIAL_AVATAR}
              alt="Sport Meet 90s Avatar Oficial"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col font-mono text-[11px] md:text-[12px] text-[#e8e359]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e8e359] animate-rec-blink" />
              <span className="font-bold uppercase tracking-wider">
                @SPORTMEET90S // CINTA MASTER REEL
              </span>
            </div>
            <span className="text-[10px] opacity-80 uppercase">
              TC {timecode} // SP HI8 NTSC
            </span>
          </div>
        </div>

        {/* Right Ghost Pill Buttons */}
        <div className="flex items-center gap-2.5">
          {/* Audio toggle for background video */}
          <button
            type="button"
            onClick={handleToggleAudio}
            className="btn-pill bg-transparent border border-[#e8e359] text-[#e8e359] hover:bg-[#e8e359] hover:text-[#214534] transition-colors text-[12px]"
            title="Escuchar audio del escape"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            <span>{isMuted ? 'AUDIO VIDEO: OFF' : 'AUDIO VIDEO: ON'}</span>
          </button>

          <button
            type="button"
            onClick={onOpenSoundDeck}
            className="btn-pill bg-transparent border border-[#e8e359] text-[#e8e359] hover:bg-[#e8e359] hover:text-[#214534] transition-colors text-[12px]"
          >
            <Radio className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">SINTETIZADOR MOTOR</span>
          </button>

          <button
            type="button"
            onClick={onOpenIndex}
            className="btn-pill bg-transparent border border-[#e8e359] text-[#e8e359] hover:bg-[#e8e359] hover:text-[#214534] transition-colors text-[12px]"
          >
            <Menu className="w-3.5 h-3.5" />
            <span>ÍNDICE</span>
          </button>
        </div>
      </header>

      {/* Hero Center Content (Directly on video with NO dark gradient box, Citron Beam #e8e359) */}
      <div className="relative z-20 my-auto text-center flex flex-col items-center justify-center max-w-[1100px] mx-auto px-4">
        {/* Monumental Display Title: sport meet 90s* in Parafina 500, line-height 0.80 */}
        <h1 className="display-xl text-[#e8e359] lowercase text-center">
          sport meet 90s*
        </h1>

        {/* 24px Gap */}
        <div className="h-6" />

        {/* Editorial Subheadline in Parafina 500, 28px, line-height 0.95, #e8e359 */}
        <p className="font-display text-[22px] md:text-[28px] leading-[0.95] text-[#e8e359] max-w-[780px] text-center">
          El archivo vivo de la época dorada. El 1 a 1, las estaciones de Libertador, el Gálvez de noche y el choque entre el fierro nacional y el desembarco japonés.
        </p>

        {/* Tape Indicator Pill with 100 assets badge */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 font-mono text-xs uppercase tracking-widest text-[#e8e359]">
          <span className="border border-[#e8e359] px-3 py-1 rounded-[31px]">
            16 CINTAS EN MOVIMIENTO // 83 FOTOGRAFÍAS
          </span>
          <span className="border border-[#e8e359] px-3 py-1 rounded-[31px]">
            BUENOS AIRES 1990-2002
          </span>
        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <footer className="relative z-20 w-full text-center pb-2">
        <button
          type="button"
          onClick={onScrollToNext}
          className="font-display text-[12px] md:text-[13px] tracking-widest text-[#e8e359] uppercase hover:underline transition-all inline-flex items-center gap-1.5 animate-bounce"
        >
          <span>[ bajar a la avenida ↓ ]</span>
        </button>
      </footer>
    </section>
  );
};
