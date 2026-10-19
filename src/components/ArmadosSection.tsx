import React, { useState } from 'react';
import { VHSMediaFrame } from './VHSMediaFrame';
import { EPISODES_DATA } from '../data/archiveData';
import { Episode } from '../types';
import { Play, Flame, ExternalLink, ChevronRight, ShieldCheck, Zap } from 'lucide-react';

interface ArmadosSectionProps {
  onSelectEpisode: (episode: Episode) => void;
}

export const ArmadosSection: React.FC<ArmadosSectionProps> = ({ onSelectEpisode }) => {
  const [selectedEpIndex, setSelectedEpIndex] = useState<number>(0);

  const featuredEpisodes = EPISODES_DATA.filter((ep) => ep.featured);
  const otherEpisodes = EPISODES_DATA.filter((ep) => !ep.featured);

  const activeFeatured = featuredEpisodes[selectedEpIndex] || featuredEpisodes[0];

  return (
    <section
      id="armados"
      className="w-full bg-[#e5dccd] pt-[120px] pb-[100px] px-6 select-none"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header Left-Aligned in Parafina 500, 70px (clamp), color #ab5700 */}
        <div className="mb-12">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#7997ff] mb-2">
            SERIE DOCUMENTAL INSIGNIA // PRODUCCIÓN ORIGINAL @SPORTMEET90S
          </div>
          <h2 className="heading-lg text-[#ab5700] uppercase">
            HISTORIAS DE ARMADOS: LA VOZ DE LOS DUEÑOS Y PREPARADORES*
          </h2>
          <p className="font-display text-[20px] md:text-[24px] text-[#7997ff] mt-3 max-w-[850px] leading-tight">
            La serie documental de @sportmeet90s que rescata los autos míticos que marcaron la calle y la pista, contados en primera persona.
          </p>
        </div>

        {/* Feature Episode Selector Tabs (Pill Buttons 31px) */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {featuredEpisodes.map((ep, idx) => {
            const isSelected = idx === selectedEpIndex;
            return (
              <button
                key={ep.id}
                onClick={() => setSelectedEpIndex(idx)}
                className={`btn-pill ${
                  isSelected
                    ? 'bg-[#e8e359] text-[#214534] border-[#e8e359]'
                    : 'bg-transparent text-[#ab5700] border-[#ab5700] hover:border-[#ab5700] hover:bg-[#ab5700]/10'
                }`}
              >
                <span>EPISODIO #{ep.episodeNumber}: {ep.vehicle}</span>
              </button>
            );
          })}
        </div>

        {/* Big Expanded Feature Card (20px radius, 1px solid #ab5700, 24px padding, zero shadows) */}
        <div className="border border-[#ab5700] rounded-[20px] p-6 md:p-8 bg-[#e5dccd] mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: VHS Frame with Episode Thumbnail / Video Player Trigger */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <VHSMediaFrame
                imageSrc={activeFeatured.localThumbnail}
                imageAlt={activeFeatured.title}
                youtubeId={activeFeatured.youtubeId}
                osdTimestamp={activeFeatured.osdTimestamp}
                tapeMode="SP / Hi8"
                aspectRatio="aspect-video"
                onOpenPlayer={() => onSelectEpisode(activeFeatured)}
                instagramUrl={activeFeatured.instagramUrl}
                className="cursor-pointer"
              />

              {/* Action Pill below Video Frame */}
              <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                <button
                  type="button"
                  onClick={() => onSelectEpisode(activeFeatured)}
                  className="btn-pill bg-[#e8e359] text-[#214534] border-[#e8e359] hover:bg-[#e8e359]/90 font-medium"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>REPRODUCIR EPISODIO COMPLETO EN VHS</span>
                </button>

                <div className="text-[#7997ff] uppercase">
                  DUEÑO: <strong className="text-[#ab5700]">{activeFeatured.owner}</strong> // AÑO {activeFeatured.yearModel}
                </div>
              </div>
            </div>

            {/* Right Column: Deep Technical Breakdown & Narrative */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono uppercase bg-[#ab5700] text-[#e8e359] px-2.5 py-0.5 rounded-[9999px]">
                  EPISODIO #{activeFeatured.episodeNumber}
                </span>
                <span className="text-xs font-mono text-[#d99623]">
                  {activeFeatured.category}
                </span>
              </div>

              <h3 className="font-display text-[28px] md:text-[34px] leading-tight text-[#ab5700]">
                {activeFeatured.title}
              </h3>

              <div className="space-y-3">
                {activeFeatured.fullChronicle.map((parr, i) => (
                  <p key={i} className="body-editorial text-[15px] leading-relaxed">
                    {parr}
                  </p>
                ))}
              </div>

              {/* Technical Specifications List with Amber Glow #d99623 borders */}
              <div className="border border-[#d99623] rounded-[16px] p-4 bg-[#e5dccd]">
                <div className="text-[11px] font-mono text-[#d99623] uppercase font-bold mb-2 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  <span>CONFIGURACIÓN MECÁNICA DE ÉPOCA</span>
                </div>
                <div className="space-y-2 font-mono text-xs">
                  {activeFeatured.specs.map((item, idx) => (
                    <div
                      key={idx}
                      className="border-b border-[#d99623]/30 pb-1.5 last:border-0 flex flex-col"
                    >
                      <span className="text-[#ab5700]/70 text-[10px] uppercase">{item.label}</span>
                      <span className="text-[#ab5700] font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Period Quote */}
              <div className="border-l-2 border-[#7997ff] pl-3 py-1 font-display text-[16px] text-[#ab5700] italic">
                "{activeFeatured.quote}"
              </div>
            </div>
          </div>
        </div>

        {/* Archive of Legends of the Street (Additional Episodes of SportMeet90s) */}
        <div>
          <div className="border-b border-[#ab5700]/30 pb-3 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <div className="text-[11px] font-mono text-[#7997ff] uppercase">
                CATÁLOGO DE CASOS DOCUMENTADOS
              </div>
              <h3 className="font-display text-[32px] text-[#ab5700] uppercase mt-0.5">
                ARCHIVO DE LEYENDAS DE LA CALLE*
              </h3>
            </div>
            <span className="text-xs font-mono text-[#ab5700]/70">
              ENTREVISTAS & AUTOS ORIGINALES
            </span>
          </div>

          {/* Grid of Episode Cards (20px radius, 1px solid #ab5700, 24px padding) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherEpisodes.map((ep) => (
              <div
                key={ep.id}
                className="border border-[#ab5700] rounded-[20px] p-5 bg-[#e5dccd] flex flex-col justify-between hover:border-[#7997ff] transition-colors group cursor-pointer"
                onClick={() => onSelectEpisode(ep)}
              >
                <div>
                  <div className="mb-4">
                    <VHSMediaFrame
                      imageSrc={ep.localThumbnail}
                      imageAlt={ep.title}
                      osdTimestamp={ep.osdTimestamp}
                      tapeMode="SP"
                      aspectRatio="aspect-video"
                      showCustomControls={false}
                    />
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono uppercase bg-[#ab5700] text-[#e8e359] px-2 py-0.5 rounded-[9999px]">
                      EP #{ep.episodeNumber}
                    </span>
                    <span className="text-[11px] font-mono text-[#7997ff]">
                      {ep.yearModel} // {ep.category}
                    </span>
                  </div>

                  <h4 className="font-display text-[20px] leading-snug text-[#ab5700] group-hover:text-[#7997ff] transition-colors">
                    {ep.title}
                  </h4>

                  <p className="body-editorial text-[13px] text-[#ab5700]/80 mt-2 line-clamp-3">
                    {ep.shortDescription}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#ab5700]/25 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#ab5700]/80">
                    DUEÑO: <strong>{ep.owner}</strong>
                  </span>
                  <div className="btn-pill text-[11px] px-3 py-1 bg-transparent border-[#ab5700] text-[#ab5700] group-hover:bg-[#e8e359] group-hover:text-[#214534] group-hover:border-[#e8e359] transition-colors">
                    <span>VER FICHA ↗</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
