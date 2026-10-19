import React from 'react';
import { Flag, Timer, Trophy } from 'lucide-react';

interface GalvezSectionProps {
  onOpenRegs: () => void;
}

export const GalvezSection: React.FC<GalvezSectionProps> = ({ onOpenRegs }) => {
  return (
    <section
      id="galvez"
      className="relative w-screen min-h-[90vh] py-24 md:py-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden select-none"
    >
      {/* Background Full-Bleed with VHS filter (No black background, treated directly) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/IMAGENES_Y_VIDEOS/SaveClip.App_844757823_17911960239491318_7313375227828960550_n.jpg"
          alt="Autódromo Oscar y Juan Gálvez Picadas de Noche"
          className="w-full h-full object-cover vhs-filter scale-105"
        />

        {/* SVG Grain Filter Overlay */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.08]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Horizontal Scanlines */}
        <div className="absolute inset-0 vhs-scanlines pointer-events-none" />
      </div>

      {/* Camcorder Corner OSD Details in Citron Beam #e8e359 */}
      <div className="absolute top-6 left-6 z-20 font-mono text-[11px] md:text-[13px] text-[#e8e359] flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#e8e359] animate-rec-blink" />
        <span className="font-medium uppercase">
          REC ● // PISTA 1 GÁLVEZ // TAPE HI8
        </span>
      </div>

      <div className="absolute bottom-6 right-6 z-20 font-mono text-[11px] md:text-[13px] text-[#e8e359] bg-[#103d26]/40 px-2.5 py-1 rounded">
        VIERNES 03:15 AM - AUTÓDROMO GÁLVEZ
      </div>

      {/* Central Superposed Content (Direct Citron Beam #e8e359 on image, NO dark card box) */}
      <div className="relative z-20 max-w-[1050px] mx-auto px-4 flex flex-col items-center">
        {/* Subtitle tag */}
        <div className="font-mono text-xs uppercase tracking-widest text-[#e8e359] mb-4 border border-[#e8e359] px-3.5 py-1 rounded-[31px]">
          LA CATEDRAL DE LOS VIERNES // PUERTA 1
        </div>

        {/* Monumental Display Title in Parafina 500, 104px (clamp), line-height 0.85, #e8e359 */}
        <h2 className="display text-[#e8e359] uppercase max-w-[950px] mb-6">
          402 METROS BAJO LAS LUCES DE SODIO*
        </h2>

        {/* Short Narrative in Parafina 500, 24px, #e8e359 */}
        <p className="font-display text-[20px] md:text-[24px] leading-snug text-[#e8e359] max-w-[800px] mb-10">
          Viernes a la noche en el Gálvez. Las tribunas repletas hasta las cuatro de la mañana, el olor a caucho quemado en el cajón de pre-largada, el semáforo cayendo a verde y el duelo eterno por bajar un segundo más sin romper caja.
        </p>

        {/* Ghost Pill CTA in #e8e359 (31px radius) */}
        <button
          type="button"
          onClick={onOpenRegs}
          className="btn-pill-lg bg-transparent border border-[#e8e359] text-[#e8e359] hover:bg-[#e8e359] hover:text-[#214534] transition-all text-[13px] font-medium"
        >
          <Flag className="w-4 h-4" />
          <span>[ EXPLORAR REGLAMENTOS Y CATEGORÍAS DE LOS 90S ]</span>
        </button>
      </div>
    </section>
  );
};
