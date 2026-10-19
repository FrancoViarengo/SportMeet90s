import React, { useState } from 'react';
import { VHSMediaFrame } from './VHSMediaFrame';
import { ARCHIVE_ITEMS } from '../data/archiveData';
import { ArchiveItem } from '../types';
import { ExternalLink, Tag, MapPin, Film } from 'lucide-react';

type FilterType = 'all' | 'vhs' | 'armados' | 'kodak' | 'musculo' | 'jdm_euro';

interface FilterOption {
  id: FilterType;
  label: string;
}

const FILTERS: FilterOption[] = [
  { id: 'all', label: 'TODO EL ARCHIVO' },
  { id: 'vhs', label: 'VIDEOS VHS / HI8' },
  { id: 'armados', label: 'HISTORIAS DE ARMADOS' },
  { id: 'kodak', label: 'FOTOS PAPEL KODAK' },
  { id: 'musculo', label: 'MÚSCULO NACIONAL' },
  { id: 'jdm_euro', label: 'JDM & EURO 90S' },
];

interface GallerySectionProps {
  onSelectItem?: (item: ArchiveItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectItem }) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredItems = ARCHIVE_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section
      id="galeria"
      className="w-full bg-[#e5dccd] py-[100px] px-6 select-none"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header in Parafina 500, 70px (clamp), line-height 0.85, Morning Glory #7997ff */}
        <div className="mb-10 text-center md:text-left">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#ab5700] mb-2">
            ARCHIVO DIGITAL COOPERATIVO // SPORT MEET 90s*
          </div>
          <h2 className="heading-lg text-[#7997ff] uppercase">
            CINTAS RECUPERADAS & ARCHIVO @SPORTMEET90S*
          </h2>
          <p className="font-display text-[18px] md:text-[22px] text-[#ab5700] mt-2 max-w-[850px] leading-snug">
            Fotografías en película, copias de videocassette y testimonios rescatados directamente de la comunidad de Instagram.
          </p>
        </div>

        {/* Filter Pills Bar (31px border-radius) */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12">
          {FILTERS.map((f) => {
            const isSelected = f.id === activeFilter;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`btn-pill text-[12px] font-medium uppercase transition-colors ${
                  isSelected
                    ? 'bg-[#e8e359] text-[#214534] border-[#e8e359]'
                    : 'bg-transparent text-[#ab5700] border-[#ab5700] hover:bg-[#ab5700]/10'
                }`}
              >
                <span>[ {f.label} ]</span>
              </button>
            );
          })}
        </div>

        {/* Grid of Archive Items (20px radius cards, 1px solid #ab5700, zero shadows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="border border-[#ab5700] rounded-[20px] p-6 bg-[#e5dccd] flex flex-col justify-between group"
            >
              <div>
                {/* Media with VHS frame */}
                <div className="mb-5">
                  <VHSMediaFrame
                    imageSrc={item.mediaSrc}
                    imageAlt={item.title}
                    youtubeId={item.youtubeId}
                    osdTimestamp={item.osdTimestamp}
                    tapeMode={item.category === 'vhs' ? 'HI8 TAPE' : 'SP'}
                    aspectRatio="aspect-[16/10]"
                    instagramUrl={item.instagramUrl}
                    showCustomControls={false}
                  />
                </div>

                {/* Location and Year Header */}
                <div className="flex items-center justify-between text-xs font-mono text-[#ab5700]/80 mb-2">
                  <div className="flex items-center gap-1.5 text-[#7997ff]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>
                  <span className="font-bold text-[#ab5700]">{item.year}</span>
                </div>

                {/* Title in Parafina 500 */}
                <h3 className="font-display text-[22px] md:text-[24px] text-[#ab5700] leading-snug mb-3">
                  {item.title}
                </h3>

                {/* Story Paragraphs in Poppins 16px with inline-blue highlights */}
                <div className="space-y-2 body-editorial text-[15px] leading-relaxed mb-4">
                  {item.story.map((parr, idx) => (
                    <p key={idx}>{parr}</p>
                  ))}
                </div>

                {/* Technical Tags in Olive Branch #568037 (border-radius: 9999px) */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-[9999px] border border-[#568037] text-[#568037] bg-[#e5dccd]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Pill CTA linking directly to @sportmeet90s on Instagram */}
              <div className="border-t border-[#ab5700]/30 pt-4 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#ab5700]/70 uppercase">
                  ARCHIVO @SPORTMEET90S
                </span>
                <a
                  href={item.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill text-[11px] bg-[#e5dccd] text-[#ab5700] border-[#ab5700] hover:bg-[#e8e359] hover:text-[#214534] hover:border-[#e8e359] transition-colors"
                >
                  <span>VER PUBLICACIÓN EN INSTAGRAM ↗</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
