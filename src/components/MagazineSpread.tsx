import React from 'react';
import { ULTRA_HD_IMAGES } from '../data/mediaInventory';
import { BookOpen, Newspaper, Award } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const MagazineSpread: React.FC = () => {
  const { domRef, isRevealed } = useScrollReveal();
  const heroSpreadImg = ULTRA_HD_IMAGES[0] || {
    src: '/IMAGENES_Y_VIDEOS/SaveClip.App_839414082_17911960065491318_9097120242057877960_n.jpg',
    width: 2048,
    height: 1365,
    title: 'Pliego Central Revista Corsa 1996'
  };

  return (
    <section
      id="pliego-editorial"
      ref={domRef}
      className={`w-full bg-[#e5dccd] py-[90px] px-6 select-none border-y border-[#ab5700]/30 reveal-mask ${
        isRevealed ? 'is-revealed' : ''
      }`}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Magazine Masthead Header */}
        <div className="border-b-2 border-[#ab5700] pb-3 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs text-[#ab5700]">
          <div className="flex items-center gap-2">
            <Newspaper className="w-4 h-4 text-[#7997ff]" />
            <strong className="tracking-widest uppercase">PLIEGO CENTRAL // EDICIÓN ESPECIAL OCTUBRE 1996</strong>
          </div>
          <div className="text-[11px] text-[#7997ff] uppercase">
            REGISTRO DE PRENSA // REVISTA PARABRISAS & CORSA #1482
          </div>
        </div>

        {/* Double-Page Spread Headline */}
        <div className="mb-8">
          <h2 className="display text-[#ab5700] uppercase max-w-[1100px] leading-[0.85]">
            EL CHOQUE DE DOS MUNDOS: EL WEBER 40/40 SE CRUZÓ CON EL VTEC*
          </h2>
          <p className="font-display text-[22px] md:text-[26px] text-[#7997ff] mt-3 max-w-[850px] leading-tight">
            Cuando la convertibilidad abrió el puerto de Buenos Aires y la vieja escuela artesanal midió fuerzas con el régimen de 8.200 RPM.
          </p>
        </div>

        {/* Ultra-HD 2048px Photograph as Central Magazine Poster */}
        <div className="relative aspect-[21/9] md:aspect-[2.2/1] w-full rounded-[18px] overflow-hidden border border-[#ab5700] mb-10">
          <img
            src={heroSpreadImg.src}
            alt={heroSpreadImg.title}
            className="w-full h-full object-cover vhs-filter"
          />
          <div className="absolute inset-0 vhs-scanlines pointer-events-none" />

          {/* Editorial Photo Badge */}
          <div className="absolute bottom-3 left-3 z-10 font-mono text-[11px] bg-[#103d26]/85 text-[#e8e359] px-3 py-1 rounded-[6px] tracking-wider uppercase">
            FOTOGRAFÍA OFICIAL DE ARCHIVO @SPORTMEET90S // FORMATO 2048px
          </div>
        </div>

        {/* Asymmetric 3-Column Magazine Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[#ab5700]">
          {/* Column 1: Chronicle */}
          <div className="space-y-4 body-editorial text-[15px] leading-relaxed">
            <p>
              Hacia fines de 1994, una estación de servicio sobre Avenida del Libertador no era un simple punto de carga de combustible: era el termómetro cultural de una Argentina en plena metamorfosis económica y mecánica.
            </p>
            <p>
              El olor a nafta súper de alta graduación se mezclaba con el calor que emanaban los múltiples de escape recién templados. En el surtidor número cuatro descansaba un{' '}
              <span className="inline-blue">
                Fiat 128 IAVA con dos Weber 40/40 IDF regulando trabado
              </span>
              , con la trompa lisa y sin paragolpes, mientras al lado estacionaba un{' '}
              <span className="inline-blue">
                Suzuki Swift GTi Twin Cam recién bajado del barco en el puerto
              </span>
              .
            </p>
          </div>

          {/* Column 2: The Technical Contrast */}
          <div className="space-y-4 body-editorial text-[15px] leading-relaxed">
            <p>
              Los preparadores de barrio —esos artesanos que aprendieron el oficio limando conductos a mano con pasta de esmeril y probando levas cruzadas en la ruta antes del amanecer— miraban con desconfianza las computadoras de a bordo y los chips reprogramables.
            </p>
            <p>
              Sin embargo, no hubo guerra sino fascinación mutua. Los viernes a la noche en el Gálvez se transformaron en un laboratorio donde convivieron la succión de los carburadores italianos y el aullido agudo de los cuatro cilindros japoneses de dieciséis válvulas.
            </p>
          </div>

          {/* Column 3: Period Pull-Quote and Technical Box */}
          <div className="border border-[#ab5700] rounded-[16px] p-5 bg-[#e5dccd] flex flex-col justify-between">
            <div className="font-display text-[19px] text-[#7997ff] leading-snug italic border-b border-[#ab5700]/25 pb-4 mb-4">
              "En los noventa podías tener un auto armado de 500 caballos que de lunes a viernes te llevaba al trabajo y el viernes a la noche bajaba los 12 segundos en la recta del Gálvez."
            </div>

            <div className="space-y-2 font-mono text-xs">
              <div className="text-[10px] text-[#d99623] uppercase font-bold">
                GLOSARIO FIERRERO DE ÉPOCA
              </div>
              <div className="text-[#ab5700]/90">
                <strong>• Enfierrado:</strong> Modificado a fondo con levas, pistones y tapa.
              </div>
              <div className="text-[#ab5700]/90">
                <strong>• Trompa lisa:</strong> Sin parrilla ni paragolpes para mejorar refrigeración.
              </div>
              <div className="text-[#ab5700]/90">
                <strong>• Caño libre:</strong> Escape directo desde múltiple 4 a 1 sin silenciador.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
