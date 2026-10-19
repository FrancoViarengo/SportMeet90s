import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Disc, Radio, Flame, Sparkles } from 'lucide-react';

export type SoundTrackId = 'weber_idle' | 'turbo_spool' | 'eurodance_95';

interface TrackInfo {
  id: SoundTrackId;
  name: string;
  subtitle: string;
  tag: string;
  description: string;
}

const TRACKS: TrackInfo[] = [
  {
    id: 'weber_idle',
    name: 'LEVA CRUZADA + WEBER 40/40',
    subtitle: 'Ralentí trabado a 950 RPM con dos dobles IDF italianos',
    tag: 'ASPIRADO PURO',
    description: 'Cadencia irregular de leva de competición Romero, succión ronca en trompetas abiertas y escape 4 a 1 corto.'
  },
  {
    id: 'turbo_spool',
    name: 'SILBIDO TURBO & BLOW-OFF',
    subtitle: 'Garrett T4 cargando 1.8 bar con descarga stututu',
    tag: 'SOBREALIMENTADO',
    description: 'Aceleración en 3ra marcha por Panamericana, silbido cerámico agudo y alivio de wastegate externa al soltar.'
  },
  {
    id: 'eurodance_95',
    name: 'ACID EURODANCE 1995 (PIONEER 6x9)',
    subtitle: '138 BPM sonando desde los parlantes de la luneta',
    tag: 'SONIDO CASSETTE',
    description: 'Línea de bajo 303 ácida, golpe seco en el baúl y ecualizador gráfico Pioneer parpadeando en la consola.'
  }
];

interface SoundDeckProps {
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
  isFloating?: boolean;
}

export const SoundDeck: React.FC<SoundDeckProps> = ({
  isOpen = true,
  onClose,
  className = '',
  isFloating = false,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeTrack, setActiveTrack] = useState<SoundTrackId>('weber_idle');
  const [volume, setVolume] = useState<number>(0.7);

  // Audio nodes and context refs
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const loopTimerRef = useRef<number | null>(null);
  const activeNodesRef = useRef<{ stop: () => void } | null>(null);

  // Initialize or get AudioContext
  const getAudioContext = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
      const gain = audioCtxRef.current.createGain();
      gain.gain.value = volume;
      gain.connect(audioCtxRef.current.destination);
      masterGainRef.current = gain;
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  // Update volume
  useEffect(() => {
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.setTargetAtTime(volume, audioCtxRef.current.currentTime, 0.05);
    }
  }, [volume]);

  // Stop current sound loop
  const stopCurrentSound = () => {
    if (loopTimerRef.current) {
      window.clearInterval(loopTimerRef.current);
      loopTimerRef.current = null;
    }
    if (activeNodesRef.current) {
      try {
        activeNodesRef.current.stop();
      } catch (err) {
        // ignore
      }
      activeNodesRef.current = null;
    }
  };

  // Synthesize Track 1: Weber 40/40 Cam Lope Idle
  const startWeberIdle = (ctx: AudioContext, dest: AudioNode) => {
    const mainGain = ctx.createGain();
    mainGain.gain.value = 0.85;
    mainGain.connect(dest);

    // Filter for exhaust / low rumble
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 240;
    filter.connect(mainGain);

    // Tone generators: two detuned sawtooths for rich cylinder rumble
    const osc1 = ctx.createOscillator();
    osc1.type = 'sawtooth';
    osc1.frequency.value = 52; // ~780 RPM 4-cyl

    const osc2 = ctx.createOscillator();
    osc2.type = 'triangle';
    osc2.frequency.value = 26;

    // Lope modulation: uneven pulse
    const lopeGain = ctx.createGain();
    lopeGain.gain.value = 0.5;

    osc1.connect(lopeGain);
    osc2.connect(lopeGain);
    lopeGain.connect(filter);

    osc1.start();
    osc2.start();

    // Noise buffer for intake chuff / exhaust spit
    const bufferSize = ctx.sampleRate * 2;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuffer;
    noise.loop = true;

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.value = 450;
    noiseFilter.Q.value = 2.5;

    const noiseGain = ctx.createGain();
    noiseGain.gain.value = 0.15;

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(mainGain);
    noise.start();

    // Cam lope rhythm generator (uneven idle pulses)
    let pulseCount = 0;
    const interval = window.setInterval(() => {
      pulseCount++;
      const now = ctx.currentTime;
      // Irregular cam rhythm: skip or emphasize beats like a 300° race camshaft
      const isLope = pulseCount % 5 === 0 || pulseCount % 7 === 0;
      const targetFreq = isLope ? 44 : 58;
      const targetGain = isLope ? 0.3 : 0.7;

      osc1.frequency.setTargetAtTime(targetFreq, now, 0.04);
      lopeGain.gain.setTargetAtTime(targetGain, now, 0.05);

      if (isLope) {
        // Carburetor suction pop
        noiseFilter.frequency.setValueAtTime(600, now);
        noiseGain.gain.setValueAtTime(0.35, now);
        noiseGain.gain.exponentialRampToValueAtTime(0.08, now + 0.08);
      }
    }, 110);

    loopTimerRef.current = interval;

    activeNodesRef.current = {
      stop: () => {
        clearInterval(interval);
        try {
          osc1.stop();
          osc2.stop();
          noise.stop();
        } catch (_) {}
      }
    };
  };

  // Synthesize Track 2: Turbo Spool & Blow-Off
  const startTurboSpool = (ctx: AudioContext, dest: AudioNode) => {
    const mainGain = ctx.createGain();
    mainGain.gain.value = 0.8;
    mainGain.connect(dest);

    // Rumble background
    const rumble = ctx.createOscillator();
    rumble.type = 'sawtooth';
    rumble.frequency.value = 85;

    const rumbleFilter = ctx.createBiquadFilter();
    rumbleFilter.type = 'lowpass';
    rumbleFilter.frequency.value = 160;

    rumble.connect(rumbleFilter);
    rumbleFilter.connect(mainGain);
    rumble.start();

    // Spool oscillator
    const spoolOsc = ctx.createOscillator();
    spoolOsc.type = 'sine';
    spoolOsc.frequency.value = 1200;

    const spoolGain = ctx.createGain();
    spoolGain.gain.value = 0.02;

    const spoolFilter = ctx.createBiquadFilter();
    spoolFilter.type = 'bandpass';
    spoolFilter.frequency.value = 2200;
    spoolFilter.Q.value = 5.0;

    spoolOsc.connect(spoolFilter);
    spoolFilter.connect(spoolGain);
    spoolGain.connect(mainGain);
    spoolOsc.start();

    // Noise for whoosh and blow-off valve
    const bufferSize = ctx.sampleRate * 2;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    let isBoosting = false;
    let cycleTime = 0;

    const interval = window.setInterval(() => {
      cycleTime++;
      const now = ctx.currentTime;

      if (cycleTime % 12 === 0) {
        // Boost build up!
        isBoosting = true;
        spoolOsc.frequency.exponentialRampToValueAtTime(3400, now + 1.2);
        spoolGain.gain.setTargetAtTime(0.28, now, 0.4);
        rumble.frequency.setTargetAtTime(140, now, 0.3);
      } else if (cycleTime % 12 === 6 && isBoosting) {
        // BLOW OFF VALVE RELEASE: STUTUTU!
        isBoosting = false;
        spoolGain.gain.setTargetAtTime(0.01, now, 0.05);
        rumble.frequency.setTargetAtTime(80, now, 0.15);

        // Chuff bursts
        for (let burst = 0; burst < 3; burst++) {
          const t = now + burst * 0.09;
          const bovNoise = ctx.createBufferSource();
          bovNoise.buffer = noiseBuffer;

          const bovFilter = ctx.createBiquadFilter();
          bovFilter.type = 'bandpass';
          bovFilter.frequency.value = 1800 - burst * 300;
          bovFilter.Q.value = 3.0;

          const bovGain = ctx.createGain();
          bovGain.gain.setValueAtTime(0.45 / (burst + 1), t);
          bovGain.gain.exponentialRampToValueAtTime(0.001, t + 0.07);

          bovNoise.connect(bovFilter);
          bovFilter.connect(bovGain);
          bovGain.connect(mainGain);
          bovNoise.start(t);
          bovNoise.stop(t + 0.08);
        }
      }
    }, 400);

    loopTimerRef.current = interval;

    activeNodesRef.current = {
      stop: () => {
        clearInterval(interval);
        try {
          rumble.stop();
          spoolOsc.stop();
        } catch (_) {}
      }
    };
  };

  // Synthesize Track 3: 1995 Eurodance Acid Bass (Pioneer 6x9)
  const startEurodance = (ctx: AudioContext, dest: AudioNode) => {
    const mainGain = ctx.createGain();
    mainGain.gain.value = 0.75;
    mainGain.connect(dest);

    // Car acoustics filter (6x9 in parcel shelf)
    const carAcoustics = ctx.createBiquadFilter();
    carAcoustics.type = 'peaking';
    carAcoustics.frequency.value = 75; // Sub punch
    carAcoustics.Q.value = 1.8;
    carAcoustics.gain.value = 4.0;
    carAcoustics.connect(mainGain);

    // 16-step bassline notes (frequencies in Hz: A1, C2, D2, F2, G2)
    const scale = [55, 55, 65.4, 73.4, 55, 87.3, 73.4, 65.4, 55, 55, 98.0, 87.3, 55, 73.4, 65.4, 55];
    const accents = [true, false, true, false, false, true, false, true, true, false, true, false, false, true, true, false];

    let step = 0;
    const intervalTime = (60 / 138) * 1000 / 4; // 16th notes at 138 BPM

    const interval = window.setInterval(() => {
      const now = ctx.currentTime;
      const freq = scale[step % scale.length];
      const isAccent = accents[step % accents.length];

      // Acid Bass Note
      const bassOsc = ctx.createOscillator();
      bassOsc.type = 'sawtooth';
      bassOsc.frequency.setValueAtTime(freq, now);

      const acidFilter = ctx.createBiquadFilter();
      acidFilter.type = 'lowpass';
      acidFilter.Q.value = isAccent ? 8.5 : 4.0;
      acidFilter.frequency.setValueAtTime(isAccent ? 1800 : 650, now);
      acidFilter.frequency.exponentialRampToValueAtTime(120, now + 0.12);

      const bassGain = ctx.createGain();
      bassGain.gain.setValueAtTime(isAccent ? 0.6 : 0.4, now);
      bassGain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

      bassOsc.connect(acidFilter);
      acidFilter.connect(bassGain);
      bassGain.connect(carAcoustics);

      bassOsc.start(now);
      bassOsc.stop(now + 0.15);

      // Kick on 1, 5, 9, 13 (quarter notes)
      if (step % 4 === 0) {
        const kickOsc = ctx.createOscillator();
        kickOsc.type = 'sine';
        kickOsc.frequency.setValueAtTime(140, now);
        kickOsc.frequency.exponentialRampToValueAtTime(42, now + 0.1);

        const kickGain = ctx.createGain();
        kickGain.gain.setValueAtTime(0.85, now);
        kickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

        kickOsc.connect(kickGain);
        kickGain.connect(carAcoustics);

        kickOsc.start(now);
        kickOsc.stop(now + 0.23);
      }

      // Closed Hi-Hat on offbeats
      if (step % 2 === 1) {
        const hatBuffer = ctx.createBuffer(1, ctx.sampleRate * 0.05, ctx.sampleRate);
        const hatData = hatBuffer.getChannelData(0);
        for (let i = 0; i < hatData.length; i++) {
          hatData[i] = Math.random() * 2 - 1;
        }

        const hatSource = ctx.createBufferSource();
        hatSource.buffer = hatBuffer;

        const hatFilter = ctx.createBiquadFilter();
        hatFilter.type = 'highpass';
        hatFilter.frequency.value = 7500;

        const hatGain = ctx.createGain();
        hatGain.gain.setValueAtTime(0.18, now);
        hatGain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

        hatSource.connect(hatFilter);
        hatFilter.connect(hatGain);
        hatGain.connect(carAcoustics);

        hatSource.start(now);
        hatSource.stop(now + 0.05);
      }

      step++;
    }, intervalTime);

    loopTimerRef.current = interval;

    activeNodesRef.current = {
      stop: () => {
        clearInterval(interval);
      }
    };
  };

  // Play track
  const playTrack = (trackId: SoundTrackId) => {
    stopCurrentSound();
    const ctx = getAudioContext();
    if (!masterGainRef.current) return;

    if (trackId === 'weber_idle') {
      startWeberIdle(ctx, masterGainRef.current);
    } else if (trackId === 'turbo_spool') {
      startTurboSpool(ctx, masterGainRef.current);
    } else if (trackId === 'eurodance_95') {
      startEurodance(ctx, masterGainRef.current);
    }
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      stopCurrentSound();
      setIsPlaying(false);
    } else {
      playTrack(activeTrack);
      setIsPlaying(true);
    }
  };

  const handleSelectTrack = (id: SoundTrackId) => {
    setActiveTrack(id);
    if (isPlaying) {
      playTrack(id);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopCurrentSound();
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch (_) {}
      }
    };
  }, []);

  if (!isOpen) return null;

  const currentTrackInfo = TRACKS.find((t) => t.id === activeTrack) || TRACKS[0];

  return (
    <div
      className={`border border-[#ab5700] rounded-[20px] bg-[#e5dccd] p-5 md:p-6 transition-all select-none ${
        isFloating ? 'shadow-none max-w-md w-full' : 'w-full'
      } ${className}`}
    >
      {/* Header Deck */}
      <div className="flex items-center justify-between border-b border-[#ab5700]/30 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Disc className={`w-5 h-5 text-[#ab5700] ${isPlaying ? 'animate-spin' : ''}`} />
          <span className="font-display text-[18px] text-[#ab5700] uppercase tracking-wide">
            CASSETTE & ESCAPE DECK // SINTETIZADOR 90s*
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono uppercase bg-[#e8e359] text-[#214534] px-2 py-0.5 rounded-[9999px]">
            {isPlaying ? 'TAPE RUNNING' : 'STANDBY'}
          </span>
          {onClose && (
            <button
              onClick={onClose}
              className="text-[#ab5700] hover:text-[#7997ff] text-xs font-mono uppercase px-2 py-1"
            >
              [CERRAR]
            </button>
          )}
        </div>
      </div>

      {/* Cassette Mechanical Deck Visualization */}
      <div className="relative border border-[#ab5700] rounded-[16px] bg-[#e5dccd] p-4 mb-5 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Reel */}
        <div className="flex items-center gap-3">
          <div
            className={`w-14 h-14 rounded-full border-2 border-[#ab5700] flex items-center justify-center transition-transform ${
              isPlaying ? 'animate-spin' : ''
            }`}
            style={{ animationDuration: '3s' }}
          >
            <div className="w-6 h-6 rounded-full border border-[#ab5700] flex items-center justify-center">
              <div className="w-2 h-2 bg-[#ab5700] rounded-full" />
            </div>
          </div>
          <div className="font-mono text-xs text-[#ab5700]">
            <div className="text-[10px] text-[#ab5700]/70 uppercase">LADO A // CHROME II</div>
            <div className="font-bold text-[#ab5700]">TDK MA-XG 90</div>
          </div>
        </div>

        {/* Central Display */}
        <div className="text-center px-3 py-1.5 border border-[#ab5700]/40 rounded-[10px] bg-[#e5dccd] max-w-[280px]">
          <div className="text-[10px] uppercase font-mono tracking-widest text-[#7997ff]">
            {currentTrackInfo.tag}
          </div>
          <div className="font-display text-[16px] text-[#ab5700] leading-tight truncate">
            {currentTrackInfo.name}
          </div>
          <div className="text-[11px] text-[#ab5700]/80 font-mono mt-0.5 truncate">
            {currentTrackInfo.subtitle}
          </div>
        </div>

        {/* Right Reel */}
        <div className="flex items-center gap-3">
          <div className="font-mono text-xs text-right text-[#ab5700] hidden sm:block">
            <div className="text-[10px] text-[#ab5700]/70 uppercase">DOLBY NR: B-TYPE</div>
            <div className="font-bold text-[#ab5700]">HI-FI 20-20kHz</div>
          </div>
          <div
            className={`w-14 h-14 rounded-full border-2 border-[#ab5700] flex items-center justify-center transition-transform ${
              isPlaying ? 'animate-spin' : ''
            }`}
            style={{ animationDuration: '3s' }}
          >
            <div className="w-6 h-6 rounded-full border border-[#ab5700] flex items-center justify-center">
              <div className="w-2 h-2 bg-[#ab5700] rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Track Selector Buttons (31px pill) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4">
        {TRACKS.map((track) => {
          const isSelected = activeTrack === track.id;
          return (
            <button
              key={track.id}
              onClick={() => handleSelectTrack(track.id)}
              className={`text-left p-3 rounded-[20px] border transition-colors ${
                isSelected
                  ? 'border-[#ab5700] bg-[#e8e359] text-[#214534]'
                  : 'border-[#ab5700]/50 bg-[#e5dccd] text-[#ab5700] hover:border-[#ab5700]'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono uppercase mb-1">
                <span className={isSelected ? 'text-[#214534]' : 'text-[#7997ff]'}>{track.tag}</span>
                {isSelected && isPlaying && (
                  <span className="w-2 h-2 rounded-full bg-[#214534] animate-pulse" />
                )}
              </div>
              <div className="font-display text-[14px] leading-tight">{track.name}</div>
              <div
                className={`text-[11px] mt-1 line-clamp-2 leading-tight ${
                  isSelected ? 'text-[#214534]/90' : 'text-[#ab5700]/75'
                }`}
              >
                {track.description}
              </div>
            </button>
          );
        })}
      </div>

      {/* Control Bar & Volume */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-[#ab5700]/30">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          {/* Main Play / Stop Pill Button (31px) */}
          <button
            onClick={handleTogglePlay}
            className={`btn-pill px-6 py-2.5 text-[12px] font-medium uppercase transition-colors ${
              isPlaying
                ? 'bg-[#ab5700] text-[#e8e359] border-[#ab5700]'
                : 'bg-[#e8e359] text-[#214534] border-[#e8e359] hover:bg-[#e8e359]/90'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4" />
                <span>DETENER REPRODUCCIÓN</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>ENCENDER MOTOR / AUDIO</span>
              </>
            )}
          </button>
        </div>

        {/* Volume Slider */}
        <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
          <Volume2 className="w-4 h-4 text-[#ab5700]" />
          <span className="text-[11px] font-mono text-[#ab5700] uppercase">VOLUMEN:</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-28 accent-[#ab5700] bg-[#e5dccd] border border-[#ab5700] rounded-full h-2 cursor-pointer"
          />
          <span className="text-[11px] font-mono text-[#ab5700] w-8">
            {Math.round(volume * 100)}%
          </span>
        </div>
      </div>
    </div>
  );
};
