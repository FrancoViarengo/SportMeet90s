import React from 'react';
import { X, Trophy, Flag, Timer } from 'lucide-react';
import { GALVEZ_CATEGORIES } from '../data/archiveData';

interface ModalGalvezRegsProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalGalvezRegs: React.FC<ModalGalvezRegsProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-[#103d26]/85 backdrop-blur-none animate-fadeIn">
      {/* Editorial Drawer - 20px radius, 1px solid #ab5700, #e5dccd background */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#e5dccd] border border-[#ab5700] rounded-[20px] p-6 md:p-8 flex flex-col gap-6 select-none">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#ab5700]/30 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[11px] font-mono uppercase bg-[#e8e359] text-[#214534] px-2.5 py-0.5 rounded-[9999px]">
                REGLAMENTO OFICIAL HISTÓRICO // DÉCADA 1990-2000
              </span>
            </div>
            <h2 className="font-display text-[28px] md:text-[38px] leading-tight text-[#ab5700]">
              CATEGORÍAS Y TIEMPOS DEL CUARTO DE MILLA EN EL GÁLVEZ*
            </h2>
            <p className="text-[14px] text-[#ab5700]/85 font-mono mt-1">
              La estructura técnica de las picadas porteñas de los viernes por la noche en la recta de 402 metros.
            </p>
          </div>
          <button
            onClick={onClose}
            className="btn-pill text-[#ab5700] border-[#ab5700] hover:bg-[#ab5700] hover:text-[#e5dccd] transition-colors p-2"
            title="Cerrar reglamento"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Intro Banner */}
        <div className="border border-[#7997ff] rounded-[16px] p-4 bg-[#e5dccd]">
          <div className="flex items-center gap-2 text-[#7997ff] font-mono text-xs uppercase font-medium mb-1">
            <Timer className="w-4 h-4" />
            <span>LA FOTOCÉLULA Y EL ÁRBOL DE LARGADA</span>
          </div>
          <p className="body-editorial text-[14px]">
            En el Autódromo Gálvez el tiempo se medía con fotocélulas electrónicas en 60 pies, 201 metros y 402 metros. Si un auto caía por debajo del tiempo mínimo fijado para su categoría, quedaba "enganchado" (descalificado por exceso de velocidad), obligando a los preparadores a buscar una regularidad milimétrica.
          </p>
        </div>

        {/* Categories List */}
        <div className="space-y-4">
          {GALVEZ_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="border border-[#ab5700] rounded-[16px] p-5 bg-[#e5dccd] transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#ab5700]/25 pb-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold bg-[#ab5700] text-[#e8e359] px-2.5 py-1 rounded-[6px]">
                    {cat.clase}
                  </span>
                  <span className="font-display text-[20px] text-[#ab5700]">
                    {cat.name}
                  </span>
                </div>
                <div className="font-mono text-xs font-bold text-[#7997ff] bg-[#e5dccd] border border-[#7997ff] px-2.5 py-1 rounded-[9999px] w-fit">
                  TIEMPO TOPE: {cat.timeRange}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                <div>
                  <span className="text-[#d99623] uppercase text-[10px] block">AUTOS HABITUALES:</span>
                  <span className="text-[#ab5700]">{cat.typicalCars}</span>
                </div>
                <div>
                  <span className="text-[#d99623] uppercase text-[10px] block">REGLAS TÉCNICAS:</span>
                  <span className="text-[#ab5700]">{cat.tuningRules}</span>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-[#ab5700]/20 flex items-start gap-2 text-xs font-mono text-[#568037]">
                <Trophy className="w-4 h-4 shrink-0 mt-0.5 text-[#568037]" />
                <span>
                  <strong className="text-[#568037] font-semibold">Récord de época:</strong> {cat.mythicRecord}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="flex justify-between items-center border-t border-[#ab5700]/30 pt-4">
          <div className="font-mono text-xs text-[#ab5700]/70">
            ARCHIVO DIGITAL // SPORT MEET 90s* // FUENTE: REVISTAS CORSA & A TODO MOTOR (1994-1999)
          </div>
          <button
            onClick={onClose}
            className="btn-pill bg-[#e8e359] text-[#214534] border-[#e8e359] hover:bg-[#e8e359]/90"
          >
            VOLVER A LA PISTA
          </button>
        </div>
      </div>
    </div>
  );
};
