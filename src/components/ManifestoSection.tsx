import React from 'react';
import { VHSMediaFrame } from './VHSMediaFrame';
import { Sparkles, Gauge, Compass } from 'lucide-react';

export const ManifestoSection: React.FC = () => {
  return (
    <section
      id="manifiesto"
      className="w-full bg-[#e5dccd] py-[100px] px-6 select-none"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Headline in Parafina 500, 70px (clamp), line-height 0.85, Morning Glory #7997ff */}
        <div className="text-center mb-12 md:mb-16">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#ab5700] mb-3">
            MANIFIESTO EDITORIAL // CRÓNICA DE UNA CONVIVENCIA
          </div>
          <h2 className="heading-lg text-[#7997ff] max-w-[1000px] mx-auto uppercase">
            CUANDO EL WEBER 40/40 SE CRUZÓ CON EL VTEC EN EL MISMO SEMÁFORO*
          </h2>
        </div>

        {/* Wide Horizontal Archival Image with VHSMediaFrame */}
        <div className="w-full mb-10">
          <VHSMediaFrame
            imageSrc="/IMAGENES_Y_VIDEOS/SaveClip.App_839414082_17911960065491318_9097120242057877960_n.jpg"
            imageAlt="Playón de Encuentro Sport Meet 90s"
            osdTimestamp="OCT. 1995 - SHELL LIBERTADOR"
            tapeMode="SP / Hi8"
            aspectRatio="aspect-[21/9]"
            className="w-full h-[320px] md:h-[480px]"
          />
        </div>

        {/* 40px Gap Below Image (as requested in DESIGNarte.md) */}
        <div className="h-10" />

        {/* Editorial Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Chronicle in Poppins 16px, weight 400, line-height 1.40, color #ab5700 with inline #7997ff */}
          <div className="lg:col-span-7 space-y-6">
            <div className="font-mono text-xs uppercase tracking-wider text-[#d99623] flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#d99623]" />
              <span>EL RESCATE DOCUMENTAL DE UNA DÉCADA IRREPETIBLE</span>
            </div>

            <p className="body-editorial text-[16px] leading-[1.40]">
              Sport Meet 90s no es una página de compraventa de usados ni una galería nostálgica superficial armada con algoritmos modernos. Es un rescate documental riguroso, arqueología de asfalto y memoria oral de los años en que la cultura de autos callejeros en Argentina vivió su mayor revolución.
            </p>

            <p className="body-editorial text-[16px] leading-[1.40]">
              A partir de la convertibilidad y la apertura abrupta de importaciones en 1991, el paisaje de las noches porteñas cambió para siempre. En una misma estación de servicio de Libertador o en el playón de General Paz coincidían en el mismo surtidor un{' '}
              <span className="inline-blue">
                Fiat 128 IAVA o un 147 Sorpasso enfierrado con dos Weber 40/40 IDF, leva cruzada regulando trabado y trompa lisa
              </span>{' '}
              al lado de un{' '}
              <span className="inline-blue">
                Suzuki Swift GTi Twin Cam, un Honda Civic VTi EG6, un CRX, un Prelude, un Golf GTI VR6 o un BMW E36
              </span>{' '}
              recién bajados del barco en el puerto de Buenos Aires.
            </p>

            <p className="body-editorial text-[16px] leading-[1.40]">
              Eran dos filosofías mecánicas opuestas midiéndose en el mismo asfalto: de un lado, la sabiduría artesanal del preparador de barrio que limaba conductos a mano, hermanaba múltiples de fundición y afinaba carburadores con lámpara estroboscópica y oído absoluto; del otro, la precisión milimétrica del corte electrónico a más de 8.000 revoluciones por minuto. Y en el medio, los legendarios toros nacionales (Torino GS, Falcon Sprint y Chevy Serie 2) defendiendo su territorio con motores de seis y ocho cilindros en la recta de 402 metros del Gálvez.
            </p>
          </div>

          {/* Right Column: Historical Technical Matrix Card (20px radius, 1px solid #ab5700, #e5dccd fill) */}
          <div className="lg:col-span-5 border border-[#ab5700] rounded-[20px] p-6 bg-[#e5dccd]">
            <div className="flex items-center justify-between border-b border-[#ab5700]/30 pb-3 mb-4">
              <div className="flex items-center gap-2 font-display text-[18px] text-[#ab5700]">
                <Gauge className="w-5 h-5 text-[#ab5700]" />
                <span>FICHA DE CONTRASTE // 1991-1999</span>
              </div>
              <span className="text-[10px] font-mono text-[#7997ff] uppercase">
                DOS ESCUELAS
              </span>
            </div>

            <div className="space-y-4 font-mono text-xs">
              {/* Bloque 1 */}
              <div className="border border-[#ab5700]/30 rounded-[12px] p-3.5 bg-[#e5dccd]">
                <div className="text-[10px] text-[#7997ff] uppercase font-bold mb-1">
                  LA ESCUELA NACIONAL ASPIRADA
                </div>
                <div className="font-display text-[15px] text-[#ab5700] mb-1">
                  Fiat 128 IAVA / 147 Sorpasso / Gol AP 1.8
                </div>
                <div className="text-[12px] text-[#ab5700]/80 space-y-1">
                  <div>• Carburadores: Doble Weber 40/40 o 44/44 IDF</div>
                  <div>• Distribución: Árbol de levas Romero / Balestrini 12.80mm</div>
                  <div>• Sonido: Ralentí trabado sincopado a 1.100 RPM</div>
                  <div>• Puesta a punto: Destornillador, chicler y oído</div>
                </div>
              </div>

              {/* Bloque 2 */}
              <div className="border border-[#ab5700]/30 rounded-[12px] p-3.5 bg-[#e5dccd]">
                <div className="text-[10px] text-[#7997ff] uppercase font-bold mb-1">
                  EL DESEMBARCO IMPORTADO (1 A 1)
                </div>
                <div className="font-display text-[15px] text-[#ab5700] mb-1">
                  Suzuki Swift GTi / Civic EG6 / Uno Turbo i.e.
                </div>
                <div className="text-[12px] text-[#ab5700]/80 space-y-1">
                  <div>• Alimentación: Inyección electrónica multipunto + EPROM</div>
                  <div>• Tecnología: VTEC DOHC 16v / IHI Turbo refrigerado</div>
                  <div>• Régimen: Corte a 8.200 RPM en aspirados japoneses</div>
                  <div>• Chasis: Doble horquilla independiente en 4 ruedas</div>
                </div>
              </div>

              {/* Bloque 3 */}
              <div className="border border-[#ab5700]/30 rounded-[12px] p-3.5 bg-[#e5dccd]">
                <div className="text-[10px] text-[#d99623] uppercase font-bold mb-1">
                  EL MÚSCULO PESADO DE PISTA
                </div>
                <div className="font-display text-[15px] text-[#ab5700] mb-1">
                  Torino 380W / Falcon Sprint / Chevy Serie 2
                </div>
                <div className="text-[12px] text-[#ab5700]/80 space-y-1">
                  <div>• Cilindrada: 3.6L a 4.1L seis cilindros en línea</div>
                  <div>• Tracción: Trasera con diferencial autoblocante Dana 44</div>
                  <div>• Escenario: Los 402 metros de la recta del Gálvez</div>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-[#ab5700]/30 text-right">
              <span className="text-[10px] font-mono text-[#ab5700]/70 uppercase">
                FUENTE: ARCHIVO VIVO @SPORTMEET90S
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
