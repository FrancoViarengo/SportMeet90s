import React, { useState, useEffect, useRef } from 'react';
import { VIDEOS_INVENTORY, VideoItem } from '../data/mediaInventory';
import { Play, Pause, Volume2, VolumeX, Rewind, Tv, Film, Disc } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const VhsVideoteca: React.FC = () => {
  const { domRef, isRevealed } = useScrollReveal();
  const [selectedTapeIndex, setSelectedTapeIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isGlitching, setIsGlitching] = useState<boolean>(false);
  const [timecode, setTimecode] = useState<string>('00:01:24:08');

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const activeVideo: VideoItem = VIDEOS_INVENTORY[selectedTapeIndex] || VIDEOS_INVENTORY[0];

  // Advance timecode like a real VHS deck
  useEffect(() => {
    let frame = 8;
    let sec = 24;
    let min = 1;
    let hr = 0;

    const interval = setInterval(() => {
      frame++;
      if (frame >= 30) {
        frame = 0;
        sec++;
        if (sec >= 60) {
          sec = 0;
          min++;
          if (min >= 60) {
            min = 0;
            hr++;
          }
        }
      }
      const pad = (n: number) => n.toString().padStart(2, '0');
      setTimecode(`${pad(hr)}:${pad(min)}:${pad(sec)}:${pad(frame)}`);
    }, 1000 / 30);

    return () => clearInterval(interval);
  }, []);

  const handleSelectTape = (idx: number) => {
    if (idx === selectedTapeIndex) return;
    setIsGlitching(true);
    setSelectedTapeIndex(idx);
    setIsPlaying(true);
    setTimeout(() => {
      setIsGlitching(false);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    }, 280);
  };

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  const handleToggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleRewind = () => {
    setIsGlitching(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
    setTimeout(() => setIsGlitching(false), 300);
  };

  return (
    <section
      id="videoteca"
      ref={domRef}
      className={`w-full bg-[#e5dccd] py-[90px] px-6 select-none reveal-mask ${
        isRevealed ? 'is-revealed' : ''
      }`}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#7997ff] mb-2 flex items-center gap-1.5">
              <Tv className="w-4 h-4 text-[#7997ff]" />
              <span>VIDEOTECA ANALÓGICA // ARCHIVO EN MOVIMIENTO</span>
            </div>
            <h2 className="heading text-[#ab5700] uppercase">
              DECK DE 16 CINTAS MASTER VHS*
            </h2>
            <p className="font-display text-[18px] md:text-[20px] text-[#7997ff] mt-2 max-w-[700px] leading-snug">
              Los 16 videos reales rescatados de @sportmeet90s. Seleccioná una cinta de la botonera para insertarla en el monitor CRT central.
            </p>
          </div>

          <div className="font-mono text-xs text-[#ab5700] border border-[#ab5700] px-3.5 py-1.5 rounded-[31px] w-fit">
            COPIA DIRECTA DE CASSETTE // NTSC 30 FPS
          </div>
        </div>

        {/* Main Console: CRT Monitor + Tape Selector Rack */}
        <div className="border border-[#ab5700] rounded-[20px] p-6 md:p-8 bg-[#e5dccd]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: The CRT Monitor Frame */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="relative aspect-video w-full rounded-[16px] overflow-hidden border border-[#ab5700] bg-[#103d26]">
                {/* Real Native MP4 Video */}
                <video
                  ref={videoRef}
                  key={activeVideo.src}
                  src={activeVideo.src}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className={`w-full h-full object-cover vhs-filter ${
                    isGlitching ? 'animate-tracking-glitch' : 'animate-crt-on'
                  }`}
                />

                {/* Drifting Scanlines Overlay */}
                <div className="absolute inset-0 vhs-scanlines pointer-events-none z-10" />

                {/* SVG Film Grain Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.08]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  }}
                />

                {/* Tracking Glitch Overlay */}
                {isGlitching && (
                  <div className="absolute inset-0 z-30 bg-[#e8e359]/25 flex flex-col justify-around pointer-events-none">
                    <div className="w-full h-4 bg-[#e8e359]/60 opacity-80" />
                    <div className="w-full h-2 bg-[#ab5700]/50" />
                    <div className="w-full h-6 bg-[#e8e359]/40" />
                  </div>
                )}

                {/* OSD On-Screen Display Overlay */}
                <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-4">
                  {/* Top Bar OSD */}
                  <div className="flex items-center justify-between font-mono text-[11px] md:text-[13px] text-[#e8e359]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#e8e359] animate-rec-blink" />
                      <span>{isPlaying ? 'PLAY ▶' : 'PAUSE ❚❚'}</span>
                      <span className="opacity-75">//</span>
                      <span>SP / Hi8</span>
                    </div>
                    <div className="font-mono bg-[#103d26]/60 px-2 py-0.5 rounded">
                      TC {timecode}
                    </div>
                  </div>

                  {/* Bottom Bar OSD */}
                  <div className="flex items-end justify-between font-mono text-[11px] md:text-[13px] text-[#e8e359]">
                    <div className="bg-[#103d26]/70 px-2.5 py-1 rounded tracking-wider uppercase font-medium">
                      {activeVideo.osdTimestamp}
                    </div>
                    <div className="text-[10px] uppercase opacity-80 hidden sm:block">
                      HI-FI STEREO // {activeVideo.sizeMb} MB
                    </div>
                  </div>
                </div>
              </div>

              {/* Physical Control Console (Pill Buttons 31px) */}
              <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs pt-1">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleTogglePlay}
                    className="btn-pill bg-[#e8e359] text-[#214534] border-[#e8e359] hover:bg-[#e8e359]/90 text-[11px] py-1.5 px-4"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                    <span>{isPlaying ? 'PAUSA' : 'REPRODUCIR'}</span>
                  </button>

                  <button
                    onClick={handleToggleAudio}
                    className="btn-pill bg-transparent border-[#ab5700] text-[#ab5700] hover:bg-[#ab5700] hover:text-[#e5dccd] text-[11px] py-1.5 px-4"
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    <span>{isMuted ? 'AUDIO MOTOR' : 'MUTEAR'}</span>
                  </button>

                  <button
                    onClick={handleRewind}
                    className="btn-pill bg-transparent border-[#ab5700] text-[#ab5700] hover:bg-[#ab5700] hover:text-[#e5dccd] text-[11px] py-1.5 px-4"
                  >
                    <Rewind className="w-3.5 h-3.5" />
                    <span>REBOBINAR</span>
                  </button>
                </div>

                <div className="text-[#ab5700] text-[11px] font-mono">
                  CINTA #{selectedTapeIndex + 1} DE 16
                </div>
              </div>

              {/* Active Tape Metadata Title */}
              <div className="border border-[#ab5700]/30 rounded-[12px] p-3.5 bg-[#e5dccd]">
                <div className="text-[10px] font-mono uppercase text-[#7997ff] font-bold">
                  {activeVideo.tapeLabel}
                </div>
                <div className="font-display text-[17px] text-[#ab5700] mt-0.5 leading-tight">
                  {activeVideo.title}
                </div>
              </div>
            </div>

            {/* Right: The 16-Tape Cassette Rack */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#ab5700]/30">
                <span className="font-mono text-xs uppercase font-bold text-[#ab5700] flex items-center gap-1.5">
                  <Film className="w-4 h-4 text-[#7997ff]" />
                  <span>RACK DE CINTAS DISPONIBLES</span>
                </span>
                <span className="text-[10px] font-mono text-[#7997ff] uppercase">
                  16 REGISTROS REALES
                </span>
              </div>

              {/* Scrollable list of 16 VHS cassette tapes */}
              <div className="space-y-2 max-h-[480px] overflow-y-auto pr-2">
                {VIDEOS_INVENTORY.map((vid, idx) => {
                  const isSelected = idx === selectedTapeIndex;
                  return (
                    <button
                      key={vid.id}
                      onClick={() => handleSelectTape(idx)}
                      className={`w-full text-left p-2.5 rounded-[12px] border transition-all flex items-center justify-between gap-3 ${
                        isSelected
                          ? 'border-[#ab5700] bg-[#e8e359] text-[#214534]'
                          : 'border-[#ab5700]/40 bg-[#e5dccd] text-[#ab5700] hover:border-[#ab5700] hover:bg-[#ab5700]/5'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span
                          className={`font-mono text-[11px] font-bold px-1.5 py-0.5 rounded ${
                            isSelected ? 'bg-[#214534] text-[#e8e359]' : 'bg-[#ab5700] text-[#e5dccd]'
                          }`}
                        >
                          #{String(idx + 1).padStart(2, '0')}
                        </span>
                        <div className="min-w-0">
                          <div className="font-display text-[13px] truncate leading-tight">
                            {vid.title}
                          </div>
                          <div
                            className={`text-[10px] font-mono truncate mt-0.5 ${
                              isSelected ? 'text-[#214534]/80' : 'text-[#ab5700]/70'
                            }`}
                          >
                            {vid.tapeLabel} // {vid.sizeMb} MB
                          </div>
                        </div>
                      </div>

                      <div className="shrink-0 font-mono text-[10px] font-bold">
                        {isSelected ? 'CARGADA ▶' : 'INSERTAR'}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
