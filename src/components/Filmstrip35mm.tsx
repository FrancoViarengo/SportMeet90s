import React, { useRef, useState } from 'react';
import { FILMSTRIP_IMAGES, ImageItem } from '../data/mediaInventory';
import { Camera, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Filmstrip35mm: React.FC = () => {
  const { domRef, isRevealed } = useScrollReveal();
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<ImageItem | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="filmstrip"
      ref={domRef}
      className={`w-full bg-[#e5dccd] py-[80px] select-none overflow-hidden reveal-mask ${
        isRevealed ? 'is-revealed' : ''
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#7997ff] mb-2 flex items-center gap-1.5">
            <Camera className="w-4 h-4 text-[#7997ff]" />
            <span>TIRA CONTINUA DE NEGATIVOS 35mm // KODAK GOLD 400</span>
          </div>
          <h2 className="heading text-[#ab5700] uppercase">
            HOJA DE CONTACTO: NOCHES DE ENCUENTRO*
          </h2>
          <p className="font-display text-[17px] md:text-[19px] text-[#7997ff] mt-1 max-w-[680px]">
            Deslizá el rollo para explorar 26 negativos recuperados de las estaciones de servicio, boxes del Gálvez y caravanas de madrugada.
          </p>
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            className="btn-pill px-3 py-2 bg-transparent border-[#ab5700] text-[#ab5700] hover:bg-[#ab5700] hover:text-[#e5dccd]"
            title="Desplazar a la izquierda"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="btn-pill px-3 py-2 bg-transparent border-[#ab5700] text-[#ab5700] hover:bg-[#ab5700] hover:text-[#e5dccd]"
            title="Desplazar a la derecha"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 35mm Filmstrip Horizontal Track with Sprocket Perforations */}
      <div className="w-full relative py-4 border-y border-[#ab5700]">
        {/* Top Sprocket Perforations */}
        <div className="h-3 w-full sprocket-border-t opacity-40 mb-2" />

        {/* Scrollable Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto px-6 scrollbar-none scroll-smooth cursor-grab active:cursor-grabbing py-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {FILMSTRIP_IMAGES.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => setSelectedPhoto(img)}
              className="shrink-0 w-[240px] md:w-[300px] border border-[#ab5700] rounded-[14px] bg-[#e5dccd] p-2.5 flex flex-col justify-between group hover:border-[#7997ff] transition-all cursor-pointer"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full rounded-[10px] overflow-hidden border border-[#ab5700]/50 mb-2">
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-full object-cover vhs-filter transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 vhs-scanlines pointer-events-none" />

                <div className="absolute bottom-1.5 left-1.5 font-mono text-[9px] bg-[#103d26]/80 text-[#e8e359] px-1.5 py-0.5 rounded">
                  FRAME #{String(idx + 1).padStart(2, '0')}
                </div>

                <div className="absolute top-1.5 right-1.5 opacity-0 group-hover:opacity-100 transition-opacity bg-[#e8e359] text-[#214534] p-1 rounded-full">
                  <Maximize2 className="w-3 h-3" />
                </div>
              </div>

              {/* Caption */}
              <div className="font-mono text-[10px] flex items-center justify-between text-[#ab5700]/80">
                <span className="truncate max-w-[180px]">{img.location.split(',')[0]}</span>
                <span className="font-bold text-[#7997ff]">{img.year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Sprocket Perforations */}
        <div className="h-3 w-full sprocket-border-b opacity-40 mt-2" />
      </div>

      {/* Lightbox Modal when a frame is clicked */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#103d26]/85 backdrop-blur-none"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-[#e5dccd] border border-[#ab5700] rounded-[20px] p-5 flex flex-col gap-4 select-none"
          >
            <div className="flex items-center justify-between border-b border-[#ab5700]/30 pb-3">
              <div>
                <span className="text-[10px] font-mono text-[#7997ff] uppercase">
                  AMPLIACIÓN DE NEGATIVO // KODAK GOLD 400
                </span>
                <h3 className="font-display text-[22px] text-[#ab5700]">
                  {selectedPhoto.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="btn-pill text-[#ab5700] border-[#ab5700] p-1.5 hover:bg-[#ab5700] hover:text-[#e5dccd]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative aspect-[4/3] w-full rounded-[14px] overflow-hidden border border-[#ab5700]">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-full object-cover vhs-filter"
              />
              <div className="absolute inset-0 vhs-scanlines pointer-events-none" />
              <div className="absolute bottom-3 right-3 font-mono text-xs bg-[#103d26]/80 text-[#e8e359] px-2 py-1 rounded">
                {selectedPhoto.location} // {selectedPhoto.year}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-[#ab5700]">
              <span>RESOLUCIÓN: {selectedPhoto.width} x {selectedPhoto.height} px</span>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="btn-pill text-[11px] bg-[#e8e359] text-[#214534] border-[#e8e359]"
              >
                CERRAR AMPLIACIÓN
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
