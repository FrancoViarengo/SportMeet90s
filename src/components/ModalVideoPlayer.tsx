import React from 'react';
import { X, ExternalLink, Play, Disc } from 'lucide-react';
import { Episode } from '../types';

interface ModalVideoPlayerProps {
  episode: Episode | null;
  onClose: () => void;
}

export const ModalVideoPlayer: React.FC<ModalVideoPlayerProps> = ({ episode, onClose }) => {
  if (!episode) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-[#103d26]/80 backdrop-blur-none animate-fadeIn">
      {/* Modal Card - 20px radius, 1px solid #ab5700, #e5dccd background */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#e5dccd] border border-[#ab5700] rounded-[20px] p-5 md:p-8 flex flex-col gap-6">
        {/* Top Bar Modal */}
        <div className="flex items-start justify-between border-b border-[#ab5700]/30 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono uppercase bg-[#e8e359] text-[#214534] px-2.5 py-0.5 rounded-[9999px]">
                EPISODIO #{episode.episodeNumber} // {episode.category}
              </span>
              <span className="text-[12px] font-mono text-[#7997ff]">
                {episode.osdTimestamp}
              </span>
            </div>
            <h2 className="font-display text-[26px] md:text-[34px] leading-tight text-[#ab5700]">
              {episode.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="btn-pill text-[#ab5700] border-[#ab5700] hover:bg-[#ab5700] hover:text-[#e5dccd] transition-colors p-2"
            title="Cerrar reproductor"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Frame with VHS Filter & OSD */}
        <div className="relative aspect-video w-full rounded-[16px] overflow-hidden border border-[#ab5700] bg-[#103d26]">
          {episode.youtubeId ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${episode.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              title={episode.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0 vhs-filter"
            />
          ) : (
            <img
              src={episode.localThumbnail}
              alt={episode.title}
              className="w-full h-full object-cover vhs-filter"
            />
          )}

          {/* Scanlines Overlay */}
          <div className="absolute inset-0 vhs-scanlines pointer-events-none" />

          {/* Camcorder OSD Corner */}
          <div className="absolute top-3 left-3 z-10 font-mono text-[11px] text-[#e8e359] pointer-events-none flex items-center gap-2 bg-[#103d26]/60 px-2 py-0.5 rounded">
            <span className="w-2 h-2 rounded-full bg-[#e8e359] animate-rec-blink" />
            <span>PLAY ▶ HI8 CASSETTE</span>
          </div>
        </div>

        {/* Vehicle Metadata & Owner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-y border-[#ab5700]/30 py-4 font-mono text-xs">
          <div>
            <div className="text-[#7997ff] uppercase text-[10px]">VEHÍCULO DOCUMENTADO</div>
            <div className="text-[#ab5700] font-bold text-sm mt-0.5">{episode.vehicle}</div>
          </div>
          <div>
            <div className="text-[#7997ff] uppercase text-[10px]">DUEÑO / PREPARADOR</div>
            <div className="text-[#ab5700] font-bold text-sm mt-0.5">{episode.owner}</div>
          </div>
          <div>
            <div className="text-[#7997ff] uppercase text-[10px]">AÑO / MODELO</div>
            <div className="text-[#ab5700] font-bold text-sm mt-0.5">{episode.yearModel}</div>
          </div>
        </div>

        {/* Full Narrative & Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-display text-[22px] text-[#ab5700]">CRÓNICA HISTÓRICA DEL ARMADO</h3>
            {episode.fullChronicle.map((parr, idx) => (
              <p key={idx} className="body-editorial text-[15px] leading-relaxed">
                {parr}
              </p>
            ))}

            <blockquote className="border-l-2 border-[#7997ff] pl-4 py-1 my-4 italic font-display text-[17px] text-[#ab5700]">
              "{episode.quote}"
              <span className="block text-xs font-mono font-normal text-[#7997ff] mt-1 not-italic">
                — {episode.owner} en entrevista con @sportmeet90s
              </span>
            </blockquote>
          </div>

          {/* Technical Specs List */}
          <div className="border border-[#ab5700] rounded-[16px] p-4 bg-[#e5dccd] h-fit">
            <h4 className="font-display text-[18px] text-[#ab5700] mb-3 pb-2 border-b border-[#ab5700]/30">
              FICHA TÉCNICA DE ÉPOCA
            </h4>
            <div className="space-y-3 font-mono text-xs">
              {episode.specs.map((spec, i) => (
                <div key={i} className="border-b border-[#d99623]/30 pb-2 last:border-0">
                  <div className="text-[#d99623] text-[10px] uppercase">{spec.label}</div>
                  <div className="text-[#ab5700] font-medium mt-0.5">{spec.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-3 border-t border-[#ab5700]/30">
              <a
                href={episode.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill w-full bg-[#e8e359] text-[#214534] border-[#e8e359] hover:bg-[#e8e359]/90 text-[11px]"
              >
                <span>VER POST EN INSTAGRAM ↗</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
