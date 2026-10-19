import React, { useState } from 'react';
import { ALL_ARCHIVE_IMAGES, ImageItem } from '../data/mediaInventory';
import { Image, Filter, Eye, X, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

type CategoryFilter = 'all' | 'playones' | 'galvez' | 'musculo' | 'jdm_euro' | 'taller' | 'recortes';

const FILTER_BUTTONS: { id: CategoryFilter; label: string }[] = [
  { id: 'all', label: 'TODAS LAS 83 FOTOS' },
  { id: 'playones', label: 'NOCHES DE PLAYÓN' },
  { id: 'galvez', label: 'EL GÁLVEZ 402M' },
  { id: 'musculo', label: 'MÚSCULO NACIONAL' },
  { id: 'jdm_euro', label: 'JDM & EURO 90S' },
  { id: 'taller', label: 'TALLER & MOTORES' },
  { id: 'recortes', label: 'RECORTES DE PRENSA' },
];

export const ArchiveVault: React.FC = () => {
  const { domRef, isRevealed } = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<ImageItem | null>(null);
  const [displayCount, setDisplayCount] = useState<number>(24);

  const filteredImages = ALL_ARCHIVE_IMAGES.filter((img) => {
    if (activeCategory === 'all') return true;
    return img.category === activeCategory;
  });

  const visibleImages = filteredImages.slice(0, displayCount);

  return (
    <section
      id="boveda"
      ref={domRef}
      className={`w-full bg-[#e5dccd] py-[90px] px-6 select-none reveal-mask ${
        isRevealed ? 'is-revealed' : ''
      }`}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#7997ff] mb-2 flex items-center gap-1.5">
              <Image className="w-4 h-4 text-[#7997ff]" />
              <span>BÓVEDA FOTOGRÁFICA COMPLETA // 83 REGISTROS AUTÉNTICOS</span>
            </div>
            <h2 className="heading text-[#ab5700] uppercase">
              ARCHIVO FOTOGRÁFICO DE LA CALLE*
            </h2>
            <p className="font-display text-[17px] md:text-[20px] text-[#7997ff] mt-1 max-w-[700px]">
              El catálogo fotográfico íntegro subido por la comunidad de @sportmeet90s. Filtrá por temáticas para explorar el asfalto porteño.
            </p>
          </div>

          <div className="font-mono text-xs text-[#ab5700] border border-[#ab5700] px-3 py-1 rounded-[31px] w-fit">
            MOSTRANDO {visibleImages.length} DE {filteredImages.length} FOTOS
          </div>
        </div>

        {/* Category Filter Pills (31px radius) */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {FILTER_BUTTONS.map((f) => {
            const isSelected = f.id === activeCategory;
            return (
              <button
                key={f.id}
                onClick={() => {
                  setActiveCategory(f.id);
                  setDisplayCount(24);
                }}
                className={`btn-pill text-[11px] font-medium uppercase transition-colors ${
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 mb-8">
          {visibleImages.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => setSelectedPhoto(img)}
              className="border border-[#ab5700] rounded-[14px] p-2 bg-[#e5dccd] group hover:border-[#7997ff] transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full rounded-[10px] overflow-hidden border border-[#ab5700]/40 mb-2">
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-full object-cover vhs-filter transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 vhs-scanlines pointer-events-none" />

                <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity bg-[#e8e359] text-[#214534] p-1 rounded-full">
                  <Eye className="w-3 h-3" />
                </div>
              </div>

              <div className="font-mono text-[9px] text-[#ab5700]/80 truncate">
                {img.location.split(',')[0]}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {displayCount < filteredImages.length && (
          <div className="text-center pt-4">
            <button
              onClick={() => setDisplayCount((prev) => prev + 24)}
              className="btn-pill-lg bg-[#e8e359] text-[#214534] border-[#e8e359] hover:bg-[#e8e359]/90 text-xs font-bold uppercase"
            >
              <span>CARGAR MÁS FOTOGRAFÍAS (+24)</span>
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#103d26]/85 backdrop-blur-none"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#e5dccd] border border-[#ab5700] rounded-[20px] p-6 flex flex-col gap-4 select-none"
          >
            <div className="flex items-center justify-between border-b border-[#ab5700]/30 pb-3">
              <div>
                <span className="text-[10px] font-mono text-[#7997ff] uppercase">
                  REGISTRO ORIGINAL // @SPORTMEET90S
                </span>
                <h3 className="font-display text-[24px] text-[#ab5700]">
                  {selectedPhoto.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="btn-pill text-[#ab5700] border-[#ab5700] p-1.5 hover:bg-[#ab5700] hover:text-[#e5dccd]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[16/10] max-h-[60vh] w-full rounded-[14px] overflow-hidden border border-[#ab5700]">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain bg-[#103d26]/40 vhs-filter"
              />
              <div className="absolute inset-0 vhs-scanlines pointer-events-none" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs border-t border-[#ab5700]/30 pt-3 text-[#ab5700]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#7997ff]" />
                <span>{selectedPhoto.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#d99623]" />
                <span>AÑO: {selectedPhoto.year}</span>
              </div>
              <div className="text-right">
                <span>{selectedPhoto.width} x {selectedPhoto.height} PX</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
