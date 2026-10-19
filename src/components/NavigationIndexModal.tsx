import React from 'react';
import { X, ArrowRight, Disc, MapPin, Film, History, Flag, BookOpen, Tv, Camera, Image } from 'lucide-react';

interface NavigationIndexModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export const NavigationIndexModal: React.FC<NavigationIndexModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  if (!isOpen) return null;

  const sections = [
    {
      id: 'hero',
      number: '01',
      title: 'HERO MASTER // CINTA REEL EN MOVIMIENTO',
      tag: 'LOUD // VIDEO MP4',
      icon: Film,
      desc: 'Video real de época de fondo, logo oficial y sintonizador de motor.'
    },
    {
      id: 'pliego-editorial',
      number: '02',
      title: 'PLIEGO CENTRAL // REVISTA CORSA & PARABRISAS 1996',
      tag: 'EDITORIAL ASIMÉTRICO',
      icon: BookOpen,
      desc: 'Foto Ultra HD 2048px a sangre, crónicas y glosario del asfalto porteño.'
    },
    {
      id: 'videoteca',
      number: '03',
      title: 'VIDEOTECA ANALÓGICA // DECK DE 16 CINTAS VHS',
      tag: 'INTERACTIVO // 16 VIDEOS',
      icon: Tv,
      desc: 'Monitor CRT interactivo para cargar y reproducir cualquiera de los 16 videos reales.'
    },
    {
      id: 'filmstrip',
      number: '04',
      title: 'HOJA DE CONTACTO 35mm // TIRA CONTINUA KODAK',
      tag: 'TIRA DE NEGATIVOS',
      icon: Camera,
      desc: 'Carril horizontal continuo con 26 negativos de encuentros nocturnos.'
    },
    {
      id: 'armados',
      number: '05',
      title: 'SERIE DOCUMENTAL // HISTORIAS DE ARMADOS',
      tag: 'CASOS DE CULTO',
      icon: History,
      desc: 'Gol G1 500HP de Gustavo, Fiat Uno Turbo de Naza, Civic EG6, Gacel Turbo y Sorpasso.'
    },
    {
      id: 'galvez',
      number: '06',
      title: 'LA CATEDRAL DE LOS VIERNES // 402 METROS',
      tag: 'LOUD // GÁLVEZ NOCTURNO',
      icon: Flag,
      desc: 'La recta de vapor de sodio y reglamento oficial de Clases 1 a 9.'
    },
    {
      id: 'boveda',
      number: '07',
      title: 'BÓVEDA FOTOGRÁFICA COMPLETA // 83 REGISTROS',
      tag: 'CATÁLOGO FOTOGRÁFICO',
      icon: Image,
      desc: 'Explorador con filtros clasificados y visualizador Lightbox ampliado.'
    },
    {
      id: 'spots',
      number: '08',
      title: 'CARTOGRAFÍA NOCTURNA // PUNTOS DE ENCUENTRO',
      tag: 'HOJA DE RUTA',
      icon: MapPin,
      desc: 'Shell Libertador, Gral. Paz, Panamericana, Gálvez y Pinamar Bunge.'
    },
    {
      id: 'comunidad',
      number: '09',
      title: 'HISTORIA ORAL // SOUNDDECK & CONVOCATORIA',
      tag: 'COMUNIDAD // CIERRE',
      icon: Disc,
      desc: 'Testimonios de primera persona, sintetizador sonoro analógico y convocatoria.'
    }
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-[#103d26]/85 backdrop-blur-none animate-fadeIn">
      {/* Editorial Index Container */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#e5dccd] border border-[#ab5700] rounded-[20px] p-6 md:p-8 flex flex-col gap-6 select-none">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-[#ab5700]/30 pb-4">
          <div>
            <div className="text-[11px] font-mono text-[#7997ff] uppercase">
              ÍNDICE EDITORIAL // ARCHIVO DE 100 REGISTROS
            </div>
            <h2 className="font-display text-[26px] md:text-[34px] text-[#ab5700] leading-none mt-1">
              SPORT MEET 90s* ARCHIVO MAESTRO
            </h2>
          </div>
          <button
            onClick={onClose}
            className="btn-pill text-[#ab5700] border-[#ab5700] hover:bg-[#ab5700] hover:text-[#e5dccd] p-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation list */}
        <div className="space-y-2.5">
          {sections.map((sec) => {
            const Icon = sec.icon;
            return (
              <button
                key={sec.id}
                onClick={() => handleItemClick(sec.id)}
                className="w-full text-left border border-[#ab5700]/40 rounded-[14px] p-3.5 bg-[#e5dccd] hover:border-[#ab5700] hover:bg-[#e8e359] group transition-colors flex items-center justify-between gap-4"
              >
                <div className="flex items-start gap-3.5">
                  <span className="font-mono text-xs font-bold text-[#7997ff] group-hover:text-[#214534] pt-0.5">
                    {sec.number}
                  </span>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[9px] font-mono uppercase bg-[#ab5700] text-[#e8e359] group-hover:bg-[#214534] px-2 py-0.5 rounded-[9999px]">
                        {sec.tag}
                      </span>
                    </div>
                    <div className="font-display text-[16px] md:text-[18px] text-[#ab5700] group-hover:text-[#214534] leading-tight">
                      {sec.title}
                    </div>
                    <div className="text-[11px] font-mono text-[#ab5700]/80 group-hover:text-[#214534]/90 mt-0.5 line-clamp-1">
                      {sec.desc}
                    </div>
                  </div>
                </div>

                <div className="shrink-0 p-1.5 rounded-full border border-[#ab5700] group-hover:border-[#214534] group-hover:bg-[#214534] group-hover:text-[#e8e359] text-[#ab5700] transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>

        <div className="border-t border-[#ab5700]/30 pt-4 flex items-center justify-between font-mono text-xs text-[#ab5700]/80">
          <span>@SPORTMEET90S // 16 CINTAS // 83 FOTOGRAFÍAS</span>
          <span>SISTEMA DE DISEÑO ARTE*</span>
        </div>
      </div>
    </div>
  );
};
